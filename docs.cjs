/*
 * Copyright 2023 Comcast Cable Communications Management, LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

const path = require('path');
const fs = require('fs-extra');
const simpleGit = require('simple-git');
const git = simpleGit();
const shell = require('shelljs');

/**
 * Exec a shell command
 *
 * @param {string} command
 * @returns {number} Return code for command
 */
function exec(command) {
  return new Promise((resolve, reject) => {
    shell.exec(command, { async: true, silent: true }, (code, stdout, stderr) => {
      if (code !== 0) {
        console.error(stderr);
      }
      resolve(code);
    });
  })
}

// settings
const config = {
  tempDir: path.join(process.cwd(), '.temp-repos'),
  targetBasePath: path.join(process.cwd(), 'public', 'docs'),
  typedocTargetBasePath: path.join(process.cwd(), 'public', 'api'),
  sideBarFileSourcePath: path.join(process.cwd(), 'docs', 'v2', '_sidebar.md'),
  sideBarFileTargetPath: path.join(process.cwd(), 'public', 'docs', '_sidebar.md'),
  repos: [
    {
      gitURL: 'https://github.com/rdkcentral/Lightning',
      gitBranch: 'master',
      sourceDir: 'docs',
      targetDir: 'lightning-core-reference',
      ignoreFiles: ['README.md', '_sidebar.md'],
      typedocSourceDir: 'typedocs',
      typedocTargetDir: 'lightning-core',
      typedocBuildRequired: true
    },
    {
      gitURL: 'https://github.com/rdkcentral/Lightning-UI',
      gitBranch: 'main',
      sourceDir: 'docs',
      targetDir: 'lightning-ui-reference',
      ignoreFiles: ['README.md', '_sidebar.md']
    },
    {
      gitURL: 'https://github.com/rdkcentral/Lightning-CLI',
      gitBranch: 'master',
      sourceDir: 'docs',
      targetDir: 'lightning-cli-reference',
      ignoreFiles: ['README.md', '_sidebar.md', '.nojekyll', 'index.html']
    },
    {
      gitURL: 'https://github.com/rdkcentral/Lightning-SDK',
      gitBranch: 'master',
      sourceDir: 'docs',
      targetDir: 'lightning-sdk-reference',
      ignoreFiles: ['README.md', 'changelog.md', 'getting-started.md', '.nojekyll', 'index.html', 'package.json', '_sidebar.md'],
      typedocSourceDir: 'typedocs',
      typedocTargetDir: 'lightning-sdk',
      typedocBuildRequired: false
    },
  ]
};

async function getRemoteDocs(repo) {

  console.info('Getting docs from : ' + repo.gitURL);

  const clonedRepoPath = path.join(config.tempDir, path.basename(repo.gitURL, '.git'));
  const sourcePath = path.join(clonedRepoPath, repo.sourceDir);
  const targetPath = path.join(config.targetBasePath, repo.targetDir);

  try {

    // clean up existing temp repo & target dir & cloned repo path just in case the previous run failed
    await fs.remove(targetPath);
    await fs.remove(clonedRepoPath);

    // clone repo
    await git
      .clone(repo.gitURL, clonedRepoPath)
      .cwd(clonedRepoPath)
      .checkout(repo.gitBranch);

    // generate typedoc (if they exist)
    if (repo.typedocSourceDir && repo.typedocTargetDir) {
      console.info(`Building TypeDocs for ${repo.gitURL}`);
      const tdSourcePath = path.join(clonedRepoPath, repo.typedocSourceDir);
      const tdTargetPath = path.join(config.typedocTargetBasePath, repo.typedocTargetDir);
      shell.cd(clonedRepoPath);
      const typedocCommand = `npm install ${repo.typedocBuildRequired ? '&& npm run build' : ''} && npm run typedoc`
      const result = await exec(typedocCommand);
      if (result === 0) {
        await fs.move(tdSourcePath, tdTargetPath);
        console.info(`TypeDocs for ${repo.gitURL} built successfully.`);
      } else {
        console.error(`TypeDocs for ${repo.gitURL} failed with result:`, result);
      }
    }

    // move docs to target dir & delete all temp files
    await fs.move(sourcePath, targetPath);
    await Promise.all(repo.ignoreFiles.map(file => fs.remove(path.join(targetPath, file))));
    await fs.remove(clonedRepoPath);

    console.info('Finished getting docs from : ' + repo.gitURL);

  } catch (e) {
    console.error('An exception occurred while getting docs from :' + repo.gitURL);
    console.error(e);
    throw ('repoCloningFailed');
  }
}

async function generateSideMenu() {

  console.info('Side menu generation started');

  const tocTextRegex = /TOC_start[-]+>\s*([\w\W]*)\s*<![-]+TOC_end/m;
  let sideBarContent = await fs.readFile(config.sideBarFileSourcePath, 'utf8');

  for (const repo of config.repos) {

    console.info('Generating the menu for : ' + repo.targetDir);

    // read index.md file
    const indexContent = await fs.readFile(path.join(config.targetBasePath, repo.targetDir, 'index.md'), 'utf8');
    const tocMatches = indexContent.match(tocTextRegex);

    if (tocMatches && tocMatches[1]) {

      // prepare toc content
      const tocReplacements = [
        { regex: /\r\n/g, replacement: '\n' }, // convert line endings to unix
        { regex: /\t/, replacement: '  ' }, // replace tabs with 2 spaces
        { regex: /^(.*)$/gm, replacement: '  $1' }, // add 2 spaces to the beginning of each line (list identation)
        { regex: /\]\s*\((?!\/)/gm, replacement: '](/' + repo.targetDir + '/' }, // fix links coming from other index.md files, links that start with "/" are not replaced
        { regex: /[ \t\r\n]+$/, replacement: ''}, // remove trailing spaces and line endings
      ];

      let tocText = tocMatches[1];
      for (const item of tocReplacements) {
        tocText = tocText.replace(item.regex, item.replacement);
      }

      // add table of content text to the sidebar
      const sideBarRepoLinkRegex = new RegExp('(^\\*.*\\(/' + repo.targetDir + '/.*?)$', 'm');
      sideBarContent = sideBarContent.replace(sideBarRepoLinkRegex, '$1\n' + tocText);

    } else {
      console.error('TOC not found in ' + repo.targetDir + '/index.md');
      throw('TOCNotFound:' + repo.targetDir);
    }
  }

  // write sidebar file
  console.info('Creating the new side bar menu file');
  await fs.writeFile(config.sideBarFileTargetPath, sideBarContent);
}

async function buildDocs() {
  try {
    console.info('Starting building the documentation');
    await Promise.all(config.repos.map(repo => getRemoteDocs(repo)));
    await generateSideMenu();
  } catch (e) {
    console.error(e);
    throw('documentBuildFailed');
  }
}

// build docs
buildDocs().then(() => {
  console.log('The documentation is ready.')
}, (err) => {
  console.error(err);
  console.error('Building the documentation failed.');
});

const L3typedoc = {
  tempDir: path.join(process.cwd(), '.temp-repos'),
  targetBasePath: path.join(process.cwd(), 'public', 'api'),
  repos: [
      {
          url: 'https://github.com/lightning-js/renderer',
          branch: 'main',
          targetDir: 'renderer',
          sourceDir: 'typedocs',
      },
      {
          url: 'https://github.com/lightning-js/threadx',
          branch: 'main',
          targetDir: 'threadx',
          sourceDir: 'typedocs',
      }
  ]
}

async function getL3Typedocs(repo) {
  const clonedRepoPath = path.join(L3typedoc
  .tempDir, path.basename(repo.url, '.git'));
  const targetPath = path.join(L3typedoc
  .targetBasePath, repo.targetDir);

  try {
      await fs.remove(targetPath);
      await fs.remove(clonedRepoPath);

      await git
          .clone(repo.url, clonedRepoPath)
          .cwd(clonedRepoPath)
          .checkout(repo.branch)

      shell.cd(clonedRepoPath);

      const tdSourcePath = path.join(clonedRepoPath, 'typedocs');
      const tdTargetPath = path.join(targetPath, repo.targetDir);

      const build = await exec('pnpm install && pnpm run build && pnpm run typedoc');
      if (build === 0) {
          console.info(`TypeDocs for ${repo.url} built successfully.`);
      } else {
          console.error(`TypeDocs for ${repo.url} failed with result:`, build);
      }

      await fs.move(tdSourcePath, tdTargetPath);
  
  } catch (e) {
      console.error('An exception occurred while getting docs from :' + repo.url);
      console.error(e);
      throw ('repoCloningFailed');
  }
}

async function buildL3Typedocs() {
  try {
    console.info('Starting building L3 typedocs');
      await Promise.all(L3typedoc.repos.map(repo => getL3Typedocs(repo)));
  }
  catch(e) {
      console.error('An exception occurred while getting docs from');
      console.log(e)
  }
}

buildL3Typedocs()