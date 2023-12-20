<script setup>
import LinkButton from './LinkButton.vue';
</script>

<template>
    <div class="z-10 relative px-6 lg:px-8">
        <div class="mx-auto max-w-2xl pt-20 sm:pt-28">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
            <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-900 dark:text-gray-200 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Lightningjs 3.0 <a href="https://lightning-js.github.io/blits/#/" target="_blank" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></a>
            </div>
        </div>
        <div class="text-center">
            <h1 class="dark:hidden text-4xl font-bold tracking-tight sm:text-7xl animate-fade-up">
                More
                <span class="from-blue-400 via-purple-700 to-blue-800 bg-gradient-to-r bg-clip-text text-transparent">Performance</span>,
                Less
                <span class="from-blue-400 via-purple-700 to-blue-800 bg-gradient-to-r bg-clip-text text-transparent">Code</span>
            </h1>
            <h1 class="hidden dark:block text-4xl font-bold tracking-tight sm:text-7xl from-blue-200 via-purple-700 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent animate-fade-up">More Performance, Less Code</h1>
            <p class="mt-6 text-lg leading-8 text-black dark:text-gray-200">Lightweight, open-source framework for developing hyper fast animated applications</p>
            <LinkButton class="mt-10" href="https://lightning-js.github.io/blits/#/" label="Beta"/>
          </div>
        </div>
      </div>
</template>