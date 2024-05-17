<script>
import SectionHeader from './SectionHeader.vue';
import FrameworkExample from './FrameworkExample.vue';

const page = {
    title: 'Other Frameworks',
    description: 'Lightning 3 has the possibility to bind your framework of choice! Hereby a few that have been contributed already:'
}

export default {
    props: {
        frameworks: {
            default: []
        }
    },
    components: {SectionHeader, FrameworkExample},
    computed: {
        currentFramework() {
            return this.frameworks.length && this.frameworks[this.current] || undefined
        }
    },
    data() {
        return {
            page,
            current: -1,
        }
    },
    mounted() {
        this.current = 0
    }
}
</script>

<template>
    <section class="flex flex-col items-center gap-8 w-11/12">
        <SectionHeader :title="page.title" :description="page.description"/>
        <div class="flex flex-col w-full">
            <!-- tabs -->
            <div class="flex w-full">

            </div>
            <FrameworkExample :framework="currentFramework"/>
        </div>
    </section>
</template>