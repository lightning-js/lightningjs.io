<script>
    export default {
        props: ['data']
    }
    
    // const data = {
    //     title: 'Blits', img:'src/assets/blits-logo-white.png', description:'Lightning Blits is our own App Development Framework.', src:'https://lightning-js.github.io/blits/#/', label: 'Read me'
    // }

    // const dataImplementation = [
    //     {title: 'Build your own implementation', img: 'src/assets/blits-logo-white.png ', description:'tning Blits is our o'}
    // ]
</script>

<template>
     <section class="pt-32 relative isolate overflow-hidden px-6 lg:px-8 ">
        <div class="grid gap-3 md:grid-cols-2 ">
            <div :class="data.align === 'left' ? 'order-first' : 'order-last' ">
                <img class="max-auto h-14 hidden dark:block" :src="data.imgLight" alt="discord logo svg" />
                <img class="max-auto h-14 dark:hidden" :src="data.imgDark" alt="discord logo svg" />   
                <h1 class="text-lg text-black dark:text-white">{{ data.title }}</h1>
                <p class="text-black dark:text-white">{{data.description }}</p>
            </div>
            <img :src="data.img" alt="afbeeldingen"/>
        </div>
    </section>
</template>