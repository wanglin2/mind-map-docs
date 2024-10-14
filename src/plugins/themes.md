# Themes 插件

> v0.12.0+

从`v0.12.0+`开始，将库和demo中所有主题都抽离到了单独的插件中，库只有一个默认主题`default`。

如果你需要默认主题外的其他主题，可以安装本插件。

## 安装

```bash
npm i simple-mind-map-plugin-themes
```

## 使用

```js
import MindMap from 'simple-mind-map'
import Themes from 'simple-mind-map-plugin-themes'

// 注册主题
Themes.init(MindMap)

// 实例化
new MindMap({
    theme: 'dark7'
})
```

关于插件的更多信息，请访问插件仓库：[simple-mind-map-plugin-themes](https://github.com/wanglin2/simple-mind-map-plugin-themes)。