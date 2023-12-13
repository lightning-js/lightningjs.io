import { defineConfig } from 'vitepress'
import lng_logo from '../lng.svg'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/lightningjs.io/",
  title: "Lightningjs Site",
  description: "Lightningjs Nexus of Information",
  outDir: "../public",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'News', link: '/blogs'}
      // { text: 'Examples', link: '/examples/markdown-examples' }
    ],
    siteTitle: 'Lightningjs',
    logo: lng_logo,
    // search: {
    //   provider: 'local'
    // },
    sidebar: {
      '/examples/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/examples/markdown-examples' },
            { text: 'Runtime API Examples', link: '/examples/api-examples' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lightning-js' }
    ]
  },
  vite: {
    base: "/lightningjs.io/"
  }
})
