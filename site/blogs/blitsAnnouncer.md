---
layout: blog
title: Text-to-Speech now available in Blits
description: Blits v0.6.1 comes with built-in Text-to-Speech (aka Announcing) capabilities to make your Apps more accessible
date: 2024-1-4
---

A new important piece of functionality has been added to Blits: **Text-to-Speech** (also known as **Announcer** capability).

The Announcer implementation in Blits, will help developers make their Apps more _accessible_ - something that’s often overlooked when during development. But having speech assistance integrated into your App is a huge deal for those users that are visually impaired.

### Integrated with the router

The Announcer in Blits is directly integrated with the framework’s router functionality. This means that through simple configuration, a descriptive message can be announced, when navigating from page to page - _no custom code required_! 

```js
const routes = [
  // ...
  {
    path: '/settings',
    component: Settings,
    announce: "Welcome to the Settings page",
  },
  // ...
]

```

### Easy to use API for speaking out messages

Furthermore there is an easy to use API for speaking out messages, that can be connected to different (user input) events. For example when a button receives focus or when you reach the end of a row of posters.

```js
Blits.Component('MyComponent', {
  // ...
  hooks: {
    focus() {
      this.$announcer.speak('MyComponent just got focus')
    }
  },
  keys: {
    right() {
      if(this.focused === this.items.length - 1) {
        this.$announcer.speak('End of row reached')
      } else {
        //
      }
    }
  }
})

```

### Announcer example

Of course the release of Blits v0.6.1 comes together with an Text-to-Speech demo in the Blits Example App, to showcase how developers can implement the new announcer functionality into their own Apps.

Now, we could have gone with a boring example, but what’s the fun in that?! Instead we went all in and created an **"Accessible Memory Game"** 😀

The game guides the users with Text-to-Speech messages as they navigate through the memory cards. When a card is flipped, it announces the image displayed on it. And afterwards it tells you wether or not you have gotten a pair. 


<video width="100%" style="margin: 48px 0px" controls>
  <source src="/assets/blogs/accessible-memory-game.mp4" type="video/mp4">
</video>


It turned out a lot of fun to make this game! It only took a Friday afternoon of work, to get from idea to a working version (that’s how fast you can develop with Blits and Lightning 3!)

You can try the game yourself over [here](https://blits-demo.lightningjs.io/). And please check the source code, which is available at the Example App's [GitHub repo](https://github.com/lightning-js/blits-example-app) for reference.

