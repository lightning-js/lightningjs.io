<script>
import LinkButton from './LinkButton.vue';
import SectionHeader from './SectionHeader.vue';
export default {
    props: ['legacy'],
    data() {
        return {
            title: 'Lightning 2',
            description: 'Lightning 2 and its counterparts are still supported and you can find helpful links regarding these libraries here:'
        }
    },
    components: { SectionHeader, LinkButton}
}
</script>

<template>
    <section class="flex flex-col items-center gap-8 w-11/12">
        <SectionHeader :title="title" :description="description"/>
        <LinkButton label="Lightning 2.0" href="/l2landing" target="_self"/>
    </section>
</template>