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