<script>
import LinkButton from './LinkButton.vue';
import SectionHeader from './SectionHeader.vue';
export default {
    props: ['legacy'],
    components: { SectionHeader, LinkButton}
}
</script>

<template>
    <section class="flex flex-col items-center gap-8 w-11/12">
        <SectionHeader :title="legacy.title" :description="legacy.description"/>
        <LinkButton label="Lightning 2.0" href="/l2landing" target="_self"/>
    </section>
</template>