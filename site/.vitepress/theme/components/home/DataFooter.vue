<script>
export default {
    props: ['footer'],
    computed: {
        iconUrl() {
            return `src/assets/${this.footer.icon}`;
        }
    }
}
</script>

<template>
    <a :href="footer.url">
        <span class="text-s text-gray-200">{{ footer.title }}</span>
        <div v-if="footer.icon">
            <img alt="lng logo" class="w-8" :src="iconUrl"/>
        </div>
    </a>
</template>