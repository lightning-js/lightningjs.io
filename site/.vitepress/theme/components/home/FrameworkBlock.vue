<script>
import * as shiki from 'shiki-es'
export default {
    props: ['framework'],
    data() {
        return {
            codeblob: '<div></div>'
        }
    },
    mounted() {
        shiki.getHighlighter({
            themes: ['min-dark', 'min-light'],
            langs: [this.framework.codeType],
        })
        .then((highlighter) => {
            this.codeblob = highlighter.codeToHtml(this.framework.code, {lang: this.framework.codeType})
        })
    }
}
</script>

<template>
     <section class="pt-28 relative isolate overflow-hidden px-6 lg:px-8">
        <div v-if="framework" class="grid gap-3 md:grid-cols-2 ">
            <div class="p-6 flex justify-center items-baseline flex-col" :class="framework.align === 'left' ? 'order-first' : 'order-last' ">
                <img class="stretch-0 max-auto h-16 hidden dark:block" :src="framework.darkLogo" alt="discord logo svg" />
                <img class="stretch-0 max-auto h-16 dark:hidden" :src="framework.logo" alt="discord logo svg" />   
                <h1 class="text-lg text-black dark:text-white">{{ framework.title }}</h1>
                <p class="text-black dark:text-white mb-3">{{ framework.description }}</p>
                <ul>
                    <li v-for="p in framework.points">
                        &#8226; {{ p }}
                    </li>
                </ul>
            </div>
            <div v-html="codeblob">
            </div>
        </div>
    </section>
</template>