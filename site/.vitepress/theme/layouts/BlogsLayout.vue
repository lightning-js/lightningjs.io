<script setup>

import BlogCard from '../components/BlogCard.vue';
import {data as blogs} from '../index.data.js';

</script>
<template>
    <div class="mx-auto max-w-screen-lg sm:grid sm:grid-cols-2 lg:grid-cols-3">
        <BlogCard v-for="blog in blogs" :blog="blog" />
    </div>
</template>