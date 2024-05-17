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
    <section class="z-10 flex flex-col items-center gap-8">
        <div class="w-11/12">
            <SectionHeader title="Lightningjs" />
            <p class="mx-auto max-w-2xl text-lg leading-8 md:text-center text-black dark:text-gray-200">LightningJS is a powerful open-source user interface rendering framework. Lightning allows you to create beautiful interfaces using JavaScript. You can create incredible multiplatform experiences using the rich feature set of the framework. Built for the smallest of device to run on the biggest screens.</p>
        </div>
        <div class="max-w-md md:max-w-none w-5/6 md:w-3/4 grid grid-cols-2 gap-10 md:grid-cols-3">
            <img class="rounded-md " :src="lightning_car" alt="lightningjs car ">
            <img class="rounded-md" :src="lightning_checkout" alt="lightningjs checkout">
            <img class="rounded-md" :src="lightning_tv" alt="lightningjs tv">
            <img class="rounded-md" :src="lightning_airplane" alt="lightningjs airplane">
            <img class="rounded-md" :src="lightining_digital" alt="lightningjs digital screen">
            <img class="rounded-md" :src="lightining_tv_two" alt="lightningjs tv two">
        </div>
    </section>
</template>