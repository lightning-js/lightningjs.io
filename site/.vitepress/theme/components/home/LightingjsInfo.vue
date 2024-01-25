<script setup>
import lightning_car from '../../../../assets/home/car_logo.jpg'
import lightning_checkout from '../../../../assets/home/checkout_logojs.jpg'
import lightning_tv from '../../../../assets/home/tv_logo.jpg'
import lightning_airplane from '../../../../assets/home/airplane_logo.jpg'
import SectionHeader from './SectionHeader.vue'; 


</script>
<template>
    <section class="mb-96">
        <div class="z-10 relative px-6 lg:px-8">
            <div class="mx-auto max-w-2xl pt-20 sm:pt-28">
                <div class="text-center">
                    <h1 class="dark:hidden text-4xl font-bold tracking-tight sm:text-7xl animate-fade-up">
                        <SectionHeader title="Lightningjs" />
                        <!-- <span class="from-blue-400 via-purple-700 to-blue-800 bg-gradient-to-r bg-clip-text text-transparent">Lightningjs</span> -->
                    </h1>
                    <h2 class="hidden dark:block text-4xl font-bold tracking-tight sm:text-7xl from-blue-200 via-purple-700 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent animate-fade-up">More Performance, Less Code</h2>
                    <p class="mt-6 text-lg leading-8 text-black dark:text-gray-200">LightningJS is a powerful open-source user interface rendering framework. Lightning allows you to create beautiful interfaces using JavaScript. You can create incredible multiplatform experiences using the rich feature set of the framework. Built for the smallest of device to run on the biggest screens.</p>
                </div>
            </div>
        </div>
        <div class="absolute w-full left-0 h-96 flex overflow-hidden space-x-16 pt-12">
            <div class="flex space-x-16 h-96 animate-loop-scroll">
                <img class="max-w-none rounded-md" :src="lightning_car" alt="lightning logo">
                <img class="max-w-none rounded-md" :src="lightning_checkout" alt="lightning logo">
                <img class="max-w-none rounded-md" :src="lightning_tv" alt="lightning logo">
                <img class="max-w-none rounded-md" :src="lightning_airplane" alt="lightning logo">
                <img class="max-w-none rounded-md" :src="lightning_tv" alt="lightning logo">
                <img class="max-w-none rounded-md" :src="lightning_airplane" alt="lightning logo">
            </div>
            <div class="flex space-x-16 h-96 animate-loop-scroll" aria-hidden="true">
                <img class="max-w-none rounded-md" :src="lightning_car" alt="lightning logo">
                <img class="max-w-none rounded-md" :src="lightning_checkout" alt="lightning logo">
                <img class="max-w-none rounded-md" :src="lightning_tv" alt="lightning logo">
                <img class="max-w-none rounded-md" :src="lightning_airplane" alt="lightning logo">
                <img class="max-w-none rounded-md" :src="lightning_tv" alt="lightning logo">
                <img class="max-w-none rounded-md" :src="lightning_airplane" alt="lightning logo">
            </div>
        </div>
    </section>
   
</template>