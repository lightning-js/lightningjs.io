<script setup>
import discord_white from '../../../../assets/home/discord-mark-white.png';
import discord_dark from '../../../../assets/home/discord-mark-dark.png';
import LinkButton from './LinkButton.vue';

</script>
<template>
    <section class="relative isolate overflow-hidden px-6 mb-8 pt-14 sm:pt-28 lg:px-8">
        <div class="mb-8 flex justify-center">
            <img class="max-auto h-8 hidden dark:block" :src="discord_white" alt="discord logo svg" />
            <img class="max-auto h-8  dark:hidden" :src="discord_dark" alt="discord logo svg" />   
        </div>  
        <figure class="mt-10">
                <h1 class="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl text-center">Join us on Discord!</h1>
            <figcaption class="mt-10">
                <div class="mt-4 flex items-center justify-center space-x-3 text-base text-center">
                    <div class="font-semibold text-black dark:text-gray-200">Find help, or help us improve our eco system</div>
                </div>
                <LinkButton class="mt-10" label="Send me an invite" href="https://discord.com/invite/Mpj4HjHyh8" target="_blank"/>
            </figcaption>
        </figure>
    </section>
</template>
