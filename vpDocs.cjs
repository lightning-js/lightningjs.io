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
    template: path.join(process.cwd(), 'vpTemplate'),
    tempDir: path.join(process.cwd(), '.temp-repos'),
    targetBasePath: path.join(process.cwd(), 'public', 'v3-docs'),
    repos: [
        {
            url: 'https://github.com/lightning-js/blits',
            branch: 'master',
            sourceDir: 'docs',
            targetDir: 'blits',
            name: 'Blits',
            ignoreFiles: ['README.md', '_sidebar.md', '.nojekyll', 'index.html'],
        },
        {
            url: 'https://github.com/lightning-js/solid',
            branch: 'main',
            sourceDir: 'docs',
            targetDir: 'solid',
            name: 'Solid',
            ignoreFiles: ['README.md', '_sidebar.md', '.nojekyll', 'index.html'],
        },
    ]
}

async function generateVitePressDocs(repo) {
    const clonedRepoPath = path.join(config.tempDir, path.basename(repo.url, '.git'));
    const sourcePath = path.join(clonedRepoPath, repo.sourceDir);
    const targetPath = path.join(config.targetBasePath, repo.targetDir);

    try {
        console.info('Remove existing docs');
        await fs.remove(targetPath);
        await fs.remove(clonedRepoPath);

        console.info('Cloning repo');
        await git
            .clone(repo.url, clonedRepoPath)
            .cwd(clonedRepoPath)
            .checkout(repo.branch)

        console.info('Remove extras from docs folder')
        await Promise.all(repo.ignoreFiles.map(file => fs.remove(path.join(targetPath, file))));
                
        console.info('Write vitepress config');
        await fs.copy(config.template, sourcePath);

        const p = path.join(sourcePath, '.vitepress', 'config.mjs');
        fs.writeFile(p, `
            import { defineConfig } from 'vitepress'
            import sidebar from '../sidebar.json'
            
            export default defineConfig({
                ignoreDeadLinks: true,
                base: '/v3-docs/${repo.targetDir}/',
                title: 'Lightningjs - ${repo.name}',
                description: 'Lightningjs ${repo.name} Documentation',
                outDir: '../vpDocs',
                head: [
                    ['link', { rel: "icon", sizes: "16x16", type: "image/png", href: '/favicons/lng_16x16.png'}],
                    ['link', { rel: "icon", sizes: "32x32", type: "image/png", href: '/favicons/lng_32x32.png'}]
                ],
                vite: {
                    base: '/v3-docs/${repo.targetDir}/',
                    publicDir: 'static'
                },
                themeConfig: {
                    siteTitle: 'Lightningjs - ${repo.name}',
                    sidebar,
                    search: {
                        provider: 'local'
                    },
                    logo: {
                        light: 'https://lightningjs.io/favicons/lng_grey.svg',
                        dark: 'https://lightningjs.io/favicons/lng.svg',
                    },
                    socialLinks: [
                        { icon: 'github', link: 'https://github.com/lightning-js' },
                        { icon: 'discord', link: 'https://discord.com/invite/Mpj4HjHyh8' }
                    ]
                }
            })
        `)
        
        shell.cd(clonedRepoPath);
        console.info('build vitepress docs');
        await exec('vitepress build docs');
        const vpDocs = path.join(clonedRepoPath, 'vpDocs');
        shell.cd(vpDocs);
        shell.ls('**/**.html').forEach(async (file) => {
            const target = path.join(vpDocs, file);
            const html = await fs.readFile(target, 'utf8');
            await fs.writeFile(target, html.replace(`href="/v3-docs/${repo.targetDir}/"`, `href="https://www.lightningjs.io"`));
        });
        console.info('move docs to public');
        await fs.move(vpDocs, targetPath);
        await fs.remove(clonedRepoPath);
    } catch(e) {
        console.error('An exception occurred while getting docs from :' + repo.gitURL);
        console.error(e);
        throw ('repoCloningFailed');
    }
}

async function buildDocs() {
    try {
        console.info('Starting building the documentation');
        await Promise.all(config.repos.map(repo => generateVitePressDocs(repo)));

    } catch (e) {
        console.error(e);
        throw('documentBuildFailed');
    }
}

buildDocs().then(() => {
        console.log('The documentation is ready.')
    }, (err) => {
        console.error(err);
        console.error('Building the documentation failed.');
});