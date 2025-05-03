# Numbers 收费插件

> 当前最新版本：v2.0.0
>
> 版本适配说明：
> 
> v2.0.0版本适配v0.12.1及以上版本的simple-mind-map。
>
> v1.0.0版本适配v0.12.0及以下版本的simple-mind-map。

Numbers插件提供一键编号某个节点的子节点的功能，支持多种编号形式，支持编号指定层级：

<p style="display:flex;align-items: flex-end;">

<img src="../assets/img/编号1.jpg" style="width: 400px" />

<img src="../assets/img/编号2.jpg" style="width: 400px" />

</p>

<img src="../assets/img/编号3.jpg" style="width: 400px" />

你可以在在线版中通过在节点上【单击鼠标右键】-【单击编号其子节点】来进行体验。

## 收费

扫码转账备注你要购买的插件，以及你的邮箱地址（如果达到文字上限，那么你可以分两次付款），然后会将插件文件发送到你的邮箱。购买请在充分的使用和考虑后进行，如果你对前端开发不太熟悉，不知道如何使用插件，那么请谨慎考虑购买，没有特殊原因不会退费。如果你发现了 bug，或者有需求，可以提交相关的 issue。

价格：￥ 49.9，包含未打包的源码和打包后的文件。

<p style="display:flex;align-items: flex-end;">

<img src="../assets/img/alipay.jpg" style="width: 300px" />
<img src="../assets/img/wechat.jpg" style="width: 300px" />

</p>

## 注册

1.引用打包后的文件：

```js
import MindMap from 'simple-mind-map'
import Numbers from 'numbers.cjs.min.js'
// 或 import Numbers from 'numbers.esm.min.js'
// 如果你想要iife格式的打包文件，可以在插件的package.json的build命令中添加：esbuild ./index.js --bundle --minify --external:buffer --format=iife --outfile=./dist/xxx.iife.min.js --global-name=xxx，然后再执行一次npm run build即可生成

MindMap.usePlugin(Numbers)
```

2.引用未打包的源码

可以先进入到插件目录执行：

```bash
npm link
```

然后进入到你的项目根目录执行：

```bash
npm link simple-mind-map-plugin-numbers
```

然后就可以直接导入进行使用：

```js
import MindMap from 'simple-mind-map'
import Numbers from 'simple-mind-map-plugin-numbers'

MindMap.usePlugin(Numbers)
```

注册完且实例化`MindMap`后可通过`mindMap.numbers`获取到该实例。

## 命令

注册了本插件后会在思维导图实例上新增`SET_NUMBER`命令，给节点设置编号使用该命令：

```js
mindMap.execCommand('SET_NUMBER', appointNodes, number)
```

该命令可以传递两个参数：

- `appointNodes`：给指定的节点实例设置编号，可以传单个节点实例，也可以传递一个节点实例数组，如果传空数组，则会给当前激活的节点添加标记；

- `number`：要设置的编号数据，如果传`null`，那么代表删除编号，否则请传递一个对象，对象的详细字段如下：

| 字段名称 | 类型  | 默认值 | 描述 |
| ------- | ----- | ----- | ---- |
| type    | Number | 1    | 编号形式，默认为`1`，代表普通数字，可选值：1（纯数字）、2（数字带小数点，比如：1.）、3（数字带括号，比如：(1)）、4（小写字母，比如：a.）、5（大写字母，比如：A.）、6（小写罗马数字，比如：i.）、7（大写罗马数字，比如：I.）、8（中国大写数字，比如：一、）     |
| level   | Number | 1    | 要编号的子节点层级，默认为1级，可选值：1（1级）、2（2级）、3（3级）、0（所有层级）     |

调用命令时你可以只传递其中一个字段，比如`{ type: 1 }`，另一个字段会沿用之前的设置。

示例：

```js
mindMap.execCommand('SET_NUMBER', [], {
    type: 2,
    level: 3
})
```

设置编号后数据会以`number`为名称保存到节点的`data`数据中。