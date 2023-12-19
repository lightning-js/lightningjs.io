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
    <section class="pt-28 px-6 lg:px-8">
        <SectionHeader :title="title" :description="description"/>
        <FlavorBlock v-for="flavor in flavors" :flavor="flavor" class="my-12"/>
    </section>
</template>