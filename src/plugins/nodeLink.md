# NodeLink 收费插件

> 适配v0.14.0及以上版本的simple-mind-map。

NodeLink插件用于提供节点链接的功能。可以把`b`节点链接到`a`节点上，添加成功后`a`节点上会显示一个链接图标，点击该图标可以跳转到并激活`b`节点。

## 收费

> 暂不支持购买单个插件，只能打包购买所有收费插件。

价格：￥999，包含所有收费插件。

扫码转账备注：插件购买。以及你的邮箱地址（如果达到文字上限，那么你可以分两次付款），然后会将插件文件发送到你的邮箱。购买请在充分的使用和考虑后进行，如果你对前端开发不太熟悉，不知道如何使用插件，那么请谨慎考虑购买，没有特殊原因不会退费。如果你发现了 bug，或者有需求，可以提交相关的 issue。

<p style="display:flex;align-items: flex-end;">

<img src="../assets/img/alipay.jpg" style="width: 300px" />
<img src="../assets/img/wechat.jpg" style="width: 300px" />

</p>

## 注册

1.引用打包后的文件：

```js
import MindMap from 'simple-mind-map'
import NodeLink from 'nodeLink.cjs.min.js'
// 或 import NodeLink from 'nodeLink.esm.min.js'

MindMap.usePlugin(NodeLink, opt)
```

2.引用未打包的源码

可以先进入到插件目录执行：

```bash
npm link
```

然后进入到你的项目根目录执行：

```bash
npm link simple-mind-map-plugin-node-link
```

然后就可以直接导入进行使用：

```js
import MindMap from 'simple-mind-map'
import NodeLink from 'simple-mind-map-plugin-node-link'

MindMap.usePlugin(NodeLink, opt)
```

注册完且实例化`MindMap`后可通过`mindMap.nodeLink`获取到该实例。

注册插件时支持传入一些配置项`opt`：

| 字段名称 | 类型  | 默认值 | 描述 |
| ------- | ----- | ----- | ---- |
| width | Number | 20 | 图标的大小 |
| height | Number | 20 | 图标的大小 |
| icon | String |  | 图标，svg字符串，不指定会使用默认的图标，需要注意去除svg字符串中的fill属性，否则颜色可能不生效 |
| colorIsFollowNode | Boolean | true | 图标颜色是否跟随节点文本的颜色 |
| color | String | #3f9cfc | 如果colorIsFollowNode设置为false时会使用该颜色 |
| handleIconClick | Function |  | 自定义链接图标的点击事件，默认会定位到及激活链接节点 |

## 命令

注册了本插件后会在思维导图实例上新增`SET_NODE_LINK`命令，给节点设置链接使用该命令：

```js
mindMap.execCommand('SET_NODE_LINK', appointNodes, uid, isAddReturn)
```

该命令可以传递三个参数：

- `appointNodes`：给指定的节点实例设置链接数据，可以传单个节点实例，也可以传递一个节点实例数组，如果传空数组，则会给当前激活的节点添加；

- `uid`：String，要链接到的节点的`uid`；

- `isAddReturn`：Boolean，可选，是否给被链接节点添加反向链接，默认为`false`。如果`appointNodes`传递了多个节点实例，那么反向链接会指向第一个；

示例：

```js
// 给当前画布激活的节点添加链接，链接到uid为`xxxx`的节点上
mindMap.execCommand('SET_NODE_LINK', [], 'xxxx')

// 删除链接
mindMap.execCommand('SET_NODE_LINK', [], null)
```

添加链接后数据会以`nodeLink`为名称保存到节点的`data`数据中。

## 事件

### node_link_not_find

当给节点链接到另一个节点后，如果被链接节点删除了，点击链接图标时无法知道节点时会触发该事件。你可以监听该事件来提醒用户是否删除该链接。