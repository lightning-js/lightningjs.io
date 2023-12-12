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
        <div class="grid gap-3 md:grid-cols-2">
            <h1 class="text-black dark:text-white">{{ data.title }}</h1>
            <p class="text-black dark:text-white">{{data.description }}</p>
        </div>
    </section>
</template>