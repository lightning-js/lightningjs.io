---
layout: blog
title: Child to Parent communication in Blits 
description: 4 ways for Children to communicate to their Parent Component (and when to use which)
date: 2025-19-8
author: Michiel van der Geest
---

Yesterday our team was discussing the best way for a child component to talk to its parent.

Think of a Rail component that needs to tell its parent when it has scrolled left or right, so the parent can show or hide a background image. What's the best way for that event to bubble up to the component that implements the Rail?

In Blits, the most common approach for inter-component communication is to **`$emit()` events**. This fires an event (with optional data) and lets the parent - or any other component - listen to it and react.

Alternatively, you could use the **Global App state**, where a child updates the global state, which then triggers reactive updates in the parent.

Both of these approaches work fine, but if you just want to update your direct parent, they can feel a bit heavy-handed.

Here are two other options that are sometimes overlooked:


### 1) Access the parent directly

Did you know you can access the parent component directly via `this.parent`? This allows you to easily and efficiently call updates on the parent from a child.

```js
this.parent.updateHappened()
```

This is quick and simple, but there's a caveat: it creates a _tight relationship_ between the child and its parent. The child depends on the parent having an `updateHappened`-method available. That means the child can't just be dropped anywhere - it assumes a certain context.

You can guard against this by first checking if the method exists on the parent, but architecturally you're still creating a dependency from child to parent.

### 2) Expose a callback prop

Another option is to expose a `callback` _prop_ on the child. The child component can invoke the callback whenever an update event happens, and what actually happens inside that callback is entirely up to the parent. The child stays unaware.

```js
Blits.Component('Child', {
	props: [{
		onScroll: () => {}
	}],
	input: {
		down() {
			this.onScroll(this.scrollIndex)
		}
	}
})

Blits.Component('Parent', {
  components: {
    Child
  },
  template: `
    <Element>
      <Child :onScroll="() => $hasUpdate()"
    </Element>`,
  methods: {
    hasUpdate() {
      //
    }
  }
})
```

This approach keeps the child reusable and isolated, with no assumptions about where it's used.

### Which option to use?

All of the above are valid ways for children to communicate with parents. Choosing the right one depends on the situation (and on your personal preference):

- ***Emitting events*** is useful if you want to notify something beyond the direct parent (or multiple components in your app).

- **Global state** is handy when emitters/listeners start to get messy and you need more structure - but I'd still limit it to non-direct communication.

- **Calling the parent directly** works, but tightly couples child and parent. If the parent method doesn't exist, things break. This is fine if you know the parent-child relationship will always exist and you don't intend to reuse the child elsewhere.

- **Callback props** are architecturally the cleanest. They keep the child reusable and unaware of what the parent does with the data. The child can exist in full isolation.

That's it, four different ways for parent-child communication in Blits. Personally, I like the callback props for direct parent updates. And I'd reach for emits or state only when the communication needs to travel further.

Check this simple [Lightning Playground example](https://playground.lightningjs.io/#npZRbv0WVcCe) to see 3 different communication methods in action: