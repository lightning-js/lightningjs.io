<script>
export default {
    props: ['footer'],
}
</script>

<template>
    <a :href="footer.url" target="_blank" class="text-center flex items-center justify-center">
        <span class="text-s py-2.5 text-black dark:text-gray-200">{{ footer.title }}</span>
        <div v-if="footer.icon">
            <img alt="lng logo" class="w-8 hidden dark:block" :src="footer.darkIcon"/>
            <img alt="lng logo" class="w-8 dark:hidden" :src="footer.icon"/>
        </div>
    </a>
</template>