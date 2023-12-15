---

# https://vitepress.dev/reference/default-theme-home-page

layout: home2

features:
  - title: Improved Font Rendering
    description: Crisper fonts, and better scaling.
    image: /assets/home/website_multithreading.png
    span: 2
  - title: Batched Rendering
    description: Render screens with fewer draw calls, by batching operations.
    image: /assets/home/website_gradient.png
  - title: Dynamic Shaders
    description: Easier way of applying shader effects to nodes.
    image: /assets/home/website_gradient.png
  - title: Multithreading
    description: Spreading operations over multiple threads.
    image: /assets/home/website_multithreading.png
    span: 2


frameworks:
  - name: Blits
    logo: /assets/home/blits-logo.png
    darkLogo: /assets/home/blits-logo-white.png
    code: /assets/home/blits.js
    codeType: js
    description: |
      Our in-house built, fully featured, App Development Framework. Blits is easy and intuitive to work with. 
      It goes hand in hand with the Lightning renderer, is lightweight and is built with performance first in mind.
    points:
      - Easy to read XML-style templating
      - Built-in Reactivity
      - Reusable Components
      - App Routing
    align: left

  - name: Solidjs
    description: Lightning Renderer implemented as Universal Renderer with SolidJS
    logo: /assets/home/logo_solidjs.png
    darkLogo: /assets/home/logo_solidjs.png
    code: /assets/home/solid.jsx
    codeType: jsx
    points:
      - JSX
      - Solidjs Reactivity and Functionalities
    align: right
---