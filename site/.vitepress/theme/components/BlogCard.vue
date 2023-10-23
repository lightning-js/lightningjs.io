<script>
export default {
    props: ['blog'],
}
</script>

<template>
    <a class="mt-10 w-full p-5 flex flex-col space-y-1 h-48 justify-items-start" :href="blog.link">
        <span class="text-xs">{{ blog.date }}</span>
        <span class="text-xl font-medium truncate">{{ blog.title }}</span>
        <div class="flex-1">
            <span class="line-clamp-3 text-sm"> {{ blog.description }}</span>
        </div>
        <span class="self-end justify-self-end">Read more ></span>
    </a>
</template>