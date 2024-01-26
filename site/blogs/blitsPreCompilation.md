---
layout: blog
title: Pre-compilation added to Blits
description: Blits v0.6.0 has been released and introduces a new pre-compilation feature to improve the performance
date: 2024-1-4
author: Michiel van der Geest
---

2024 is starting with a fresh new Blits feature: **pre-compilation** for improved performance.

This feature was announced at the RDK summit when Lightning 3.0 was presented, and now it has landed in the framework.

Blits comes with a nice and readable XML-based template structure. This template and all the attached data binding for reactivity, are then being parsed and compiled into vanilla javascript instructions that the Lightning 3 renderer can understand.

Until now, this compilation step has been happening _runtime_, on the device. And although we haven’t really seen any noticeable lags on the RPi3 (our reference device), it’s evident that any additional on-device processing can negatively impact performance.

Particularly on lower-end devices, this can become an issue. We did see this in Lightning 2 as well. Despite Lightning 2 not having to parse XML templates like Blits does, there is a code yielding step in Lightning 2 that happens on the device at runtime. And this has always been a major bottleneck when spaning screens with many different components.

In version 0.6.0 of Blits, the template parsing and compilation to native renderer instructions, are offloaded to your development machine. The final app bundle will only contain the already compiled code, so less work has to happen on the device.

We’ve done some tests on the RPi3 and have seen that adding pre-compilation shaves off several milliseconds (between 5ms and 50ms!) from the initial instantiation time of Blits a component (depending on it’s complexity, of course). In a context where every ms counts to achieve 60fps, that’s a big deal. Especially on a page with several different components.

Pre-compilation mode is activated by default when you use v0.6.0 of Blits (or higher). A small modification to the Vite config of your App is required to enable it, though:

<img src="/assets/blogs/blits-precompilation-vite.png" class="rounded-lg py-5 w-full" style="max-width: 600px" />

If you wish to disable pre-compilation, you can do so in your App's `vite.config.js`, by adding `precompile: false` in the `blits` key:

```js
export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
    plugins: [...blitsVitePlugins],
    // ...
    blits: {
        precompile: false
    }
  }
})
```

Version 0.6.0 of Blits is now available on [NPM](https://www.npmjs.com/package/@lightningjs/blits/v/0.6.0). Enjoy the enhanced performance 🚀⚡️