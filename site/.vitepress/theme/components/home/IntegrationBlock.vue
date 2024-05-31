<script>
import LinkButton from './LinkButton.vue'

export default {
    components: {LinkButton},
    props: {
        integration: {
            default: {
                name: 'integration',
                url: '',
                logo: '',
                darkLogo: '',
                comingSoon: false
            }
        }
    }
}
</script>

<template>
    <div class="w-full p-6 flex flex-col items-center md:items-start gap-8 rounded-sm bg-zinc-50 dark:bg-slate-900">
        <img class="mx-auto max-h-12 hidden dark:block" :src="integration.darkLogo" alt="framework logo" />
        <img class="mx-auto max-h-12 dark:hidden" :src="integration.logo" alt="framework logo" />
        <LinkButton v-if="!integration.comingSoon" :href="integration.url" target="_blank" label="Learn more" class="mx-auto"></LinkButton>
        <div v-if="integration.comingSoon" class="mx-auto text-2xl">
            COMING SOON
        </div>
    </div>
</template>