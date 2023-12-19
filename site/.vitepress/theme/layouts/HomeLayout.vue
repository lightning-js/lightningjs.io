<script setup>
//feature imports
import img_multithreading from '../../../assets/home/feature_multithreading.png'
import img_shader from '../../../assets/home/feature_shader.png'
import img_batched from '../../../assets/home/feature_batched.png'

//these need their own
import img_fontrendering from '../../../assets/home/feature_multithreading.png'

//frameworks
//blits data
import img_blits from '../../../assets/home/blits-logo.png'
import img_blits_dark from '../../../assets/home/blits-logo-white.png'
import blits_code from '../../../assets/home/blits.js?raw'

//need light mode image
//solid data
import img_solid from '../../../assets/home/logo_solidjs_light.png'
import img_solid_dark from '../../../assets/home/logo_solidjs_dark.png'
import solid_code from '../../../assets/home/solid.jsx?raw'

import HeroDisplay from '../components/home/HeroDisplay.vue'
import Quote from '../components/home/Quote.vue'
import NewFeature from '../components/home/NewFeature.vue'
import Footer from '../components/home/Footer.vue'
import JoinDiscord from '../components/home/JoinDiscord.vue'
import FlavorCollection from '../components/home/FlavorCollection.vue'
import LegacyBlock from '../components/home/LegacyBlock.vue'

const home = {
  renderer: {
    title: 'New and Improved Features',
    description: 'Upcoming features of the Lightning Renderer. This part of our ecosystem is now in beta.',
    features: [
      {
        title: 'Improved Font Rendering',
        description: 'Crisper fonts, and better scaling.',
        image: img_fontrendering,
        span: 2,
      },
      {
        title: 'Batched Rendering',
        description: 'Render screens with fewer draw calls, by batching operations.',
        image: img_batched,
      },
      {
        title: 'Dynamic Shaders',
        description: 'Easier way of applying shader effects to nodes.',
        image: img_shader
      },
      {
        title: 'Multithreading',
        description: 'Spreading operations over multiple threads.',
        image: img_multithreading,
        span: 2
      }
    ],
  },
  flavors: {
    title: 'Choose your Flavor',
    description: 'The Renderer is not designed for direct application development but instead to provide a lightweight API for front-end applications we have some flavors available.',
    flavors: [
      {
        name: 'Blits',
        logo: img_blits,
        darkLogo: img_blits_dark,
        code: blits_code,
        codeType: 'js',
        description: 
          `Our in-house built, fully featured, App Development Framework. Blits is easy and intuitive to work with. 
          It goes hand in hand with the Lightning renderer, is lightweight and is built with performance first in mind.`,
        points: [
          'Easy to read XML-style templating',
          'Built-in Reactivity',
          'Reusable Components',
          'App Routing'
        ],
        align: 'left'
      },
      {
        name: 'Solidjs',
        description: 'Lightning Renderer implemented as Universal Renderer with SolidJS',
        logo: img_solid,
        darkLogo: img_solid_dark,
        code: solid_code,
        codeType: 'jsx',
        points: [
          'JSX',
          'Solidjs Reactivity and Functionalities'
        ],
        align: 'right'
      }
    ]
  },
  legacy: {
    title: 'Lightning 2',
    description: 'Lightning 2 and its counterparts are still supported and you can find our reference documentation about these libraries here:',
    links: [
      {
        title: 'Getting Started',
        url: 'https://lightningjs.io/docs/#/getting-started/index'
      },
      {
        title: 'Lightning Core',
        url: 'https://lightningjs.io/docs/#/lightning-core-reference/index'
      },
      {
        title: 'Lightning SDK',
        url: 'https://lightningjs.io/docs/#/lightning-sdk-reference/index'
      },
      {
        title: 'Lightning CLI',
        url: 'https://lightningjs.io/docs/#/lightning-cli-reference/index'
      },
      {
        title: 'Lightning UI',
        url: 'https://lightningjs.io/docs/#/lightning-ui-reference/index'
      },
      {
        title: 'Lightning Tools',
        url: 'https://lightningjs.io/docs/#/tools/index'
      }
    ]
  }
}

</script>
<template>
    <main class="mx-auto max-w-screen-lg bg-slate-100 dark:bg-[#020617]">
        <FancyBackground/>
        <HeroDisplay/>
        <Quote/>
        <NewFeature :features="home.renderer.features"/>
        <!-- <FancyBackground class="rotate-180"/> -->
        <FlavorCollection :title="home.flavors.title" :description="home.flavors.description" :flavors="home.flavors.flavors"/>
        <LegacyBlock :legacy="home.legacy"/>
        <JoinDiscord/>
    </main>
    <Footer/>
</template>