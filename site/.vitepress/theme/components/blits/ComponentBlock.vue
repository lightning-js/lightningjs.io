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
import LinkButton from '../home/LinkButton.vue';

const props = defineProps(['item', 'index'])

</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-3 w-full gap-5">
        <div class="relative flex items-baseline flex-col w-11/12 py-8 md:py-12" :class="!(props.index % 2) ? 'order-first' : 'md:order-last' ">
            <h1 class="mt-6 text-lg text-black font-bold dark:text-white mb-4">{{ props.item.name }}</h1>
            <p class="text-black dark:text-white mb-3" v-html="props.item.description"></p>
            <LinkButton class="pt-3" :href="props.item.url" label="Source"></LinkButton>
        </div>
        <div class="flex flex-col justify-center gap-2 rounded-sm bg-zinc-50 dark:bg-slate-900 w-11/12 md:col-span-2 h-full">
            <img :src="props.item.exampleImg"/>
        </div>
    </div>
</template>