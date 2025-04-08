import { defineConfig } from 'vitepress'
import common from './common.mjs'

export const en = defineConfig({
  description: 'A powerful web mind map',
  themeConfig: {
    ...common,

    nav: [
      { text: 'Online use', link: 'https://wanglin2.github.io/mind-map/' },
      {
        text: 'Start',
        link: '/en/start/introduction',
        activeMatch: '/en/start/'
      },
      { text: 'Course', link: '/course/course1', activeMatch: '/course/' },
      {
        text: 'API',
        link: '/en/api/constructor/constructor-options',
        activeMatch: '/en/api/'
      },
      {
        text: 'Plugins',
        link: '/en/plugins/themes',
        activeMatch: '/en/plugins/'
      },
      { text: 'Sponsor', link: '/sponsor' },
      { text: 'Client', link: '/en/client' },
      { text: 'Blog', link: '/en/blog' },
      {
        text: 'More',
        items: [
          { text: 'Help', link: '/help/help1', activeMatch: '/help/' },
          { text: 'Ideal Document', link: 'https://github.com/wanglin2/lx-doc' },
          { text: 'Issues', link: 'https://github.com/wanglin2/mind-map/issues' }
        ]
      }
    ],

    sidebar: {
      '/en/start/': [
        { text: 'Introduction', link: '/en/start/introduction' },
        { text: 'Start', link: '/en/start/start' },
        { text: 'Question', link: '/en/start/question' },
        { text: 'Deploy', link: '/en/start/deploy' },
        { text: 'Contribute', link: '/en/start/contribute' },
        { text: 'Changelog', link: '/en/start/changelog' }
      ],
      '/course/': [
        { text: '基本使用', link: '/course/course1' },
        { text: '操作节点内容', link: '/course/course2' },
        { text: '插入/删除节点、前进回退', link: '/course/course3' },
        { text: '设置节点样式的简单方式', link: '/course/course4' },
        { text: '设置节点样式的更多方式', link: '/course/course31' },
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
        { text: '如何自定义整个节点内容', link: '/course/course20' },
        { text: '如何自定义部分节点内容', link: '/course/course33' },
        { text: '如何实现AI生成节点内容', link: '/course/course26' },
        { text: '[收费]实战：实现AI生成思维导图', link: '/course/course34' },
        { text: '如何复制、剪切、粘贴', link: '/course/course21' },
        { text: '如何实现搜索、替换', link: '/course/course22' },
        { text: '如何渲染滚动条', link: '/course/course23' },
        { text: '如何开发一个插件', link: '/course/course24' },
        { text: '关于概要', link: '/course/course25' },
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
        { text: '如何通过代码激活节点', link: '/course/course30' },
        { text: '如何实现单独设置某条关联线的样式', link: '/course/course32' }
      ],
      '/en/api/': [
        {
          text: 'API',
          items: [
            {
              text: 'Constructor',
              base: '/en/api/constructor/constructor-',
              items: [
                {
                  text: 'Options',
                  link: 'options'
                },
                {
                  text: 'Props',
                  link: 'props'
                },
                {
                  text: 'Methods',
                  link: 'methods'
                }
              ]
            },
            { text: 'Node class', link: '/en/api/node' },
            { text: 'Render clas', link: '/en/api/render' },
            { text: 'Command clas', link: '/en/api/command' },
            { text: 'TextEdit clas', link: '/en/api/textEdit' },
            { text: 'View clas', link: '/en/api/view' },
            { text: 'KeyCommand clas', link: '/en/api/keyCommand' },
            { text: 'BatchExecution clas', link: '/en/api/batchExecution' },
            { text: 'XMind parse', link: '/en/api/xmind' },
            { text: 'Markdown parse', link: '/en/api/markdown' },
            { text: 'Utility methods', link: '/en/api/utils' }
          ]
        }
      ],
      '/en/plugins/': [
        {
          text: 'Free',
          items: [
            { text: 'Themes plugin', link: '/en/plugins/themes' },
            { text: 'RichText plugin', link: '/en/plugins/richText' },
            { text: 'Export plugin', link: '/en/plugins/doExport' },
            { text: 'Drag plugin', link: '/en/plugins/drag' },
            { text: 'Select plugin', link: '/en/plugins/select' },
            {
              text: 'AssociativeLine plugin',
              link: '/en/plugins/associativeLine'
            },
            {
              text: 'KeyboardNavigation plugin',
              link: '/en/plugins/keyboardNavigation'
            },
            { text: 'MiniMap plugin', link: '/en/plugins/miniMap' },
            { text: 'Watermark plugin', link: '/en/plugins/watermark' },
            { text: 'TouchEvent plugin', link: '/en/plugins/touchEvent' },
            { text: 'NodeImgAdjust plugin', link: '/en/plugins/nodeImgAdjust' },
            { text: 'Search plugin', link: '/en/plugins/search' },
            { text: 'Painter plugin', link: '/en/plugins/painter' },
            { text: 'Scrollbar plugin', link: '/en/plugins/scrollbar' },
            { text: 'Formula plugin', link: '/en/plugins/formula' },
            { text: 'Cooperate plugin', link: '/en/plugins/cooperate' },
            { text: 'RainbowLines plugin', link: '/en/plugins/rainbowLines' },
            { text: 'Demonstrate plugin', link: '/en/plugins/demonstrate' },
            { text: 'OuterFrame plugin', link: '/en/plugins/outerFrame' },
            { text: 'MindMapLayoutPro plugin', link: '/en/plugins/mindMapLayoutPro' },
            { text: 'NodeBase64ImageStorage plugin', link: '/en/plugins/nodeBase64ImageStorage' }
          ]
        },
        {
          text: 'Charge',
          items: [
            {
              text: 'HandDrawnLikeStyle plugin',
              link: '/en/plugins/handDrawnLikeStyle'
            },
            { text: 'Notation plugin', link: '/en/plugins/notation' },
            { text: 'Numbers plugin', link: '/en/plugins/numbers' },
            { text: 'Freemind plugin', link: '/en/plugins/freemind' },
            { text: 'Excel plugin', link: '/en/plugins/excel' },
            { text: 'Checkbox plugin', link: '/en/plugins/checkbox' },
            { text: 'Lineflow plugin', link: '/en/plugins/lineflow' },
            { text: 'Momentum plugin', link: '/en/plugins/momentum' },
            { text: 'RightFishbone plugin', link: '/en/plugins/rightFishbone' },
            { text: 'NodeLink plugin', link: '/en/plugins/nodeLink' }
          ]
        }
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

    darkModeSwitchLabel: 'Dark mode',
    outlineTitle: 'Outline',
    docFooter: {
      prev: 'Prev',
      next: 'Next'
    }
  }
})
