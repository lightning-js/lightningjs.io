/*
 * Copyright 2024 Comcast Cable Communications Management, LLC
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
  

const config = {
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
            targetDir: 'renderer',
            sourceDir: 'typedocs',
        }
    ]
}

async function getTypedocs(repo) {
    const clonedRepoPath = path.join(config.tempDir, path.basename(repo.url, '.git'));
    const targetPath = path.join(config.targetBasePath, repo.targetDir);

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

async function buildTypedocs() {
    try {
        await Promise.all(config.repos.map(repo => getTypedocs(repo)));
    }
    catch(e) {
        console.log(e)
    }
}

buildTypedocs()