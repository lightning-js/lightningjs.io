<script>
export default {
    props: {
        title: 'Title',
        description: 'something very interresting'
    }
}
</script>

<template>
    <div class="w-full flex items-center justify-center gap-10">
        <div class="hidden sm:block border-b-[1px] w-full"/>
        <h1 class="text-5xl leading-normal text-center font-bold from-blue-200 via-purple-700 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent sm:shrink-0">{{ title }}</h1>
        <div class="hidden sm:block border-b-[1px] w-full"/>
    </div>
    <div class="mx-auto max-w-2xl text-center px-6 lg:px-8">
        <p class="mt-6 text-lg leading-8 text-black dark:text-gray-200">{{ description }}</p>
    </div>
</template>