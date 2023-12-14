
<script setup>
import DataFooter from './DataFooter.vue';
import github_mark from '../../../../assets/home/github-mark-white.svg';
import github_dark from '../../../../assets/home/github-mark-dark.svg';
import discord_white from '../../../../assets/home/discord-mark-white.png'
import discord_dark from '../../../../assets/home/discord-mark-dark.png'

  const dataFooters = [
    { title: 'Lighting - Rendere', description:'Lightning Blits is our own templating engine uses XML string literals for a quick and easy Application Developer Experience.', url:'https://lightning-js.github.io/blits/#/', label: 'Read me'},
    { title: 'Lightning - ThreadX', description:'The Solid templating engine uses JSX for application development.' , url:'https://github.com/lightning-js/solid/#readme', label: 'Read me'},
    { title: 'Lighting - Template Engine', description:'Lightning Blits is our own templating engine uses XML string literals for a quick and easy Application Developer Experience.', url:'https://lightning-js.github.io/blits/#/', label: 'Read me'},
    { title: 'Lighting - Solid', description:'Lightning Blits is our own templating engine uses XML string literals for a quick and easy Application Developer Experience.', url:'https://lightning-js.github.io/blits/#/', label: 'Read me'},
]

   const dataLinks = [
     {  url:'https://github.com/lightning-js', icon: github_dark, darkIcon: github_mark} ,
     {  url:'https://discord.com/invite/Mpj4HjHyh8', icon: discord_dark, darkIcon: discord_white},
  
]
</script>

<template>
    <section class="pb-8 text-left" >
        <div class="border-b-2"></div>
        <div class="px-5 grid grid-cols-3 pt-4">
            <div class="grid grid-cols-2 col-span-2 gap-3 ">
                <DataFooter v-for="data in dataFooters" :footer="data" />
            </div>
            <div class="px-5 flex gap-3 items-center">
                <div class="py-6">
                  <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Lightning 2.0 <span aria-hidden="true">&rarr;</span></a>
                </div>
                <DataFooter v-for="data in dataLinks" :footer="data" target="_blank"/>
            </div>
        </div>
        <p class="px-5 text-black dark:text-slate-300 text-xs pt-8">Released under the Apache 2.0 license
            Copyright © 2023 Lightingjs - Comcast</p>
    </section>
</template>

