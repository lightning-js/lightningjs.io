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
import sidebars from './sidebars.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  base: "/",
  title: "Lightningjs",
  description: "Lightningjs Nexus of Information",
  outDir: "../public",
  head: [
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/tailwindcss@2.0.4/dist/tailwind.min.css' }],
    ['link', { rel: "icon", sizes: "16x16", type: "image/png", href: '/favicons/lng_16x16.png'}],
    ['link', { rel: "icon", sizes: "32x32", type: "image/png", href: '/favicons/lng_32x32.png'}]
  ],

  transformPageData: (pageData) => {
    const conicalPath = pageData.relativePath.replace(/index\.md$/, '').replace(/\.md$/, '.html');
    const {title: fmTitle, description: fmDesc} = pageData.frontmatter;
    const {title: pTitle, description: pDesc, relativePath} = pageData;
    pageData.frontmatter.head ??= [];
    pageData.frontmatter.head.push(['meta', {name: 'og:url', content: new URL(conicalPath, import.meta.url)}])

    let title = 'Lightningjs'
    let description = 'Nexus of Information'
    let image = '/favicons/lng_1200x630.jpg'

    if(fmTitle) {
      title = fmTitle + ' | LightningJS'
      description = fmDesc && fmDesc.length > 0 ? fmDesc : description
      image = pageData.frontmatter.linkImage || image
    }
    else if(pTitle && pTitle.length > 0) {
      const extra = ' | ' + (relativePath.indexOf('blits') > -1 ? 'Blits' : 'LightningJS')
      title = pTitle + extra
      description = pDesc && pDesc.length > 0 ? pDesc : description
    }

    pageData.frontmatter.head.push(['meta', {name: 'og:title', content: title}])
    pageData.frontmatter.head.push(['meta', {name: 'og:type', content: 'website'}])
    pageData.frontmatter.head.push(['meta', {name: 'og:description', content: description}])
    pageData.frontmatter.head.push(['meta', {name: 'og:image', content: image}])
    pageData.frontmatter.head.push(['meta', {name: 'og:image:type', content: "image/jpeg"}])
    pageData.frontmatter.head.push(['meta', {name: 'og:image:width', content: "1200"}])
    pageData.frontmatter.head.push(['meta', {name: 'og:image:height', content: "630"}])

    pageData.frontmatter.head.push(['meta', {name: 'twitter:card', content: description}])
    pageData.frontmatter.head.push(['meta', {name: 'twitter:title', content: title}])
    pageData.frontmatter.head.push(['meta', {name: 'twitter:description', content: description}])
    pageData.frontmatter.head.push(['meta', {name: 'twitter:image:src', content: image}])

  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Playground', link: 'https://playground.lightningjs.io', target: '_blank'},
      {
        text: 'Docs',
        items: [
          {
            text: 'Lightning 3',
            items: [
              { text: 'Blits TV App Framework', link: '/v3-docs/blits/getting_started/intro' },
              { text: 'Blits Components', link: '/blits-components' },
              { text: 'Renderer API', link: '/api/renderer', target: '_blank' }
            ]
          },
          {
            text: 'Lightning 2',
            items: [
              { text: 'Lightning Core', link: '/docs/#/lightning-core-reference/index', target: '_blank' },
              { text: 'Lightning SDK', link: '/docs/#/lightning-sdk-reference/index', target: '_blank' },
              { text: 'Lightning CLI', link: '/docs/#/lightning-cli-reference/index', target: '_blank' },
              { text: 'Lightning UI', link: '/docs/#/lightning-ui-reference/index', target: '_blank' },
            ]
          }
        ]
      },
      { text: 'News', link: '/blogs'},
      { text: 'Forum', link: 'https://forum.lightningjs.io/'}
      // { text: 'Examples', link: '/examples/markdown-examples' }
    ],
    siteTitle: 'Lightningjs',
    logo: {
      light: '/favicons/lng_grey.svg',
      dark: '/favicons/lng.svg',
    },
    search: {
      provider: 'local'
    },
    sidebar: {
      ...sidebars
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lightning-js' },
      { icon: 'discord', link: 'https://discord.com/invite/Mpj4HjHyh8' }
    ]
  },
  vite: {
    base: "/",
    publicDir: 'static',
  }
})