/*
 * Copyright 2024 Comcast Cable Communications Management, LLC
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
import { useData } from 'vitepress';
import LinkButton from '../components/home/LinkButton.vue';
const { frontmatter } = useData();
</script>

<template>
    <FancyBackground/>
    <main class="mx-auto max-w-screen-lg relative flex flex-col items-center w-11/12 gap-20">
        <div class="h-full mx-auto max-w-2xl pt-20 sm:pt-28 text-center flex flex-col gap-6">
            <div class="text-2xl text-gray-900 dark:text-gray-200">
                Stay in touch
            </div>
            <h1 class="
                shrink-0
                text-4xl md:hidden
                font-bold  
                from-blue-400 via-purple-700 to-blue-800
                dark:from-blue-200 dark:via-purple-700 dark:to-blue-600
                bg-gradient-to-r
                bg-clip-text
                text-transparent
                leading-tight">Lightning 2.0</h1>
            <h1 class="
                shrink-0
                hidden md:block
                text-7xl
                font-bold  
                from-blue-400 via-purple-700 to-blue-800
                dark:from-blue-200 dark:via-purple-700 dark:to-blue-600
                bg-gradient-to-r
                bg-clip-text
                text-transparent
                leading-tight">Lightning 2.0</h1>
            <p class="text-lg leading-8 text-black dark:text-gray-200">Lightning 2 and its counterparts are still supported and you can find our reference documentation about these libraries here:</p>
            <LinkButton label="Documentation" href="https://lightningjs.io/docs/#" target="_blank"/>
        </div>
        <section class="flex flex-col justify-center items-center gap-8 w-full">
            <h2 class="italic">Github repositories:</h2>
            <div class="grid grid-col gap-4 w-full md:grid-cols-2 md:w-2/3">
                <a v-if="frontmatter" v-for="link in frontmatter.links " class="items-center text-center rounded-sm bg-zinc-50 dark:bg-slate-900 hover:bg-indigo-500 hover:text-white font-semibold p-4 w-full" :href="link.url" target="_blank">
                    {{link.title}}
                </a>
            </div>
        </section>
    </main>
</template>