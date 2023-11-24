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
    <section class="pt-32 text-center">
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-1">
            <h1> {{ data.title }}</h1>
        </div>
    </section>
</template>