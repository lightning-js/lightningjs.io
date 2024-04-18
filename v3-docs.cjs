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
        shell.exec(command, { async: true, silent: true }, (code) => {
        resolve(code);
        });
    })
}

const config = {
    tempDir: path.join(process.cwd(), '.temp-repos'),
    targetBasePath: path.join(process.cwd(), 'site', 'v3-docs'),
    repos: [
        {
            gitURL: 'https://github.com/lightning-js/blits',
            gitBranch: 'master',
            sourceDir: 'docs',
            targetDir: 'blits',
            ignoreFiles: ['README.md', '_sidebar.md', '.nojekyll', 'index.html'],
        },
        {
            gitURL: 'https://github.com/lightning-js/solid',
            gitBranch: 'main',
            sourceDir: 'docs',
            targetDir: 'solid',
            ignoreFiles: ['README.md', '_sidebar.md', '.nojekyll', 'index.html'],
        },
    ]
}

function prefixLinks(prefix, array) {
    array.forEach((item) => {
        if(item.items) {
            item.items = prefixLinks(prefix, item.items);
        }
        if(item.link) {
            item.link = prefix + item.link;
        }
    })
    return array;
}

async function getRemoteDocs(repo) {
    const clonedRepoPath = path.join(config.tempDir, path.basename(repo.gitURL, '.git'));
    const sourcePath = path.join(clonedRepoPath, repo.sourceDir);
    const targetPath = path.join(config.targetBasePath, repo.targetDir);

    try {

        console.info('Remove existing docs');
        await fs.remove(targetPath);
        await fs.remove(clonedRepoPath);

        console.info('Cloning repo');
        await git
            .clone(repo.gitURL, clonedRepoPath)
            .cwd(clonedRepoPath)
            .checkout(repo.gitBranch);

        const prefix = `/${path.join('v3-docs', repo.targetDir)}`;

        let sidebar = fs.readFileSync(path.join(sourcePath, 'sidebar.json'));
        sidebar = prefixLinks(prefix, JSON.parse(sidebar));
        // sidebar = JSON.stringify({
        //     [`${prefix}`]: sidebar
        // })

        // await fs.writeFile(path.join(sourcePath, 'sidebar.json'), sidebar);

        console.info('Move docs to allocated folder, and remove unneeded file / directories')
        await fs.move(sourcePath, targetPath);

        await Promise.all(repo.ignoreFiles.map(file => fs.remove(path.join(targetPath, file))));
        await fs.remove(clonedRepoPath);
        console.info('Finished getting docs from : ' + repo.gitURL);
        return {
            prefix,
            sidebar
        }

        
    } catch (e) {
        console.error('An exception occurred while getting docs from :' + repo.gitURL);
        console.error(e);
        throw ('repoCloningFailed');
    }
}

async function buildDocs() {
    try {
        console.info('Starting building the documentation');
        const docs = await Promise.all(config.repos.map(repo => getRemoteDocs(repo)));

        const sidebar = {};
        docs.forEach((doc) => {
            sidebar[`${doc.prefix}`] = doc.sidebar;
        });

        const p = path.join(process.cwd(), 'site', '.vitepress', 'sidebars.json');

        await fs.writeFile(p, JSON.stringify(sidebar));
    } catch (e) {
        console.error(e);
        throw('documentBuildFailed');
    }
}

// buildDocs().then(() => {
//         console.log('The documentation is ready.')
//     }, (err) => {
//         console.error(err);
//         console.error('Building the documentation failed.');
// });

console.info('Remove node v3-docs.cjs from execution sequence')