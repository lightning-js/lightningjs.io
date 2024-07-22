---
layout: blog
title: Lightning 3.0 Release
description: Lightning 3.0 release out now! Come check it out.
date: 2024-7-18
author: Wouter-lucas van Boesschoten
---

<!-- <img src="/assets/yveIneedaLightning3banner.jpg" class="rounded-lg w-full" /> -->
<!-- plaatje met Beta doorgestreept?? -->

After being in Beta for a while, we're super proud to announce that Lightning 3.0 has been officially released! You can find the official latest releases [here](https://github.com/lightning-js/renderer/releases/tag/v1.0.0) and [here](https://github.com/lightning-js/blits/releases/tag/v1.0.0)

It's been a tremendous journey and we couldn't have done it without such a great community, from bug hunters, people testing this on exotic devices to really cool contributions. Thanks everyone that is involved! We can't wait to see what apps will emerge, either new or transitioning from Lightning 2 to 3. 

<a href="https://blits-demo.lightningjs.io/#/demos/tmdb"><img src="/assets/lightning3release/blits_tmdb.png" class="rounded-lg w-full" /></a>

To get started with Lightning 3 you can also have a demo [here](https://blits-demo.lightningjs.io/) or the [source](https://github.com/lightning-js/blits-example-app) of the demo.

# What changed from the Beta?

A lot. And we mean it, there's been a tremendous amount of effort done by the team across all packages to ensure Lightning 3.0's maturity. With a big focus on performance, memory reduction and feature completeness.

From an App perspective these are new Blits features you can use:
* Router changes: animated page transitions [PR17](https://github.com/lightning-js/blits/pull/17), pass data while navigating [PR61](https://github.com/lightning-js/blits/pull/61), History and back handling [PR24](https://github.com/lightning-js/blits/pull/24) and a before hook [PR83](https://github.com/lightning-js/blits/pull/83)
* Custom shader support [PR23](https://github.com/lightning-js/blits/pull/23)
* FPS Counter component [PR35](https://github.com/lightning-js/blits/pull/35)
* Automatic MSDF font generation [PR71](https://github.com/lightning-js/blits/pull/71)
* TypeScript support [PR86](https://github.com/lightning-js/blits/pull/86)
* Pre-compilation support [PR37](https://github.com/lightning-js/blits/pull/37)
* Watcher functionality [9a11](https://github.com/lightning-js/blits/commit/9a118814df54ee568f464decfd4d9f1b5210fce5)
* Support for percentages in dimensions and positioning [8bfed86](https://github.com/lightning-js/blits/commit/8bfed86f7bb3d76362fb728aea49a2b2d55eb863)
* Support for `@loaded` / `@error` events on Elements [34ad823](https://github.com/lightning-js/blits/commit/34ad823afe2a6a8363c1d6288d374453e5c64adc)
* Support for Slots [a7de99](https://github.com/lightning-js/blits/commit/a7de9998e2b04ac28f1ccd6b1de40f27b32c8ef8)
* Text to speech plugin [99af701](https://github.com/lightning-js/blits/commit/99af701edf3160aad75191b1fe86d133f444ac0e)
* Support for custom key mapping [39dcf2](https://github.com/lightning-js/blits/commit/39dcf276b3cc827a4edf2edf4a89821fd949db2d)
* Support for dynamic components via `is`-attribute [0dc56c](https://github.com/lightning-js/blits/commit/0dc56c181860563eb3544e930c1cb3b0d7a950a6)


...including loads of changes to the VSCode extension! Check that out [here](https://marketplace.visualstudio.com/items?itemName=LightningJS.lightning-blits)

Of course that's just the App Framework section of it, the Renderer got to see a lot of changes. As its the heart of Lightning 3, there's simply too much to list all together. But these are some highlights:

* Bounds Margin, the ability to only render whats visible on screen. See [PR191](https://github.com/lightning-js/renderer/pull/191)
* Render To Texture, the ability to collapse part of the render tree to a single texture. See [PR186](https://github.com/lightning-js/renderer/pull/186)
* Animatable Shader properties to dynamically update active effects [PR314](https://github.com/lightning-js/renderer/pull/314)
* Canvas2D renderer, alternative rendering technique to WebGL. See [PR246](https://github.com/lightning-js/renderer/pull/246)
* Support for older TV's / browsers. See [PR341](https://github.com/lightning-js/renderer/pull/341), [PR202](https://github.com/lightning-js/renderer/pull/202), [PR40](https://github.com/lightning-js/renderer/pull/40), [PR305](https://github.com/lightning-js/renderer/pull/305), [PR203](https://github.com/lightning-js/renderer/pull/203) and more....
* Image Worker support, to load images outside of the main thread: [PR128](https://github.com/lightning-js/renderer/pull/128)
* Texture Compression, this allows support for compressed .ktx textures using ETC1 or ETC2 compression algorithms: [PR143](https://github.com/lightning-js/renderer/pull/143)
* An inspector for debugging, this will clone the active render tree in the DOM for easy inspection using devtools: [PR167](https://github.com/lightning-js/renderer/pull/167)

However this is just a snippet of all the features that went in! And there where a ton of performance upgrades that boosted the FPS >50 on most devices, reduced JSHEAP memory usage, improved GFX memory management and creation/delete timing:

* Pause RAF when idle to prevent overloading the requestAnimationFrame handler [PR99](https://github.com/lightning-js/renderer/pull/99)
* Dependency Graph driven updates to do more granular CoreNode updates [PR103](https://github.com/lightning-js/renderer/pull/103)
* Rendering performance optimizations to enhance the overall FPS [PR91](https://github.com/lightning-js/renderer/pull/91), [PR112](https://github.com/lightning-js/renderer/pull/112), [PR249](https://github.com/lightning-js/renderer/pull/249)
* Visual Regression Tests that allows Lightning 3 to quick fast iterations and maintain control over the changes coming in [PR92](https://github.com/lightning-js/renderer/pull/92)
* Removal of ThreadX and Drivers to drastically reduce JSHEAP memory usage and lower node creation/deletion times [PR280](https://github.com/lightning-js/renderer/pull/280)
* Memory Management to ensure proper Texture Graphics memory management PRs: [PR211](https://github.com/lightning-js/renderer/pull/211), [PR301](https://github.com/lightning-js/renderer/pull/301), [PR27](https://github.com/lightning-js/renderer/pull/27)
* Canvas2D font rendering performance PRs to rival Lightning 2's Canvas Font rendering: [PR319](https://github.com/lightning-js/renderer/pull/319)
* And lots of SDF font rendering updates to ensure mature font rendering: [PR257](https://github.com/lightning-js/renderer/pull/257), [PR185](https://github.com/lightning-js/renderer/pull/185), [PR213](https://github.com/lightning-js/renderer/pull/213), [PR136](https://github.com/lightning-js/renderer/pull/136)

To validate performance we've created a [Benchmark](https://github.com/lightning-js/benchmark) to measure consistent differences between releases and changes on the Renderer. This is along side various FPS benchmark tools like [this](https://blits-demo.lightningjs.io/#/benchmarks/exponential).

<a href="https://github.com/lightning-js/benchmark"><img src="/assets/lightning3release/benchmark.png" class="rounded-lg w-full" /></a>

Just to list a few big changes, all-in-all it's been a very busy year and we're very proud to announce Lightning 3.0 is here!
If you like to get started you can find a getting started guide [here](https://lightningjs.io/v3-docs/blits/getting_started/getting_started.html).

# What's next?

However this certainly doesn't end here, there is still lots of really cool features to implement, bugs to hunt and performance gains to be made. For the short term these are some important topics the team will be focussing on:

- Canvas font performance improvements, per experiments in [PR322](https://github.com/lightning-js/renderer/pull/322)
- Further Bundle size reductions (importable font engines, renderers, animation handlers)
- Permanent node feature (GC lock) to prevent nodes from being garbage collected
- Advanced animations (gaming/splash screens) for frame accurate animations
- Global app state in Blits for shared state sharing across pages/components
- Reintroduce WebGL2 batched rendering to further speed up the rendering performance

Be sure to stay tuned for future releases! 

And if you run into anything, please be sure to create a GH issue in the respective components and/or hop into our [Discord](https://discord.com/invite/Mpj4HjHyh8). 
