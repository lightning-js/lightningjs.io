<script setup>
import lightning_logo_light from '../../../../assets/home/lightning_logo_light.png'
</script>
<template >
    <div class="mx-auto max-w-2xl pt-32">
        <section class="relative isolate overflow-hidden px-6 lg:px-8 ">
         <div class="mb-8 flex justify-center">
            <img class="max-auto h-28" :src="lightning_logo_light" alt="img" />
        </div>  
        <figure class="mt-10 ">
            <h1 class="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl text-center">“The power of native performance in your browser”</h1>
            <figcaption class="mt-10">
            <div class="mt-4 flex items-center justify-center space-x-3 text-base">
                <div class="font-semibold text-black dark:text-gray-200">- Albert Dahan</div>
                <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-white">
                <circle cx="1" cy="1" r="1" />
                </svg>
                <div class="text-black dark:text-gray-200">Fellow - Comcast</div>
            </div>
            </figcaption>
        </figure>
    </section>
    </div>
</template>