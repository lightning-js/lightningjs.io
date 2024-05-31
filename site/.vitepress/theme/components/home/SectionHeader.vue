<script>
export default {
    props: {
        title: 'Title',
        description: 'something very interresting',
        descClass: {
            type: String,
            default: 'text-xl'
        }
    }
}
</script>

<template>
    <div class="w-full flex flex-col items-center">
        <div class="shrink-0 w-full flex justify-center items-center gap-4">
            <div class="hidden sm:block border-b-[1px] w-full"/>
            <h1 class=" shrink-0 text-5xl font-bold 
                        from-blue-400 via-purple-700 to-blue-800 
                        dark:from-blue-200 dark:via-purple-700 dark:to-blue-600
                        bg-gradient-to-r 
                        bg-clip-text
                        text-transparent
                        leading-tight">{{ title }}</h1>
            <div class="border-b-[1px] w-full"/>
        </div>
        <div class="flex flex-col py-4 w-full md:w-3/4 gap-3">
            <p class="leading-8 sm:text-center text-black dark:text-gray-200" :class="descClass">{{ description }}</p>
            <slot/>
        </div>
    </div>
</template>