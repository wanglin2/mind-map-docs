# MindMapLayoutPro plugin

> v0.12.2+

This plugin is used to modify the arrangement logic of the secondary nodes in the layout structure of a [mindMap]. Please refer to issue for details: [891](https://github.com/wanglin2/mind-map/issues/891).

## Register

```js
import MindMap from 'simple-mind-map'
import MindMapLayoutPro from 'simple-mind-map/src/plugins/MindMapLayoutPro.js'

MindMap.usePlugin(MindMapLayoutPro)
```

After registration and instantiation of `MindMap`, the instance can be obtained through `mindMap.mindMapLayoutPro`.

As long as the plugin is registered, it will take effect, whether it is using mind map structure during instantiation or switching to mind map structure later.

```js
const mindMap = new MindMap({
    layout: 'mindMap'
})

mindMap.setLayout('mindMap')
```

When using this plugin, a 'dir' field will be added to the node data.