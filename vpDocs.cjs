const path = require('path');
const fs = require('fs-extra');
const simpleGit = require('simple-git');
const git = simpleGit();

const config = {
    tempDir: path.join(process.cwd(), '.temp-repos'),
    targetBasePath: path.join(process.cwd(), 'site', 'v3-docs'),
    repos: [
        {
            url: 'https://github.com/lightning-js/blits',
            branch: 'vitepress',
            sourceDir: 'docs',
            targetDir: 'blits',
            landing: 'getting_started/intro',
            name: 'Blits',
            ignoreFiles: ['README.md', '_sidebar.md', '.nojekyll', 'index.html'],
        }
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
            .checkout(repo.branch);

        const prefix = `/${path.join('v3-docs', repo.targetDir)}`;

        let sidebar = fs.readFileSync(path.join(sourcePath, 'sidebar.json'));
        sidebar = prefixLinks(prefix, JSON.parse(sidebar));

        console.info('Move docs to allocated folder, and remove unneeded file / directories')
        await fs.move(sourcePath, targetPath);

        await Promise.all(repo.ignoreFiles.map(file => fs.remove(path.join(targetPath, file))));
        await fs.remove(clonedRepoPath);

        console.info('Finished getting docs from : ' + repo.url);

        return {
            prefix,
            sidebar
        }

        
    } catch (e) {
        console.error('An exception occurred while getting docs from :' + repo.url);

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

buildDocs().then(() => {
        console.log('The documentation is ready.')
    }, (err) => {
        console.error(err);
        console.error('Building the documentation failed.');
});