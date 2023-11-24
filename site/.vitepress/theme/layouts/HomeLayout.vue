<script setup>
import HeroDisplay from '../components/home/HeroDisplay.vue'
import Qoute from '../components/home/Qoute.vue'
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
    <main>
        <HeroDisplay/>
        <Qoute/>
        <NewFeature/>
        <JoinDiscord/>
        <BlitsPlus :data="blitsInfo"/>
        <BlitsPlus :data="solidInfo"/>
    </main>
    <Footer/>
</template>