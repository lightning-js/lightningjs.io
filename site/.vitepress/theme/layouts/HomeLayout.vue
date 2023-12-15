<script setup>
import HeroDisplay from '../components/home/HeroDisplay.vue'
import Quote from '../components/home/Quote.vue'
import NewFeature from '../components/home/NewFeature.vue'
import Footer from '../components/home/Footer.vue'
import JoinDiscord from '../components/home/JoinDiscord.vue'
import FrameworkBlock from '../components/home/FrameworkBlock.vue'

import { useData } from 'vitepress';
const {frontmatter} = useData();

</script>
<template>
    <main class="mx-auto max-w-screen-lg bg-slate-100 dark:bg-[#020617]">
        <FancyBackground/>
        <HeroDisplay/>
        <Quote/>
        <NewFeature :features="frontmatter.features"/>
        <JoinDiscord/>
        <!-- <FancyBackground class="rotate-180"/> -->
        <FrameworkBlock :framework="frontmatter.frameworks[0]"/>
        <FrameworkBlock :framework="frontmatter.frameworks[1]"/>
    </main>
    <Footer/>
</template>