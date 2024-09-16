<script setup>
import SectionHeader from './SectionHeader.vue';
import BlitsSample from './BlitsSample.vue';
import img_blits from '../../../../assets/home/blits-logo.png'
import img_blits_dark from '../../../../assets/home/blits-logo-white.png'
import blits_code from '../../../../assets/home/blits.js?raw'
import LinkButton from './LinkButton.vue';

const blits = {
    url: 'https://lightningjs.io/v3-docs/blits/getting_started/intro.html',
    appUrl: 'https://blits-demo.lightningjs.io/#/',
    title: 'TV App Framework',
    description: `As part of the Lightning 3 project we have created a TV App Framework optimized for the Lightning Renderer.`,
    points: [
        'Easy to read XML-style templating',
        'Built-in Reactivity',
        'Memory efficient App router',
        'Input handling and Focus management',
        'Transitions and animations',
        'Reusable Components'
    ],
    logo: img_blits,
    darkLogo: img_blits_dark,
    code: blits_code,
}
</script>

<template>
    <section class="flex flex-col items-center gap-8 w-11/12">
        <SectionHeader :title="blits.title" :description="blits.description"/>
        <div class="grid grid-cols-1 md:grid-cols-3 w-full gap-5">    
            <div class="flex flex-col w-full p-4 h-full justify-center items-center md:items-start gap-4">
                <img class="stretch-0 w-auto max-h-20 hidden dark:block" :src="blits.darkLogo" alt="framework logo" />
                <img class="stretch-0 w-auto max-h-20 dark:hidden" :src="blits.logo" alt="framework logo" />
                <p class="text-black dark:text-white mb-2">
                    Blits is easy and intuitive to work with. It’s a full featured TV App framework for building high performing Lightning based TV apps, designed with a focus on performance.
                </p>
                <!-- <ul class="ml-5 list-disc list-outside">
                    <li v-for="p in blits.points">
                        {{ p }}
                    </li>
                </ul> -->
                <div class="flex flex-col mt-2 items-start space-y-3 w-full">
                    <LinkButton :href="blits.url" target="_blank" label="Learn more"></LinkButton>
                    <LinkButton :href="blits.appUrl" target="_blank" label="Example App"></LinkButton>
                    <LinkButton :href="blits.appUrl" target="_blank" label="Components"></LinkButton>
                </div>
            </div>
            <div class="lg:col-span-2 flex items-center justify-center w-full">
                <BlitsSample class="w-full"/>
            </div>
        </div>
    </section>
</template>