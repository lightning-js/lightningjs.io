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
            themes: ['one-dark-pro'],
            langs: [this.flavor.codeType]
        })
            .then((highlighter) => {
            this.codeblob = highlighter.codeToHtml(this.flavor.code, { lang: this.flavor.codeType });
        });
    },
    components: { LinkButton }
}
</script>

<template>
    <div v-if="flavor" class="grid grid-cols-1 place-items-center md:grid-cols-3 md:my-10">
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
        <div v-if="flavor && flavor.name !== 'blits'" class="w-11/12 md:col-span-2" v-html="codeblob">
            
        </div>
        <div v-if="flavor && flavor.name === 'blits'" class="w-11/12 md:col-span-2">
            <pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #E5C07B">Blits</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">Application</span><span style="color: #ABB2BF">({</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">: `</span></span>
<span class="line"><span style="color: #ABB2BF">        &lt;<span style="color: #E06C75">Element</span> <span style="color: #D19A66">w</span>=<span style="color: #98C379">"1920"</span> <span style="color: #D19A66">h</span>=<span style="color: #98C379">"1080"</span> <span style="color: #D19A66">color</span>=<span style="color: #98C379">"#000"</span>&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">            &lt;<span style="color: #E06C75">Text</span> <span style="color: #D19A66">:content</span>=<span style="color: #98C379">"$title"</span>/&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">        &lt;/<span style="color: #E06C75">Element</span>&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    `</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">state</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">            </span><span style="color: #E06C75">title</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">'Blits!'</span></span>
<span class="line"><span style="color: #ABB2BF">        }</span></span>
<span class="line"><span style="color: #ABB2BF">    },</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">input</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #61AFEF">enter</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">            </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">title</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">'Blits! is! awesome!'</span></span>
<span class="line"><span style="color: #ABB2BF">        }</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">})</span></span>
<span class="line"></span><span class="line"></span></code></pre>
        </div>
    </div>
</template>