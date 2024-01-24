---
layout: blog
title: Text-to-Speech now available in Blits
description: Blits v0.6.1 comes with built-in Text-to-Speech (aka Announcer) capabilities to make your Apps more accessible
date: 2024-1-8
---

A new important piece of functionality has been added to Blits: **Text-to-Speech** (also known as **Announcer** capability).
The Announcer implementation in Blits, is one first step in making it a lot easier for developers to build Accessible Apps.

But what is _Accessibility_ exactly? Accessibility refers to designing products and systems that are usable for people with diverse abilities. Think of people with visual impairments, hearing impairments, physical disabilities, cognitive disabilities etc.

In the context of TV applications, accessibility means making sure that all users can access and enjoy the content regardless of their specific needs or limitations.

Making Apps accessible is something that is often overlooked during development. Have you ever imaged how a visually impaired user would navigate through your App and enjoy it's content?

One way of making your App more accessible for this group of users, is by integrating _Speech assistance_. With Text-to-Speech functionality, people with difficulty reading or navigating through a TV application using traditional means, are provided with auditory cues, to guide and help them to understand the context.

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

The game guides the users with Text-to-Speech messages as they navigate through the memory cards. When a card is flipped, it announces the image displayed on it. And afterwards it tells you whether or not you have gotten a pair. 


<video width="100%" style="margin: 48px 0px" controls>
  <source src="/public/blogs/accessible-memory-game.mp4" type="video/mp4">
</video>


It turned out a lot of fun to make this game! It only took a Friday afternoon of work, to get from idea to a working version (that’s how fast you can develop with Blits and Lightning 3!)

You can try the game yourself over [here](https://blits-demo.lightningjs.io/). And please check the source code, which is available at the Example App's [GitHub repo](https://github.com/lightning-js/blits-example-app) for reference.

