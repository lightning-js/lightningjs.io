# lightningjs.io

Lightningjs website, source for Lightningjs information regarding all ecosystems.

## Collaborate
Find any problems on the site or mistakes in information? Help us out resolving the problem!

## Usage
Clone repository and follow these steps;

```
npm install
npm run docs:dev
```


## Making Blogs

### BlogLayout
You can create blogs by adding markdown files in the `blogs` directory.

Make sure the on top of the markdown files you've set the right properties in frontmatter.

```md
---
layout: blog
title: Hello World
description: This is just a test
date: 2023-1-30
author: Me Myself and I
linkImage: '/blogs/myLinkImage' #link image needs to be in site/static folder or remote link
---
```

```
http://localhost:4173/blogs/*.md
```

### BlogsLayout
Blogs layout will automatically sort all the markdown files in the `blogs` directory on a single page from newest to oldest by date.

```
http://localhost:4173/blogs
```

## Docs
Most documentation / examples located on this repository will be a combination of Lightning Renderer and Lightning Blits (or other flavors) libraries.
Library specific documentation will be maintained on the repository of the library and will be imported the moment the website is being updated.

### Documentation Structure
For the documentation structure for each Library it's important that we use pages to split up the information so it is easier to find, and or linked with others.

### Remote Docs Config
In order for the site to import the docs from the other repositories we have a config script named [v3-docs.cjs](v3-docs.cjs). In this script is a `config` object which had a collection of repos. The settings for each repository is an object with the following properties;

```js
{
    gitURL: 'https://github.com/lightning-js/repoName'
    gitBranch: 'main',
    sourceDir: 'docs',
    targetDir: 'repoName',
    ignoreFiles: ['README.md', '_sidebar.md', '.nojekyll', 'index.html'],
}
```

#### Sidebar Configuration
Each `sourceDir` needs to have a sidebar.json file in which the the structure of the sidebar is defined;

```json
[
    {
        "text": "Getting Started",
        "items": [
            {
                "text": "Introduction",
                "link": "/introduction"
            },
            {
                "text": "Setup",
                "link": "/getting_started"
            }
        ]
    },
    {
        "text": "Topic",
        "items": [
            {
                "text": "label",
                "link": "/mardownFile"
            },
            {
                "text": "label2",
                "link": "/mardownFile2"
            }
        ]
    },
]
```

`link` property is a markdownfile path without the .md file specification