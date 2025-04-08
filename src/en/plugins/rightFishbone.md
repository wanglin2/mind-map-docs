# RightFishbone chargeable plugin

> Compatible with simple-mind-map of v0.14.0 and above.

The RightFishbone plugin is used to provide a layout structure for the right fishbone diagram, including two types: regular and with fish head and tail shapes:

<p style="display:flex;align-items: flex-end;">

<img src="../../assets/img/向右鱼骨图.png" style="width: 400px" />

<img src="../../assets/img/向右鱼骨图2.png" style="width: 400px" />

</p>

You can switch between the 'Structure' list in the online version to experience it.

## Charge

Scanning the code and transferring money, please note the plugin you want to purchase and your email address(If you reach the maximum text limit, you can make the payment in two installments), and then the plugin file will be sent to your email. Purchase should be made after full use and consideration. If you are not familiar with front-end development and do not know how to use plugins, please consider purchasing carefully. There will be no refund unless there are special reasons. If you find bugs or have requirements, you can submit relevant issues.

Price: ￥ 29.9, including unpackaged source code and packaged files.

> If you buy 4 or more fee-based plug-ins at a time, you will get a 20% discount. If you want to take action ~

<p style="display:flex;align-items: flex-end;">

<img src="../../assets/img/alipay.jpg" style="width: 300px" />
<img src="../../assets/img/wechat.jpg" style="width: 300px" />

</p>

## Register

1.Referencing packaged files:

```js
import MindMap from 'simple-mind-map'
import RightFishbone from 'rightFishbone.cjs.min.js'
// 或 import RightFishbone from 'rightFishbone.esm.min.js'

MindMap.usePlugin(RightFishbone)
```

2.Referencing Unpackaged Source Code

You can first enter the plugin directory to execute:

```bash
npm link
```

Then enter your project root directory to execute:

```bash
npm link simple-mind-map-plugin-right-fishbone
```

Then you can directly import it for use:

```js
import MindMap from 'simple-mind-map'
import RightFishbone from 'simple-mind-map-plugin-right-fishbone'

MindMap.usePlugin(RightFishbone)
```

After registration and instantiation of `MindMap`, the instance can be obtained through `mindMap.rightFishbone`.

## Usage

After registering the plugin, it can be used directly. You can input the structure when instantiating the mind map:

- `rightFishbone`: Ordinary right-handed fishbone diagram

- `rightFishbone2`Fish bone diagram with fish head and tail shape

Example:

```js
const mindMap = new MindMap({
    layout: 'rightFishbone2'
})

// Dynamic switching
mindMap.setLayout('rightFishbone')
```