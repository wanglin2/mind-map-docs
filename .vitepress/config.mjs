import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/mind-map-site/',
  title: 'SimpleMindMap',
  description: '一个强大的Web思维导图',
  head: [['link', { rel: 'icon', href: './logo.svg' }]],
  outDir: './docs',
  themeConfig: {
    logo: './logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '在线使用', link: '/' },
      { text: '客户端', link: '/client' },
      { text: '开始', link: '/start/start' },
      { text: '教程', link: '/course/course1' },
      { text: 'API', link: '/api/constructor' },
      { text: '插件', link: '/plugins/associativeLine' },
      { text: '使用帮助', link: '/help/help1' },
      { text: '赞助', link: '/sponsor' },
      { text: '博客', link: '/blog' }
    ],

    sidebar: {
      '/start/': [
        {
          text: '开始',
          items: [
            { text: '简介', link: '/start/introduction' },
            { text: '开始', link: '/start/start' },
            { text: '常见问题', link: '/start/question' },
            { text: '部署', link: '/start/deploy' },
            { text: '贡献', link: '/start/contribute' },
            { text: '更新记录', link: '/start/changelog' }
          ]
        }
      ],
      '/course/': [
        {
          text: '教程',
          items: [
            [
              { text: '基本使用', link: '/course/course1' },
              { text: '操作节点内容', link: '/course/course2' },
              { text: '插入/删除节点、前进回退', link: '/course/course3' },
              { text: '设置节点样式', link: '/course/course4' },
              { text: '设置基础样式', link: '/course/course5' },
              { text: '显示水印', link: '/course/course6' },
              { text: '开启节点自由拖拽', link: '/course/course7' },
              { text: '开启节点富文本编辑', link: '/course/course8' },
              { text: '修改鼠标滚轮的行为', link: '/course/course9' },
              { text: '主题', link: '/course/course10' },
              { text: '结构', link: '/course/course11' },
              { text: '如何渲染一个大纲', link: '/course/course12' },
              { text: '快捷键', link: '/course/course13' },
              { text: '如何渲染一个小地图', link: '/course/course14' },
              { text: '如何渲染一个右键菜单', link: '/course/course15' },
              { text: '如何渲染富文本的悬浮工具栏', link: '/course/course16' },
              { text: '导入和导出', link: '/course/course17' },
              { text: '如何持久化数据', link: '/course/course18' },
              { text: '插入和扩展节点图标', link: '/course/course19' },
              { text: '如何自定义节点内容', link: '/course/course20' },
              { text: '如何复制、剪切、粘贴', link: '/course/course21' },
              { text: '如何实现搜索、替换', link: '/course/course22' },
              { text: '如何渲染滚动条', link: '/course/course23' },
              { text: '如何开发一个插件', link: '/course/course24' },
              { text: '关于概要', link: '/course/course25' },
              { text: '如何实现AI生成节点内容', link: '/course/course26' },
              {
                text: '快捷键操作如何传递自定义参数',
                link: '/course/course27'
              },
              {
                text: '如何动态修改自定义元素的大小',
                link: '/course/course28'
              },
              {
                text: '局域网docker部署解决HTTPS问题的一种方法',
                link: '/course/course29'
              },
              { text: '如何通过代码激活节点', link: '/course/course30' }
            ]
          ]
        },
        {
          text: '部署',
          items: [{ text: '部署', link: '/doc/deploy' }]
        },
        {
          text: '本地开发',
          items: [
            { text: '前端', link: '/doc/frontendDev' },
            { text: '后端', link: '/doc/backendDev' }
          ]
        }
      ],
      '/api/': [
        { text: '构造函数', link: '/api/constructor' },
        { text: 'Node类', link: '/api/node' },
        { text: 'Render类', link: '/api/render' },
        { text: 'Command类', link: '/api/command' },
        { text: 'TextEdit类', link: '/api/textEdit' },
        { text: 'View类', link: '/api/view' },
        { text: 'KeyCommand类', link: '/api/keyCommand' },
        { text: 'BatchExecution类', link: '/api/batchExecution' },
        { text: 'XMind解析', link: '/api/xmind' },
        { text: 'Markdown解析', link: '/api/markdown' },
        { text: '内置工具方法', link: '/api/utils' }
      ],
      '/plugins/': [
        { text: 'AssociativeLine 插件', link: '/plugins/associativeLine' },
        { text: 'Export 插件', link: '/plugins/doExport' },
        { text: 'Drag插件', link: '/plugins/drag' },
        { text: 'KeyboardNavigation插件', link: '/plugins/keyboardNavigation' },
        { text: 'MiniMap插件', link: '/plugins/miniMap' },
        { text: 'RichText插件', link: '/plugins/richText' },
        { text: 'Select 插件 ', link: '/plugins/select' },
        { text: 'Watermark插件', link: '/plugins/watermark' },
        { text: 'TouchEvent插件', link: '/plugins/touchEvent' },
        { text: 'NodeImgAdjust插件', link: '/plugins/nodeImgAdjust' },
        { text: 'Search插件', link: '/plugins/search' },
        { text: 'Painter插件', link: '/plugins/painter' },
        { text: 'Scrollbar插件', link: '/plugins/scrollbar' },
        { text: 'Formula插件', link: '/plugins/formula' },
        { text: 'Cooperate插件', link: '/plugins/cooperate' },
        { text: 'RainbowLines插件', link: '/plugins/rainbowLines' },
        { text: 'Demonstrate插件', link: '/plugins/demonstrate' },
        { text: 'OuterFrame插件', link: '/plugins/outerFrame' },
        {
          text: 'HandDrawnLikeStyle收费插件',
          link: '/plugins/handDrawnLikeStyle'
        },
        { text: 'Notation收费插件', link: '/plugins/notation' },
        { text: 'Numbers收费插件', link: '/plugins/numbers' }
      ],
      '/help/': [
        { text: '概要/关联线', link: '/help/help1' },
        { text: '客户端', link: '/help/help2' },
        { text: '打开预览在线文件', link: '/help/help3' },
        { text: '复制粘贴', link: '/help/help4' },
        { text: '导出', link: '/help/help5' },
        { text: '如何编辑数学公式', link: '/help/help6' }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wanglin2/mind-map' }
    ],

    footer: {
      message: 'MIT License.',
      copyright: 'Copyright © 2024-present mind-map team'
    },

    darkModeSwitchLabel: '暗黑模式',
    outlineTitle: '大纲',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})
