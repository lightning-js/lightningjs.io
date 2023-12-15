<script>
import * as shiki from 'shiki-es'
import {withBase} from 'vitepress';
export default {
    props: ['framework'],
    data() {
        return {
            codeblob: '<div></div>'
        }
    },
    mounted() {
        shiki.getHighlighter({
            theme: 'one-dark-pro',
            langs: [this.framework.codeType]
        })
        .then((highlighter) => {
            import(`${withBase(this.framework.code)}?raw`).then((response) => {
                this.codeblob = highlighter.codeToHtml(response.default, {lang: this.framework.codeType})
            })
        })
    }
}
</script>

<template>
     <section class="pt-32 relative isolate overflow-hidden px-6 lg:px-8 ">
        <div class="grid gap-3 md:grid-cols-2 ">
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