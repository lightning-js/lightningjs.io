<script setup>
import SectionHeader from './SectionHeader.vue';
import Performance from '../../../../assets/home/framework_performance.jpeg'
import LinkButton from './LinkButton.vue';

const blits = {
    url: 'https://lightningjs.io/blogs/roadToPerformance.html',
    title: 'The Most Efficient Framework for TV Experiences',
    description: `Blits is the most efficient framework for immediate rendering, optimized for large-screen applications. With the lowest memory footprint and fully fine-grained reactivity, it delivers high performance for TV experiences.`,
    img: Performance,
}
</script>

<template>
    <section class="flex flex-col items-center gap-8 w-11/12">
        <SectionHeader :title="blits.title" />
        <div class="grid grid-cols-1 md:grid-cols-3 w-full gap-5">  
            <div class="lg:col-span-2 flex items-center justify-center w-full">
                <img class="rounded-md" :src="Performance" alt="beanchmark framework">
            </div>  
            <div class="flex flex-col w-full p-4 h-full justify-center items-center md:items-start gap-4">
                <p class="text-black dark:text-white mb-2">
                    {{ blits.description }}
                </p>
                <div class="flex flex-col mt-2 items-start space-y-3 w-full">
                    <LinkButton :href="blits.url" target="_blank" label="Read more"></LinkButton>
                </div>
            </div>
        </div>
    </section>
</template>