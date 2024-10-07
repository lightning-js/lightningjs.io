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
import keyboardPNG from '../../../assets/blits-components/keyboard.png'

const gitPrefix = 'https://github.com/lightning-js/blits-components/blob/main/src/components/'

const page = {
    title: 'Blits Components',
    components: [
        {
            name: 'Button',
            description: '<i>Need a button in your App?</i><br />This reference button supports text alignment and changes background color upon focus. Attach an action on `enter`-click and your are good to go.',
            url: gitPrefix + 'Button.js',
            exampleImg: buttonPNG
        },
        {
            name: 'List',
            description: '<i>More content than fits your App?</i><br />This component allows you to scroll through a list of items, and comes with the option to enable continuous scrolling.',
            url: gitPrefix + 'List.js',
            exampleImg: listPNG
        },
        {
            name: 'Grid',
            description: '<i>Display your content in a grid</i><br />Grids are designed to give a good overview of all available content. This reference component has all the functionality to navigate through the grid built in.',
            url: gitPrefix + 'Grid.js',
            exampleImg: gridPNG
        },
        {
            name: 'Input',
            description: '<i>Capture information from your users?</i><br />The input component is handy for when you need to create a search view, or sign in page. This component also supports masked input mode in case you need to shield passwords',
            url: gitPrefix + 'Input.js',
            exampleImg: inputPNG
        },
        {
            name: 'Keyboard',
            description: '<i>Need an on-screen Keyboard?</i><br />With the Keyboard component you can quickly set up a new search view. You can easily combine this component with the Input component.',
            url: gitPrefix + 'Input.js',
            exampleImg: keyboardPNG
        },
        {
            name: 'Checkbox',
            description: '<i>Yes or no?</i><br />The checkbox component is handy for settings and login pages. This component gives you a nice basis to build your own forms.',
            url: gitPrefix + 'Checkbox.js',
            exampleImg: checkboxPNG
        },
        {
            name: 'Toggle',
            description: '<i>On or off</i><br />The toggle component is similar to the checkbox component. It\'s a visually appealing way turn on or off an item in a settings view, for example.',
            url: gitPrefix + 'Toggle.js',
            exampleImg: togglePNG
        },
        {
            name: 'Progress Bar',
            description: '<i>Are we there yet?</i><br />Progress Bars are a visual way to show the progress of something - great to use on loading screens, or in a video player view.',
            url: gitPrefix + 'ProgressBar.js',
            exampleImg: progressbarPNG
        }, 
    ]
}

</script>
<template>
    <div class="mx-auto max-w-screen-lg flex flex-col items-center pb-20">
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
            <p class="text-lg leading-8 text-black dark:text-gray-200">
                Blits Components are a set of <b>off-the-shelf</b> components. Basic and performant
                reference components, that you can use freely in your next Lightning 3 Blits App.
            </p>
            <p class="text-lg leading-8 text-black dark:text-gray-200">
                Unlike a traditional UI components library, the Blits components are not installable from NPM.
                We're providing the Blits Components as references, intended to be <b>copied and pasted</b> into your
                App, where you can <b>adapt and customize</b> them further to your App's needs.
            </p>
            <p class="text-lg leading-8 text-black dark:text-gray-200">
                Of course, we're all for code reuse. But no App is (or should be) the same. Using the exact same UI
                component for different Apps is a challenge. Trying to tailor a single component for many use cases, often
                just leads to bloated components, with features and functionality that you may not need -
                <i>so why would you import and execute that extra code in your App?</i>
            </p>
            <p class="text-lg leading-8 text-black dark:text-gray-200">
                The Blits Components come with little design, and basic functionality. To give you a quick start with your project.
            </p>
            <LinkButton label="Blits Components on Github" href="https://github.com/lightning-js/blits-components" target="_blank"/>
        </div>
        <div class="flex flex-col items-center gap-16 mt-12 w-11/12">
            <ComponentBlock v-for="(item, index) in page.components" :item="item" :index="index" />
        </div>
    </div>
</template>