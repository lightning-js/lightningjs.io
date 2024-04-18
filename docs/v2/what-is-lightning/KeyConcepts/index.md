# Key Concepts


Lightning distinguishes itself from similar platforms by the following key concepts:

* [Render Engine](#render-engine)
* [Router](#router)
* [Remote Control Interaction](#remote-control-interaction)

## Render Engine


The most important Lightning component is the WebGL 2d *Render Engine*. Its goal is to convert the defined and changed Render Tree to a series of WebGL commands. It attempts to do this as fast as possible.

> See [WebGL Render Engine](/lightning-core-reference/RenderEngine/index) in the [Lightning Core Reference](/lightning-core-reference/index) for a detailed description of the Lightning Rendering mechanism.

## Router


The *Router* plugin provides an easy way to use APIs that help you create a URL-driven, routed Lightning App.


The Router plugin is typically used to navigate between Pages, which are actually Lightning Components (in other words, they belong to an extension of the 'Lightning.component' class).


Optionally, you can attach one or more Callback functions to a route.


Besides taking away a lot of boilerplate code, the Router plugin can be beneficial for memory management as well, due to it’s configurable
[lazy creation](/lightning-sdk-reference/plugins/router/settings.md#lazyCreate) and [lazy destroy](/lightning-sdk-reference/plugins/router/settings.md#lazyDestroy) functionality. This is especially helpful when you are deploying Apps on low-end devices with less memory (RAM / VRAM).

> See the description of the [Router](/lightning-sdk-reference/plugins/router/index.md) plugin in the [Lightning SDK Reference](/lightning-sdk-reference/index) for more information.

## Remote Control Interaction


TV remote devices usually generate key events in the browser. Lightning attaches a key event listener to the canvas element, and provides a way to handle key-based input.


To be able do this, Lightning needs to know which component is the active component, which should handle key events. The active component and its descendants (including the App itself) are called the *focus path*.

> See the section [Remote Control Interaction](/lightning-core-reference/RemoteControl.md) in the [Lightning Core Reference](/lightning-core-reference/index) for more information.
