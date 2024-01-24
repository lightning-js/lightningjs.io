
<script setup>
import DataFooter from './DataFooter.vue';
import github_mark from '../../../../assets/home/github-mark-white.svg';
import github_dark from '../../../../assets/home/github-mark-dark.svg';
import discord_white from '../../../../assets/home/discord-mark-white.png'
import discord_dark from '../../../../assets/home/discord-mark-dark.png'

  const dataFooters = [
    { title: 'Lighting - Renderer', url: 'https://github.com/lightning-js/renderer'},
    { title: 'Lightning - ThreadX', url: 'https://github.com/lightning-js/threadx'},
    { title: 'Lighting - Blits', url:'https://lightning-js.github.io/blits/'},
    { title: 'Lighting - Solid', url:'https://github.com/lightning-js/solid'},
]

   const dataLinks = [
     {  url:'https://github.com/lightning-js', icon: github_dark, darkIcon: github_mark} ,
     {  url:'https://discord.com/invite/Mpj4HjHyh8', icon: discord_dark, darkIcon: discord_white},
  
]
</script>

<template>
    <section class="pb-8 text-left border-t-2" >
        <div class="mx-auto max-w-screen-lg flex flex-col items-center">
            <div class="px-5 grid grid-cols-1 md:grid-cols-3 pt-4 w-full">
                <div class="grid grid-cols-1 md:grid-cols-2 col-span-2 gap-3 ">
                    <DataFooter v-for="data in dataFooters" :footer="data" />
                </div>
                <div class="flex gap-3 items-center w-full">
                    <div class="py-6">
                        <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Lightning 2.0 <span aria-hidden="true">&rarr;</span></a>
                    </div>
                    <DataFooter v-for="data in dataLinks" :footer="data" target="_blank"/>
                </div>
             </div>
            <p class="px-5 text-black dark:text-slate-300 text-xs pt-8">Released under the Apache 2.0 license
                Copyright © 2023 Lightingjs - Comcast</p>
        </div>
    </section>
</template>

