<script setup>
import HeroDisplay from '../components/home/HeroDisplay.vue'
import Quote from '../components/home/Quote.vue'
import NewFeature from '../components/home/NewFeature.vue'
import Footer from '../components/home/Footer.vue'
import JoinDiscord from '../components/home/JoinDiscord.vue'
import BlitsPlus from '../components/home/BlitsPlus.vue'

const blitsInfo = {
  title: 'Blits'
}

const solidInfo = {
  title: 'Solid'
}
</script>
<template>
    <main class="mx-auto max-w-screen-lg bg-slate-100 dark:bg-[#020617]">
        <HeroDisplay/>
        <Quote/>
        <NewFeature/>
        <JoinDiscord/>
        <BlitsPlus :data="blitsInfo"/>
        <BlitsPlus :data="solidInfo"/>
    </main>
    <Footer/>
</template>