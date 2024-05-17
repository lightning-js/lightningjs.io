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
    title: 'Build your app',
    description: `To accompany the Lightning Renderer we have developed a new TV UX framework.`,
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
        <div class="flex flex-col gap-4 items-center">
            <p class="italic">Introducing:</p>
            <img class="stretch-0 w-48 hidden dark:block" :src="blits.darkLogo" alt="blits dark logo svg" />
            <img class="stretch-0 w-48 dark:hidden" :src="blits.logo" alt="blits logo svg" />
        </div>
        <div class="grid grid-cols-1 place-items-center justify-center lg:grid-cols-3 gap-10 items-stretch">    
            <div class="flex flex-col max-w-md w-full">
                <p class="text-black dark:text-white mb-3">
                    Blits is the App development Framework for Lightning, purpose-built by the Lightning Core team and optimized for Lightning 3.
                    <br/><br/>Blits is easy and intuitive to work with. It’s a complete App framework for building high performing Lightning based TV apps, designed with a performance first mindset.
                </p>
                <ul class="ml-5 list-disc list-outside">
                    <li v-for="p in blits.points">
                        {{ p }}
                    </li>
                </ul>
                <div class="flex justify-center place-items-center mt-10 space-x-3">
                    <LinkButton :href="blits.url" target="_blank" label="Learn more"></LinkButton>
                    <LinkButton :href="blits.appUrl" target="_blank" label="Example App"></LinkButton>
                </div>
            </div>
            <div class="lg:col-span-2 flex items-center justify-center w-full">
                <BlitsSample class="w-full"/>
            </div>
        </div>
    </section>
</template>