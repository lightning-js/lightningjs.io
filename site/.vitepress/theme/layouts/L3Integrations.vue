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
import LinkButton from '../components/home/LinkButton.vue';
import IntegrationBlock from '../components/home/IntegrationBlock.vue';

import logo_solidjs_light from '../../../assets/home/logo_solidjs_light.png';
import logo_solidjs_dark from '../../../assets/home/logo_solidjs_dark.png';

import logo_react_light from '../../../assets/home/logo_react_light.png';
import logo_react_dark from '../../../assets/home/logo_react_dark.png';

const page = {
    title: 'Third Party Integrations', 
    integrations: [
        {
            name: 'Solid',
            url: 'https://github.com/lightning-js/solid',
            logo: logo_solidjs_light,
            darkLogo: logo_solidjs_dark,
        },
        {
            name: 'React',
            url: '',
            comingSoon: true,
            logo: logo_react_light,
            darkLogo: logo_react_dark,
        }
    ]
}
</script>

<template>
<FancyBackground/>
    <main class="mx-auto max-w-screen-lg relative flex flex-col items-center w-11/12 gap-20">
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
            <LinkButton label="Renderer API" href="/api/renderer" target="_blank"/>
        </div>
        <section class="flex flex-col justify-center items-center gap-8 w-full mb-20">
            <h2 class="italic">contributed integrations:</h2>
            <div class="grid grid-col gap-4 w-full md:grid-cols-2 md:w-2/3">
                <IntegrationBlock v-for="integration in page.integrations" :integration="integration"/>
            </div>
        </section>
    </main>
</template>