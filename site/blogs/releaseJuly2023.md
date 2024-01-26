---
layout: blog
title: Lightning 2.x July Release
description: The July release of Lightning is now available, bringing enhancements, bug fixes, and new features across all main components, including Lightning Core v2.11.0, Lightning SDK v5.4.0, and Lightning CLI v2.12.0.
date: 2023-7-31
author: Wouter-lucas van Boesschoten
---

Dear Lightning community,

We are excited to announce the summer release of Lightning! As part of our ongoing quarterly release schedule, we've named this the 'July Release'. As always, we're thrilled to bring to you a host of enhancements, bug fixes, and new features, all of which we're sure will enhance your Lightning experience.

We hope you're enjoying a fantastic summer. This release is packed with updates designed to improve your experience with Lightning. We've been hard at work incorporating your feedback, optimizing our offerings, and developing new features. However, due to the summer schedule, a few items had to be deferred to the October release. We apologize for any inconvenience this may cause and appreciate your understanding.

Please take the time to explore the latest versions of our key components:

- Lightning Core [v2.11.0](https://github.com/rdkcentral/Lightning)
- Lightning SDK [v5.4.0](https://github.com/rdkcentral/Lightning-SDK)
- Lightning CLI [v2.12.0](https://github.com/rdkcentral/Lightning-CLI)


# Changelog

## Lightning Core

- Updated typings of Element so `flexItem` can be `false`.
- Fixed an issue with applying vertex-specific color to the hole punch fragment.
- Fixed a regression related to TextTextureRenderer word wrapping. [#488](https://github.com/rdkcentral/Lightning/issues/488)
- Fixed alpha channel detection when using in-process image handling. [#493](https://github.com/rdkcentral/Lightning/issues/493)
- Fixed a typo referencing the `renderOffscreen` method of `Element`.
- Added `webgl2` as the fallback context option if `webgl` or `experimental-webgl` is unavailable. [#496](https://github.com/rdkcentral/Lightning/issues/496)
- Added event bubbling support for pointer events. [#485](https://github.com/rdkcentral/Lightning/issues/485)
- Added support for getting local coordinates with pointer events. [#484](https://github.com/rdkcentral/Lightning/issues/484)

## Lightning SDK

- Fixed an issue with applying vertex-specific color to the hole punch fragment.
- Added support for cleanup of event listeners and targets to prevent retaining memory during app lifetime.
- Added support to kill previously keepAlive page instance.

## Lightning CLI

- Fixed issue with rollup typescript project throwing error when accessing process env. [#235](https://github.com/rdkcentral/Lightning-CLI/issues/235)
- Added "include" config in tsconfig.json for `lng create` command.
- Added support for getting "esEnv" from settings.json file for `lng dist`. [#224](https://github.com/rdkcentral/Lightning-CLI/issues/224)
- Added support for transpiling .mjs files to ES5 with rollup.
- Fixed the issue related to Babel ignore not possible to use in a babel.config.json. [#117](https://github.com/rdkcentral/Lightning-CLI/issues/177)