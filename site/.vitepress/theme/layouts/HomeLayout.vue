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
import img_solid from '../../../assets/home/logo_solidjs.png'
import img_solid_dark from '../../../assets/home/logo_solidjs.png'
import solid_code from '../../../assets/home/solid.jsx?raw'

import HeroDisplay from '../components/home/HeroDisplay.vue'
import Quote from '../components/home/Quote.vue'
import NewFeature from '../components/home/NewFeature.vue'
import Footer from '../components/home/Footer.vue'
import JoinDiscord from '../components/home/JoinDiscord.vue'
import FrameworkBlock from '../components/home/FrameworkBlock.vue'

const home = {
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
  blits: {
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
  solid: {
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
}

</script>
<template>
    <main class="mx-auto max-w-screen-lg bg-slate-100 dark:bg-[#020617]">
        <FancyBackground/>
        <HeroDisplay/>
        <Quote/>
        <NewFeature :features="home.features"/>
        <JoinDiscord/>
        <!-- <FancyBackground class="rotate-180"/> -->
        <FrameworkBlock :framework="home.blits"/>
        <FrameworkBlock :framework="home.solid"/>
    </main>
    <Footer/>
</template>