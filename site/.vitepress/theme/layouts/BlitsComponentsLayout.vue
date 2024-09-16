/*
 * Copyright 2023 Comcast Cable Communications Management, LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

 <script setup>

import BlogCard from '../components/BlogCard.vue';
import {data as blogs} from '../index.data.js';

</script>
<template>
    <div class="mx-auto max-w-screen-lg flex flex-col items-center">
        <div class="text-center max-w-2xl pt-20 sm:pt-28">
            <h1 class="dark:hidden text-4xl font-bold tracking-tight sm:text-7xl animate-fade-up">
                Read
                <span class="from-blue-400 via-purple-700 to-blue-800 bg-gradient-to-r bg-clip-text text-transparent">Blogs</span>,
                <br>
                And
                <span class="from-blue-400 via-purple-700 to-blue-800 bg-gradient-to-r bg-clip-text text-transparent">Articles</span>
            </h1>
            <h1 class="hidden dark:block text-4xl font-bold tracking-tight sm:text-7xl from-blue-200 via-purple-700 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent animate-fade-up">Read Blogs, <br> And Articles</h1>
            <p class="mt-6 text-lg leading-8 text-black dark:text-gray-200"></p>
        </div>
        <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3">
            <BlogCard v-for="blog in blogs" :blog="blog" />
        </div>
    </div>
</template>