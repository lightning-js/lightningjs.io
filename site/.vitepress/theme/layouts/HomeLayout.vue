<script setup>
//feature imports
import img_multithreading from '../../../assets/home/feature_multithreading.png'
import img_shader from '../../../assets/home/feature_shader.png'
import img_batched from '../../../assets/home/feature_batched.png'

import solid_code from '../../../assets/home/solid.jsx?raw'
import img_solid from '../../../assets/home/logo_solidjs_light.png'
import img_solid_dark from '../../../assets/home/logo_solidjs_dark.png'

import img_blits from '../../../assets/home/blits-logo.png'
import img_blits_dark from '../../../assets/home/blits-logo-white.png'
import blits_code from '../../../assets/home/blits.js?raw'

//these need their own
import img_fontrendering from '../../../assets/home/feature_font.png'

import HeroDisplay from '../components/home/HeroDisplay.vue'
import LightingjsInfo from  '../components/home/LightingjsInfo.vue'
import Quote from '../components/home/Quote.vue'
import NewFeature from '../components/home/NewFeature.vue'
import Footer from '../components/home/Footer.vue'
import JoinDiscord from '../components/home/JoinDiscord.vue'
import LegacyBlock from '../components/home/LegacyBlock.vue'
import BlitsContent from '../components/home/BlitsContent.vue'
import OtherFrameworks from '../components/home/OtherFrameworks.vue'

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
  otherFrameworks: [
    // {
    //   name: 'blits',
    //   url: 'https://lightningjs.io/v3-docs/blits/getting_started/intro.html',
    //   appUrl: 'https://blits-demo.lightningjs.io/#/',
    //   logo: img_blits,
    //   darkLogo: img_blits_dark,
    //   sampleCode: blits_code,
    //   codeType: 'js'
    // },
    {
      name: 'Solid',
      url: 'https://github.com/lightning-js/solid',
      appUrl: "https://lightning-js.github.io/solid-demo-app/#/",
      sampleCode: solid_code,
      codeType: 'jsx',
      logo: img_solid,
      darkLogo: img_solid_dark,
    }
  ],
  legacy: {
    title: 'Lightning 2',
    description: 'Lightning 2 and its counterparts are still supported and you can find our helpful links regarding these libraries here:'
  }
}

</script>
<template>
  <FancyBackground/>
  <main class="mx-auto max-w-screen-lg relative flex flex-col items-center gap-20">    
    <HeroDisplay class="mt-6"/>
    <LightingjsInfo class="mt-24"/>
    <NewFeature :features="home.renderer.features"/>
    <BlitsContent/>
    <OtherFrameworks :frameworks="home.otherFrameworks"/>
    <!-- <FancyBackground class="rotate-180"/> -->
    <!-- <FlavorCollection title="Build your App" :description="home.flavors.description" :flavors="home.flavors.flavors"/> -->
    <Quote/>
    <LegacyBlock :legacy="home.legacy"/>
    <JoinDiscord/>
  </main>
  <Footer class="mt-10"/>
</template>
