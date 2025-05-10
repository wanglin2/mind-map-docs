# Momentum 收费插件

Momentum 插件用于实现动量效果，即鼠标按住拖动画布，然后松开后画布会根据惯性继续移动一段距离。

你可以在在线版中进行体验，如果要关闭该特性，可以在右侧的【设置】中关闭。

## 更新记录

> v1.0.1
>
> 1.修复没有考虑`useLeftKeySelectionRightKeyDrag`选项的问题，避免在框选节点时触发动量效果。
>
> 2.增加触发动量效果的鼠标位移阈值判断，避免出现非预期的移动效果。

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
import Momentum from 'momentum.cjs.min.js'
// 或 import Momentum from 'momentum.esm.min.js'
// 如果你想要iife格式的打包文件，可以在插件的package.json的build命令中添加：esbuild ./index.js --bundle --minify --external:buffer --format=iife --outfile=./dist/xxx.iife.min.js --global-name=xxx，然后再执行一次npm run build即可生成

MindMap.usePlugin(Momentum, options)
```

2.引用未打包的源码

可以先进入到插件目录执行：

```bash
npm link
```

然后进入到你的项目根目录执行：

```bash
npm link simple-mind-map-plugin-momentum
```

然后就可以直接导入进行使用：

```js
import MindMap from 'simple-mind-map'
import Momentum from 'simple-mind-map-plugin-momentum'

MindMap.usePlugin(Momentum, options)
```

注册完且实例化`MindMap`后可通过`mindMap.momentum`获取到该实例。

也可以动态注册和取消注册：

```js
// 动态注册
mindMap.addPlugin(Momentum, options)

// 动态取消注册
mindMap.removePlugin(Momentum)
```

### 注册选项

注册插件时可以传递一个选项对象`options`，支持传递的属性如下：

- options.friction

摩擦系数，值越小摩擦越大，继续移动的距离就短。默认值为`0.95`。

- options.speedAmplificationFactor

初始速度放大倍数，因为根据鼠标拖动直接计算出来的惯性初始速度值很小，所以需要乘一个放大倍数。默认值为`10`。

示例：

```js
MindMap.usePlugin(Momentum, {
    friction: 0.9,
    speedAmplificationFactor: 5
})
```