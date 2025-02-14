# Momentum chargeable plugin

The Momentum plugin is used to achieve momentum effects, which means holding down the mouse and dragging the canvas, then releasing it and the canvas will continue to move a certain distance based on inertia.

You can experience it in the online version. If you want to turn off this feature, you can do so in the [Settings] on the right.

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
import Momentum from 'momentum.cjs.min.js'
// Or import Momentum from 'momentum.esm.min.js'

MindMap.usePlugin(Momentum, options)
```

2.Referencing Unpackaged Source Code

You can first enter the plugin directory to execute:

```bash
npm link
```

Then enter your project root directory to execute:

```bash
npm link simple-mind-map-plugin-momentum
```

Then you can directly import it for use:

```js
import MindMap from 'simple-mind-map'
import Momentum from 'simple-mind-map-plugin-momentum'

MindMap.usePlugin(Momentum, options)
```

After registration and instantiation of `MindMap`, the instance can be obtained through `mindMap.numbers`.

You can also dynamically register and cancel registration:

```js
// Dynamically register
mindMap.addPlugin(Momentum, options)

// Dynamically cancel registration
mindMap.removePlugin(Momentum)
```

### Registration Options

When registering a plugin, you can pass an option object 'options', which supports passing the following properties:

- options.friction

The friction coefficient, the smaller the value, the greater the friction, and the further distance of movement is shorter.
 The default value is `0.95`.

- options.speedAmplificationFactor

The initial velocity amplification factor needs to be multiplied by a factor because the inertia initial velocity value calculated directly by dragging the mouse is very small.
 The default value is `10`.

Example:

```js
MindMap.usePlugin(Momentum, {
    friction: 0.9,
    speedAmplificationFactor: 5
})
```