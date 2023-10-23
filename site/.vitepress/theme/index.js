// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './css/style.css'
import './css/tailwind.postcss'
import BlogLayout from './layouts/BlogLayout.vue';
import BlogsLayout from './layouts/BlogsLayout.vue';

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
  }
}
