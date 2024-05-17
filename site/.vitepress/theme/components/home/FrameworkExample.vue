<script>
import * as shiki from 'shiki-es'
import LinkButton from './LinkButton.vue'

export default {
    components: {LinkButton},
    props: {
        framework: {
            default: {
                name: 'Framework',
                url: '',
                logo: '',
                darkLogo: ''
            }
        }
    },
    data() {
        return {
            codeblob: '<div></div>'
        };
    },
    watch: {
        framework(framework) {
            shiki.getHighlighter({
                themes: ['material-theme-palenight'],
                langs: [framework.codeType]
            })
                .then((highlighter) => {
                this.codeblob = highlighter.codeToHtml(framework.sampleCode, { lang: framework.codeType });
            });
        }
    }
}
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-3 w-full gap-5">
        <div class="flex flex-col w-full p-4 h-full justify-center items-center md:items-start gap-4">
            <img class="stretch-0 w-auto max-h-30 hidden dark:block" :src="framework.darkLogo" alt="framework logo" />
            <img class="stretch-0 w-auto max-h-30 dark:hidden" :src="framework.logo" alt="framework logo" />
            <div class="flex justify-center place-items-center mt-10 space-x-3">
                <LinkButton :href="framework.url" target="_blank" label="Learn more"></LinkButton>
                <LinkButton :href="framework.appUrl" target="_blank" label="Example App"></LinkButton>
            </div>
        </div>
        <div class="flex items-center justify-center w-full md:col-span-2">
            <div class="w-full" v-html="codeblob">
                
            </div> 
        </div>
    </div>
</template>