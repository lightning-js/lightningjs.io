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
        <div class="w-full flex flex-row justify-center items-center gap-4">
            <h1 class="grow text-3xl leading-tight text-center font-bold 
                        from-blue-400 via-purple-700 to-blue-800 
                        dark:from-blue-200 dark:via-purple-700 dark:to-blue-600
                        bg-gradient-to-r 
                        bg-clip-text
                        text-transparent
                        md:text-5xl md:leading-tight">{{ title }}</h1>
        </div>
        <div class="flex flex-col py-4 w-full md:w-3/4 gap-3">
            <p v-if="description" class="leading-8 sm:text-center text-black dark:text-gray-200" :class="descClass">{{ description }}</p>
            <slot/>
        </div>
    </div>
</template>