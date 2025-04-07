# NodeBase64ImageStorage插件

> v0.14.0+

该插件用于修改`base64`格式的节点图片在数据中的存储方式。

将`base64`格式的图片以`key-map`的形式存储在根节点的`imgMap`字段里，其他节点只保存`key`，避免不同的节点引用相同的图片重复存储的问题，普通`url`格式的图片不处理。

比如未使用该插件前的节点数据为：

```
{
    data: {
        text: 'xxx'
    },
    children: [
        {
            data: {
                text: 'xxx2',
                image: 'data:image/png,xxx'
            }
        },
        {
            data: {
                text: 'xxx3',
                image: 'data:image/png,xxx'
            }
        }
    ]
}
```

使用该插件后会变为：

```
{
    data: {
        text: 'xxx',
        imgMap: {
            'smm_img_key_xxx': 'data:image/png,xxx'
        }
    },
    children: [
        {
            data: {
                text: 'xxx2',
                image: 'smm_img_key_xxx'
            }
        },
        {
            data: {
                text: 'xxx3',
                image: 'smm_img_key_xxx'
            }
        }
    ]
}
```

## 注册

```js
import MindMap from 'simple-mind-map'
import NodeBase64ImageStorage from 'simple-mind-map/src/plugins/NodeBase64ImageStorage.js'

MindMap.usePlugin(NodeBase64ImageStorage)
```

注册完且实例化`MindMap`后可通过`mindMap.nodeBase64ImageStorage`获取到该实例。