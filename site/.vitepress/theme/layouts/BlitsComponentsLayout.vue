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
import ComponentBlock from '../components/blits/ComponentBlock.vue';
import BlogCard from '../components/BlogCard.vue';
import LinkButton from '../components/home/LinkButton.vue';
import {data as blogs} from '../index.data.js';

const gitPrefix = 'https://github.com/lightning-js/blits-components/blob/main/src/components/'

const page = {
    title: 'Blits Components',
    components: [
        {
            name: 'Button',
            descript: 'This awesome component!',
            url: gitPrefix + 'Button.js'
        },
        {
            name: 'Checkbox',
            descript: 'This awesome component!',
            url: gitPrefix + 'Checkbox.js'
        },
        {
            name: 'Grid',
            descript: 'This awesome component!',
            url: gitPrefix + 'Grid.js'
        },
        {
            name: 'Input',
            descript: 'This awesome component!',
            url: gitPrefix + 'Input.js'
        },
        {
            name: 'Item',
            descript: 'This awesome component!',
            url: gitPrefix + 'Item.js'
        },
        {
            name: 'List',
            descript: 'This awesome component!',
            url: gitPrefix + 'List.js'
        },
        {
            name: 'ProgressBar',
            descript: 'This awesome component!',
            url: gitPrefix + 'ProgressBar.js'
        },
        {
            name: 'Toggle',
            descript: 'This awesome component!',
            url: gitPrefix + 'Toggle.js'
        }
    ]
}

</script>
<template>
    <div class="mx-auto max-w-screen-lg flex flex-col items-center">
        <div class="h-full mx-auto max-w-2xl pt-20 sm:pt-28 text-center flex flex-col gap-6">
            <h1 class="
                mt-10
                shrink-0
                text-4xl md:hidden
                font-bold  
                from-blue-400 via-purple-700 to-blue-800
                dark:from-blue-200 dark:via-purple-700 dark:to-blue-600
                bg-gradient-to-r
                bg-clip-text
                text-transparent
                leading-tight">{{page.title}}</h1>
            <h1 class="
                mt-10
                shrink-0
                hidden md:block
                text-7xl
                font-bold  
                from-blue-400 via-purple-700 to-blue-800
                dark:from-blue-200 dark:via-purple-700 dark:to-blue-600
                bg-gradient-to-r
                bg-clip-text
                text-transparent
                leading-tight">{{page.title}}</h1>
            <p class="text-lg leading-8 text-black dark:text-gray-200">Besides <a class="text-indigo-600" href="/v3-docs/blits/getting-started/intro" >Blits</a>, our own TV App Framework, you can hook up the Lightning 3 Renderer to a framework of your choice. Checkout the Renderer API to develop your own integration.</p>
            <LinkButton label="Github" href="/api/renderer" target="_blank"/>
        </div>
        <div class="flex flex-col items-center gap-8 mt-8 w-11/12">
            <ComponentBlock v-for="(item, index) in page.components" :item="item" :index="index" />
        </div>
    </div>
</template>