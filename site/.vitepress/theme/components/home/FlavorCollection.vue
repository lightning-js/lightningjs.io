<script>
import FlavorBlock from './FlavorBlock.vue';
import SectionHeader from './SectionHeader.vue';

export default {
    props: {
        title: 'title',
        description: "desc",
        flavors: null
    },
    components: { FlavorBlock, SectionHeader }
}
</script>

<template>
    <section class="pt-14 md:pt-28">
        <SectionHeader :title="title" :description="description"/>
        <FlavorBlock v-for="flavor in flavors" :flavor="flavor"/>
    </section>
</template>