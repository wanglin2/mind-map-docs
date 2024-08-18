import { defineConfig } from 'vitepress'
import { zh } from './zh.mjs'
import { en } from './en.mjs'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite:{
    plugins:[pagefindPlugin()],
  },
  srcDir: 'src',
  base: '/mind-map-docs/',
  title: 'SimpleMindMap',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  outDir: './docs',
  locales: {
    root: { label: '中文', ...zh },
    en: {
      label: 'English',
      ...en
    }
  }
})
