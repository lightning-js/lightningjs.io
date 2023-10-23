import { createContentLoader } from 'vitepress'

export default createContentLoader('blogs/*.md', {
    excerpt: true,
    transform(raw) {
        return raw.sort((a, b) => {
            return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
          }).map((page) => {
            return {
                title: page.frontmatter.title,
                date: page.frontmatter.date,
                description: page.frontmatter.description,
                link: page.url
            }
          })
    }
});