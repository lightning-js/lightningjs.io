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

import { defineConfig } from 'vitepress'
import blitsSidebar from '../v3-docs/blits/sidebar.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "Lightningjs",
  description: "Lightningjs Nexus of Information",
  outDir: "../public",
  head: [
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/tailwindcss@2.0.4/dist/tailwind.min.css' }],
    ['link', { rel: "icon", sizes: "16x16", type: "image/png", href: '/favicons/lng_16x16.png'}],
    ['link', { rel: "icon", sizes: "32x32", type: "image/png", href: '/favicons/lng_32x32.png'}],
    ['meta', { name: 'og:type', content: 'website'}],
    ['meta', { name: 'og:image', content: '/favicons/lng_1200x630.jpg'}]
  ],

  transformPageData: (pageData) => {
    const conicalPath = pageData.relativePath.replace(/index\.md$/, '').replace(/\.md$/, '.html');
    const {title, description} = pageData.frontmatter;
    pageData.frontmatter.head ??= [];
    pageData.frontmatter.head.push(['meta', {name: 'og:url', content: new URL(conicalPath, import.meta.url)}])
    pageData.frontmatter.head.push(['meta', {name: 'og:title', content: pageData.frontmatter.layout === 'home2' ? 'Lightningjs' : `${title} | Lightningjs`}])
    pageData.frontmatter.head.push(['meta', {name: 'og:description', content: pageData.frontmatter.layout === 'home2' ? 'Nexus of Information' : description}])
    pageData.frontmatter.head.push(['meta', {name: 'og:type', content: 'website'}])
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Docs',
        items: [
          { text: 'Blits', link: '/v3-docs/blits/introduction' },
        ]
      },
      { text: 'News', link: '/blogs'}
      // { text: 'Examples', link: '/examples/markdown-examples' }
    ],
    siteTitle: 'Lightningjs',
    logo: {
      light: '/favicons/lng_grey.svg',
      dark: '/favicons/lng.svg',
    },
    // search: {
    //   provider: 'local'
    // },
    sidebar: {
      ...blitsSidebar
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lightning-js' },
      { icon: 'discord', link: 'https://discord.com/invite/Mpj4HjHyh8' }
    ]
  },
  vite: {
    base: "/",
    publicDir: 'static'
  }
})