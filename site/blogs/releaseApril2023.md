---
layout: blog
title: Lightning 2.x April Release
description: The April 2023 Lightning release brings exciting updates; Vite replaces rollup, Vitest introduced for unit testing, fixes for word wrapping and device pixel ratio. The SDK fixes a router backtrack issue. The CLI has several improvements and now comes with CORS support.
date: 2023-4-28
author: Wouter-lucas van Boesschoten
---

The new April release of Lightning is here, and it's packed with exciting updates and improvements that will make your development experience even smoother. Let's take a look at the changes:

# Lightning Core
First up, Lightning Core has been updated to version 2.10.0. One of the biggest changes is the integration of Vite to replace the rollup bundler. Additionally, Vitest has been integrated for unit testing.

Some other notable improvements in Lightning Core include the implementation of word wrapping support on zero-width breaking spaces, added support for device pixel ratio with the option devicePixelRatio, and fixes for text rendering at high precision levels causing incorrect word wrapping.

There are also some Typescript specific changes: the `getByRef()` error when using generic type param as Ref value, is fixed. And in this version of Lightning Core, default loose type configs are implemented for Typescript.

# Lightning SDK
Next, the Lightning SDK has been updated to version 5.3.2, with a focus on fixing issues and improving overall stability. One of the most significant fixes is for the router backtrack issue, where the application was not behaving properly in case of deeplinks.

# Lightning CLI
Finally, the Lightning CLI has been updated to version 2.11.0, with some useful new features and bug fixes.

We have removed the license texts from the fixtures used to create new Apps. So new apps created with the CLI don't come with unnecessary licenses anymore.

There's also a fix for a build issue related to the rollup path when using NPX, solving issues for the Metrological CLI. Plus, support for CORS has been added in `lng serve` via a new environment variable (`LNG_SERVE_CORS`).

# Happy coding
That's all for the April `23 release. Go ahead and update your projects to take advantage of these new improvements and fixes. And Happy coding!