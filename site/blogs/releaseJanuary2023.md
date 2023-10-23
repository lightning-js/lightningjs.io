---
layout: blog
title: Lightning 2.x January Release
description: Lightning January release includes bug fixes, new features and improvements to enhance development experience; upload functionality removed, moved to Metrological SDK, CLI includes fixes and Socket.io for live reload; users encouraged to update and refer to documentation for more information.
date: 2023-2-22
---

# Lightning core [v2.9.0](https://www.npmjs.com/package/@lightningjs/core/v/2.9.0)

Lightning core v2.9.0 includes fixes for issues related to package.json exports, an alignment issue when using the advanced text renderer, and an inconsistency in the handling of default fonts. Additionally, new features have been added, such as instant freeing up of text textures to prevent memory building up when text is being changed and an example of basic subclassing in the TypeScript docs.

# Lightning CLI [v2.10.0](https://www.npmjs.com/package/@lightningjs/sdk/v/5.3.0)

Lightning CLI v2.10.0 includes fixes for issues such as .gitignore being rewritten on each build, _states() being broken for esbuild bundle when NODE_ENV=production, and the introduction of Socket.io for live reload. Additionally, the CLI now supports using environment variables set on the process.env in addition to variables defined in .env files.

We want to inform our users that the upload functionality has been removed from this release. Previously used for uploading applications to the Metrological Application Store, this feature has now been moved to the Metrological CLI, which can be found [here](https://github.com/Metrological/metrological-cli). To continue uploading applications to the Metrological App Store, please refer to the CLI readme. For more information on how to run or use applications on the Metrological application platform please see the Metrological-SDK.

We encourage all users to update to the latest release and take advantage of the new features and improvements. For more information on this release, please refer to our documentation.