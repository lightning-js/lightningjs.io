# lightningjs.io

New Lightning Site. How to get it working:

```
npm install
npm run docs:dev
```

What's working:

## BlogLayout
You can create blogs by adding markdown files in the `blogs` directory.

Make sure the on top of the markdown files you've set the right properties in frontmatter.

```md
---
layout: blog
title: Hello World
description: This is just a test
date: 2023-1-30
---
```

```
http://localhost:4173/blogs/*.md
```

## BlogsLayout

```
http://localhost:4173/blogs
```



