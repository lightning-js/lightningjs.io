import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "Lightningjs Site",
  description: "Lightningjs Nexus of Information",
  outDir: "../public",
  head: [
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/tailwindcss@2.0.4/dist/tailwind.min.css' }],
    ['link', { rel: "icon", sizes: "16x16", type: "image/png", href: "./assets/favicons/lng_16x16.png"}],
    ['link', { rel: "icon", sizes: "32x32", type: "image/png", href: "./assets/favicons/lng_32x32.png"}]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'News', link: '/blogs'}
      // { text: 'Examples', link: '/examples/markdown-examples' }
    ],
    siteTitle: 'Lightningjs',
    logo: './assets/favicons/lng.svg',
    // search: {
    //   provider: 'local'
    // },
    sidebar: {
      '/examples/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: './examples/markdown-examples' },
            { text: 'Runtime API Examples', link: './examples/api-examples' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lightning-js' },
      { icon: 'discord', link: 'https://discord.com/invite/Mpj4HjHyh8' }
    ]
  },
  vite: {
    base: "/"
  }
})
