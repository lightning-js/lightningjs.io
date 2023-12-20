<script>
import * as shiki from 'shiki-es'
import LinkButton from './LinkButton.vue'

export default {
    props: ['flavor'],
    data() {
        return {
            codeblob: '<div></div>'
        };
    },
    mounted() {
        shiki.getHighlighter({
            themes: ['min-dark', 'min-light'],
            langs: [this.flavor.codeType],
        })
            .then((highlighter) => {
            this.codeblob = highlighter.codeToHtml(this.flavor.code, { lang: this.flavor.codeType });
        });
    },
    components: { LinkButton }
}
</script>

<template>
    <div v-if="flavor" class="grid grid-cols-1 place-items-center md:grid-cols-2 md:my-10">
        <div class="relative flex items-baseline flex-col w-11/12 py-8 md:py-12" :class="flavor.align === 'left' ? 'order-first' : 'md:order-last' ">
            <img class="stretch-0 max-auto h-16 hidden dark:block" :src="flavor.darkLogo" alt="discord logo svg" />
            <img class="stretch-0 max-auto h-16 dark:hidden" :src="flavor.logo" alt="discord logo svg" />   
            <h1 class="mt-6 text-lg text-black dark:text-white">{{ flavor.title }}</h1>
            <p class="text-black dark:text-white mb-3">{{ flavor.description }}</p>
            <ul>
                <li v-for="p in flavor.points">
                    &#8226; {{ p }}
                </li>
            </ul>
            <LinkButton class="pt-8" :href="flavor.url" label="Learn more"></LinkButton>
        </div>
        <div class="w-11/12" v-html="codeblob">
        </div>
    </div>
</template>