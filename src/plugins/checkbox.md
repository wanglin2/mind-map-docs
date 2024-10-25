# Checkbox 收费插件

Checkbox插件提供待办的功能，即可以给节点添加一个勾选框，点击勾选框可以切换完成和未完成的状态。

<img src="../assets/img/待办.png" style="width: 800px" />

你可以在在线版中通过在节点上【单击鼠标右键】-【单击添加待办】来进行体验。

## 收费

扫码转账备注你要购买的插件，以及你的邮箱地址（如果达到文字上限，那么你可以分两次付款），然后会将插件文件发送到你的邮箱。购买请在充分的使用和考虑后进行，如果你对前端开发不太熟悉，不知道如何使用插件，那么请谨慎考虑购买，没有特殊原因不会退费。如果你发现了 bug，或者有需求，可以提交相关的 issue。

价格：￥ 29.9，包含未打包的源码和打包后的文件。

<p style="display:flex;align-items: flex-end;">

<img src="../assets/img/alipay.jpg" style="width: 300px" />
<img src="../assets/img/wechat.jpg" style="width: 300px" />

</p>

## 注册

1.引用打包后的文件：

```js
import MindMap from 'simple-mind-map'
import Checkbox from 'checkbox.cjs.min.js'
// 或 import Checkbox from 'checkbox.esm.min.js'

MindMap.usePlugin(Checkbox)
```

2.引用未打包的源码

可以先进入到插件目录执行：

```bash
npm link
```

然后进入到你的项目根目录执行：

```bash
npm link simple-mind-map-plugin-checkbox
```

然后就可以直接导入进行使用：

```js
import MindMap from 'simple-mind-map'
import Checkbox from 'simple-mind-map-plugin-checkbox'

MindMap.usePlugin(Checkbox, opt)
```

注册完且实例化`MindMap`后可通过`mindMap.checkbox`获取到该实例。

注册插件时支持传入一些配置项`opt`：

| 字段名称 | 类型  | 默认值 | 描述 |
| ------- | ----- | ----- | ---- |
| width | Number | 20 | 待办图标的大小 |
| height | Number | 20 | 待办图标的大小 |
| checkedIcon | String |  | 待办已完成的图标，svg字符串，不指定会使用默认的图标，需要注意去除svg字符串中的fill属性，否则颜色可能不生效 |
| unCheckedIcon | String |  | 待办未完成的图标，svg字符串 |
| colorIsFollowNode | Boolean | true | 图标颜色是否跟随节点文本的颜色 |
| color | String | #3f9cfc | 如果colorIsFollowNode设置为false时会使用该颜色 |

## 命令

注册了本插件后会在思维导图实例上新增`SET_CHECKBOX`命令，给节点设置编号使用该命令：

```js
mindMap.execCommand('SET_CHECKBOX', appointNodes, checkboxData)
```

该命令可以传递两个参数：

- `appointNodes`：给指定的节点实例设置待办数据，可以传单个节点实例，也可以传递一个节点实例数组，如果传空数组，则会给当前激活的节点添加待办；

- `checkboxData`：要设置的待办数据，如果传`null`，那么代表删除待办，否则请传递一个对象，对象的详细字段如下：

| 字段名称 | 类型  | 默认值 | 描述 |
| ------- | ----- | ----- | ---- |
| done | Boolean |  | 待办是否已完成 |

示例：

```js
mindMap.execCommand('SET_CHECKBOX', [], {
   done: false
})
```

设置编号后数据会以`checkbox`为名称保存到节点的`data`数据中。