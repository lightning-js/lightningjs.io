<script setup>
import lightning_car from '../../../../assets/home/car_logo.jpg'
import lightning_checkout from '../../../../assets/home/checkout_logojs.jpg'
import lightning_tv from '../../../../assets/home/tv_logo.jpg'
import lightning_airplane from '../../../../assets/home/airplane_logo.jpg'
import lightining_digital from '../../../../assets/home/digitial_logo.jpg'
import lightining_tv_two from '../../../../assets/home/tv_two_logo.jpg'

import SectionHeader from './SectionHeader.vue'; 



</script>
<template>
    <section class="mb-96">
        <div class="z-10 relative px-6 lg:px-8">
            <div class=" pt-20 sm:pt-28">
                <div class="text-center">
                    <h1 class="text-4xl font-bold tracking-tight sm:text-7xl animate-fade-up">
                        <SectionHeader title="Lightningjs" />
                    </h1>
                    <p class="mx-auto max-w-2xl mt-6 text-lg leading-8 text-black dark:text-gray-200">LightningJS is a powerful open-source user interface rendering framework. Lightning allows you to create beautiful interfaces using JavaScript. You can create incredible multiplatform experiences using the rich feature set of the framework. Built for the smallest of device to run on the biggest screens.</p>
                </div>
            </div>
        </div>
        <div class="absolute w-full left-0 h-80 flex overflow-hidden space-x-16 pt-12">
            <div class="flex space-x-16 h-full animate-loop-scroll">
                <img class="max-w-none rounded-md " :src="lightning_car" alt="lightningjs car ">
                <img class="max-w-none rounded-md" :src="lightning_checkout" alt="lightningjs checkout">
                <img class="max-w-none rounded-md" :src="lightning_tv" alt="lightningjs tv">
                <img class="max-w-none rounded-md" :src="lightning_airplane" alt="lightningjs airplane">
                <img class="max-w-none rounded-md" :src="lightining_digital" alt="lightningjs digital screen">
                <img class="max-w-none rounded-md" :src="lightining_tv_two" alt="lightningjs tv two">
            </div>
            <div class="flex space-x-16 h-full animate-loop-scroll" aria-hidden="true">
                <img class="max-w-none rounded-md " :src="lightning_car" alt="lightningjs car ">
                <img class="max-w-none rounded-md" :src="lightning_checkout" alt="lightningjs checkout">
                <img class="max-w-none rounded-md" :src="lightning_tv" alt="lightningjs tv">
                <img class="max-w-none rounded-md" :src="lightning_airplane" alt="lightningjs airplane">
                <img class="max-w-none rounded-md" :src="lightining_digital" alt="lightningjs digital screen">
                <img class="max-w-none rounded-md" :src="lightining_tv_two" alt="lightningjs tv two">
            </div>
        </div>
    </section>
   
</template>