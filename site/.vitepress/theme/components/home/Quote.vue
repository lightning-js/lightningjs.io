<script setup>
import lightning_logo_svg from '../../../../assets/favicons/lng.svg'
</script>
<template >
    <div class="mx-auto max-w-2xl pt-14 md:pt-32">
        <section class="relative isolate overflow-hidden px-6 lg:px-8 ">
         <div class="mb-8 flex items-center justify-center gap-3">
            <span class="font-bold text-lg">Lightningjs</span>
            <img class="max-auto h-6" :src="lightning_logo_svg" alt="lightning logo">
        </div>  
        <figure class="mt-10 ">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl text-center">“The power of native performance in your browser”</h1>
            <figcaption class="mt-10">
            <div class="mt-4 flex items-center justify-center space-x-3 text-base">
                <div class="font-semibold text-gray-900 dark:text-gray-200">- Albert Dahan</div>
                <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-white">
                <circle cx="1" cy="1" r="1" />
                </svg>
                <div class="text-gray-900 dark:text-gray-200">Fellow - Comcast</div>
            </div>
            </figcaption>
        </figure>
    </section>
    </div>
</template>