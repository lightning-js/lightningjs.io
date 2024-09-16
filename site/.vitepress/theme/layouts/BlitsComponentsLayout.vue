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
import LinkButton from '../components/home/LinkButton.vue';

import buttonPNG from '../../../assets/blits-components/button.png'
import checkboxPNG from '../../../assets/blits-components/checkbox.png'
import gridPNG from '../../../assets/blits-components/grid.png'
import inputPNG from '../../../assets/blits-components/input.png'
import listPNG from '../../../assets/blits-components/list.png'
import progressbarPNG from '../../../assets/blits-components/progressbar.png'
import togglePNG from '../../../assets/blits-components/toggle.png'

const gitPrefix = 'https://github.com/lightning-js/blits-components/blob/main/src/components/'

const page = {
    title: 'Blits Components',
    components: [
        {
            name: 'Button',
            description: 'Every App need a button this simple button allows you to align text to the left, center, or right.',
            url: gitPrefix + 'Button.js',
            exampleImg: buttonPNG
        },
        {
            name: 'List',
            description: 'Lists are used for multiple targets, think rails of videos, a menu bar with categories. This example includes focus handling and scrolling when the list is too long',
            url: gitPrefix + 'List.js',
            exampleImg: listPNG
        },
        {
            name: 'Grid',
            description: 'Grids are also a common occurance, they give a bit of a better overview compared to Lists. This example has built in focus handling',
            url: gitPrefix + 'Grid.js',
            exampleImg: gridPNG
        },
        {
            name: 'Checkbox',
            description: 'The checkbox is handy for settings, or login pages. This component gives you a nice base to start creating your own.',
            url: gitPrefix + 'Checkbox.js',
            exampleImg: checkboxPNG
        },
        {
            name: 'Input',
            description: 'The input component is handy for when you need to create a search view, or sign in page. The component also supports masked input mode in case you need to shield passwords',
            url: gitPrefix + 'Input.js',
            exampleImg: inputPNG
        },
        {
            name: 'Progress Bar',
            description: 'Progress Bar are simple way to show the progress of something, on T.V. Apps these can be used for video players',
            url: gitPrefix + 'ProgressBar.js',
            exampleImg: progressbarPNG
        },
        {
            name: 'Toggle',
            description: 'The toggle is similar to the checkbox component, but slightly different in looks',
            url: gitPrefix + 'Toggle.js',
            exampleImg: togglePNG
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