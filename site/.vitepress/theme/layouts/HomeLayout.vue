<script setup>
import HeroDisplay from '../components/home/HeroDisplay.vue'
import LightingjsInfo from  '../components/home/LightingjsInfo.vue'
import Quote from '../components/home/Quote.vue'
import NewFeature from '../components/home/NewFeature.vue'
import Footer from '../components/home/Footer.vue'
import JoinDiscord from '../components/home/JoinDiscord.vue'
import LegacyBlock from '../components/home/LegacyBlock.vue'
import BlitsContent from '../components/home/BlitsContent.vue'

</script>
<template>
  <FancyBackground/>
  <main class="mx-auto max-w-screen-lg relative flex flex-col items-center gap-20">    
    <HeroDisplay class="mt-6"/>
    <LightingjsInfo class="mt-24"/>
    <BlitsContent/>
    <NewFeature/>
    <Quote/>
    <LegacyBlock/>
    <JoinDiscord/>
  </main>
  <Footer class="mt-10"/>
</template>
