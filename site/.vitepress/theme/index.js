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

// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './css/style.css'
import './css/tailwind.postcss'
import BlogLayout from './layouts/BlogLayout.vue';
import BlogsLayout from './layouts/BlogsLayout.vue';
import HomeLayout from './layouts/HomeLayout.vue';

export default {
  extends: Theme,
  themeConfig: {
    search: {
      provider: 'local'
    }
  },
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('blog', BlogLayout)
    app.component('blogs', BlogsLayout)
    app.component('home2', HomeLayout)
  }
}
