<script>
import {withBase} from 'vitepress';
export default {
    props: ['feature'],
    computed: {
        fullPath() {
            return withBase(this.feature.image)
        }
    }
}
</script>

<template>
    <div class="relative w-11/12 md:w-full overflow-hidden p-8 h-48 sm:h-80 animate-popin rounded-lg border-[1px] bg-cover bg-center" :class="`md:col-span-${feature.span || 1}`" >
        <img class="absolute top-0 left-0 w-full h-full object-cover" :src="feature.image" alt="fancy image" />
        <h1 class="text-3xl font-semibold drop-shadow-2xl text-white">{{ feature.title }}</h1>
        <p class="pt-1 text-slate-300 drop-shadow-2xl" > {{ feature.description }}</p>
    </div>
</template>