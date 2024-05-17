
<script setup>
import DataFooter from './DataFooter.vue';
import github_mark from '../../../../assets/home/github-mark-white.svg';
import github_dark from '../../../../assets/home/github-mark-dark.svg';
import discord_white from '../../../../assets/home/discord-mark-white.png'
import discord_dark from '../../../../assets/home/discord-mark-dark.png'

const dataFooters = [
    { title: 'Renderer', url: 'https://github.com/lightning-js/renderer'},
    { title: 'ThreadX', url: 'https://github.com/lightning-js/threadx'},
    { title: 'Blits App Framework', url:'https://lightning-js.github.io/blits/'},
]

const dataLinks = [
    {  url:'https://github.com/lightning-js', icon: github_dark, darkIcon: github_mark} ,
    {  url:'https://discord.com/invite/Mpj4HjHyh8', icon: discord_dark, darkIcon: discord_white},
]
</script>

<template>
    <section class="pb-6 text-left border-t-[1px]" >
        <div class="mx-auto max-w-screen-lg flex flex-col items-center justify-center w-full">
            <div class="px-5 flex flex-col md:flex-row justify-between pt-3 items-center w-full">
                <DataFooter v-for="data in dataFooters" :footer="data" />
                <div class="flex gap-3">
                    <div class="py-6">
                        <a href="https://lightningjs.io/docs/#" target="_blank" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Lightning 2.0 <span aria-hidden="true">&rarr;</span></a>
                    </div>
                    <DataFooter v-for="data in dataLinks" :footer="data" target="_blank"/>
                </div>
             </div>
            <p class="px-5 text-black dark:text-slate-300 text-xs pt-4">Released under the Apache 2.0 license Copyright © 2023 Lightingjs - Comcast</p>
        </div>
    </section>
</template>

