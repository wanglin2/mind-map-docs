import { defineConfig } from 'vitepress'
import { zh } from './zh.mjs'
import { en } from './en.mjs'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [pagefindPlugin()]
  },
  srcDir: 'src',
  base: '/mind-map-docs/',
  title: 'SimpleMindMap',
  head: [
    ['link', { rel: 'icon', href: '/mind-map-docs/logo.png' }],
    [
      'script',
      {
        src: '//sdk.51.la/js-sdk-pro.min.js',
        charset: 'UTF-8',
        id: 'LA_COLLECT'
      }
    ],
    [
      'script',
      {},
      `try {
        LA.init({
          id: 'KRO0WxK8GT66tYCQ',
          ck: 'KRO0WxK8GT66tYCQ',
          autoTrack: false
        })
      } catch (error) {
        console.log(error)
      }`
    ]
  ],
  outDir: './docs',
  locales: {
    root: { label: '中文', ...zh },
    en: {
      label: 'English',
      ...en
    }
  }
})
