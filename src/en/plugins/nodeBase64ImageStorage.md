# NodeBase64ImageStorage plugin

> v0.14.0+

This plugin is used to modify the storage method of node images in base64 format in the data.

Store images in base64 format as' key map 'in the imgMap field of the root node, while other nodes only save' key 'to avoid the problem of duplicate storage of the same image referenced by different nodes. Normal' url 'format images are not processed.

For example, the node data before using the plugin is:

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

After using this plugin, it will become:

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

## Register

```js
import MindMap from 'simple-mind-map'
import NodeBase64ImageStorage from 'simple-mind-map/src/plugins/NodeBase64ImageStorage.js'

MindMap.usePlugin(NodeBase64ImageStorage)
```

After registration and instantiation of `MindMap`, the instance can be obtained through `mindMap.nodeBase64ImageStorage`.