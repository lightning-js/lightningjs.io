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
        <SectionHeader title="Lightning 3" description="Lightning 3 is a combination of two of our packages, the Renderer and the Blits App Framework. Lightning 3 allows you to create highly performant Apps yet still maintaining a smooth user experience for TV centric devices."/>
        <p class="mx-auto max-w-2xl text-lg leading-8 md:text-center text-black dark:text-gray-200"></p>
        <div class="max-w-md md:max-w-none w-5/6 md:w-3/4 grid grid-cols-2 gap-10 md:grid-cols-3">
            <!-- <img class="rounded-md " :src="lightning_car" alt="lightningjs car "> -->
            <!-- <img class="rounded-md" :src="lightning_checkout" alt="lightningjs checkout"> -->
            <img class="rounded-md" :src="lightning_tv" alt="lightningjs tv">
            <img class="rounded-md" :src="lightning_airplane" alt="lightningjs airplane">
            <!-- <img class="rounded-md" :src="lightining_digital" alt="lightningjs digital screen"> -->
            <img class="rounded-md" :src="lightining_tv_two" alt="lightningjs tv two">
        </div>
    </section>
</template>