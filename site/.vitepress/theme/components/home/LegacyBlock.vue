<script>
import SectionHeader from './SectionHeader.vue';

export default {
    props: ['legacy'],
    components: { SectionHeader }
}
</script>

<template>
    <section class="pt-28 px-6 lg:px-8">
        <SectionHeader :title="legacy.title" :description="legacy.description"/>
        <div class="pt-12 grid gap-6 md:grid-cols-3">
            <a v-for="link in legacy.links" :href="link.url" target="_blank" 
            class="border-[1px] h-12 rounded-md flex items-center justify-center"> 
            <span>{{ link.title }}</span></a>
        </div>
    </section>
</template>