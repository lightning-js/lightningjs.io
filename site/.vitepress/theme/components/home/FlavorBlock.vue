<script>
import * as shiki from 'shiki-es'
export default {
    props: ['flavor'],
    data() {
        return {
            codeblob: '<div></div>'
        }
    },
    mounted() {
        shiki.getHighlighter({
            themes: ['min-dark', 'min-light'],
            langs: [this.flavor.codeType],
        })
        .then((highlighter) => {
            this.codeblob = highlighter.codeToHtml(this.flavor.code, {lang: this.flavor.codeType})
        })
    }
}
</script>

<template>
    <div v-if="flavor" class="grid gap-3 md:grid-cols-2 ">
        <div class="p-6 flex justify-center items-baseline flex-col" :class="flavor.align === 'left' ? 'order-first' : 'order-last' ">
            <img class="stretch-0 max-auto h-16 hidden dark:block" :src="flavor.darkLogo" alt="discord logo svg" />
            <img class="stretch-0 max-auto h-16 dark:hidden" :src="flavor.logo" alt="discord logo svg" />   
            <h1 class="mt-6 text-lg text-black dark:text-white">{{ flavor.title }}</h1>
            <p class="text-black dark:text-white mb-3">{{ flavor.description }}</p>
            <ul>
                <li v-for="p in flavor.points">
                    &#8226; {{ p }}
                </li>
            </ul>
        </div>
        <div v-html="codeblob">
        </div>
    </div>
</template>