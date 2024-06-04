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
    <section class="flex flex-col items-center gap-8 w-11/12">
        <SectionHeader title="Lightning 3" description="Lightning 3 is an open-source project focused on lightweight solutions for developing User Interfaces with hyper fast animations using Javascript and WebGL rendering.">
            <span class="text-xl leading-8 sm:text-center text-black dark:text-gray-200">With Lightning 3 you can create highly performant Apps for a smooth user experience on TV centric devices.</span>
        </SectionHeader>
        <p class="mx-auto max-w-2xl text-lg leading-8 md:text-center text-black dark:text-gray-200"></p>
        <div class="max-w-md md:max-w-none w-full md:w-3/4 grid gap-10 grid-cols-3">
            <!-- <img class="rounded-md " :src="lightning_car" alt="lightningjs ca  r "> -->
            <!-- <img class="rounded-md" :src="lightning_checkout" alt="lightningjs checkout"> -->
            <img class="rounded-md" :src="lightning_tv" alt="lightningjs tv">
            <img class="rounded-md" :src="lightning_airplane" alt="lightningjs airplane">
            <!-- <img class="rounded-md" :src="lightining_digital" alt="lightningjs digital screen"> -->
            <img class="rounded-md" :src="lightining_tv_two" alt="lightningjs tv two">
        </div>
    </section>
</template>