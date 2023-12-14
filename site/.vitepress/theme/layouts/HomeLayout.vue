<script setup>
import HeroDisplay from '../components/home/HeroDisplay.vue'
import Quote from '../components/home/Quote.vue'
import NewFeature from '../components/home/NewFeature.vue'
import Footer from '../components/home/Footer.vue'
import JoinDiscord from '../components/home/JoinDiscord.vue'
import BlitsPlus from '../components/home/BlitsPlus.vue'
import blitsImg from '../../../assets/home/blits-code.png';
import blits_white from '../../../assets/home/blits-logo-white.png';
import blits_dark from '../../../assets/home/blits-logo.png';


const blitsInfo = {
  title: 'Blits',
  description: 'Lightning Blits is our own App Development Framework.',
  img: blitsImg, 
  align: "left",
  imgLight: blits_white,
  imgDark: blits_dark ,
}

const solidInfo = {
  title: 'Solid',
  description: 'Lightning Blits is our own App Development Framework.',
  img: blitsImg,
  align: "right"
}
</script>
<template>
    <main class=" bg-slate-100 dark:bg-[#020617]">
        <HeroDisplay/>
        <Quote/>
        <NewFeature/>
        <JoinDiscord/>
        <BlitsPlus :data="blitsInfo"/>
        <BlitsPlus :data="solidInfo"/>
    </main>
    <Footer/>
</template>