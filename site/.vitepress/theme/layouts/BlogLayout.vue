<script setup>
import { useData } from 'vitepress';
const {frontmatter} = useData();
</script>
<template>
    <div class="mx-auto max-w-screen-lg">
        <span class="text-4xl">{{ frontmatter.title }}</span>
        <!--Markdown content-->
        <Content class="vp-doc"/>
    </div>  
</template>