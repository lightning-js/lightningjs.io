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
import { useData } from 'vitepress';
const { frontmatter } = useData();
</script>
<template>
    <div class="mx-auto max-w-screen-md pt-12">
        <div class="flex flex-col">
          <span class="text-sm font-light">Date: {{frontmatter.date}}</span>
          <span class="text-sm font-light">Author: {{frontmatter.author}}</span>
          <span class="text-4xl font-bold pt-3">{{ frontmatter.title }}</span>
        </div>
       
     
        <!--Markdown content-->
        <Content class="vp-doc my-8"/>
    </div>  
</template>