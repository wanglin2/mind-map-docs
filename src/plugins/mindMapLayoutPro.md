# MindMapLayoutPro插件

> v0.12.2+

该插件用于修改[思维导图]布局结构的二级节点的排列逻辑，详见issue：[891](https://github.com/wanglin2/mind-map/issues/891)。

## 注册

```js
import MindMap from 'simple-mind-map'
import MindMapLayoutPro from 'simple-mind-map/src/plugins/MindMapLayoutPro.js'

MindMap.usePlugin(MindMapLayoutPro)
```

注册完且实例化`MindMap`后可通过`mindMap.mindMapLayoutPro`获取到该实例。

只要注册了该插件即可生效，无论是实例化时使用思维导图结构，还是后续切换为思维导图结构都会生效。

```js
const mindMap = new MindMap({
    layout: 'mindMap'
})

mindMap.setLayout('mindMap')
```

当使用了该插件，会向节点数据中添加`dir`字段。