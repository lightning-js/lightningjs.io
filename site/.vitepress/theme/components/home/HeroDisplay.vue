<script setup>
import LinkButton from './LinkButton.vue';
</script>

<template>
    <div class="h-full mx-auto max-w-2xl pt-20 sm:pt-28 text-center">
        <!-- <div class="px-3 py-4 text-2xl leading-6 text-gray-900 dark:text-gray-200">
            Lightningjs 3.0
        </div> -->
        <h1 class="mt-10 dark:hidden text-4xl font-bold tracking-tight sm:text-7xl animate-fade-up">
            More
            <span class="from-blue-400 via-purple-700 to-blue-800 bg-gradient-to-r bg-clip-text text-transparent">Performance</span>,
            Less
            <span class="from-blue-400 via-purple-700 to-blue-800 bg-gradient-to-r bg-clip-text text-transparent">Code</span>
        </h1>
        <h1 class="hidden dark:block text-4xl font-bold tracking-tight sm:text-7xl from-blue-200 via-purple-700 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent animate-fade-up">More Performance, Less Code</h1>
        <p class="mt-6 text-lg leading-8 text-black dark:text-gray-200">Lightweight, open-source packages for developing hyper fast animated applications</p>
        <LinkButton class="mt-10" href="/v3-docs/blits/getting_started/intro.html" target="_blank" label="Get Started"/>
    </div>
</template>