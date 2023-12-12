<script>
export default {
    props: ['footer'],
}
</script>

<template>
    <a :href="footer.url">
        <span class="text-s text-black dark:text-gray-200">{{ footer.title }}</span>
        <div v-if="footer.icon">
            <img alt="lng logo" class="w-8" :src="footer.icon"/>
        </div>
    </a>
</template>