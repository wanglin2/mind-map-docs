# Momentum chargeable plugin

The Momentum plugin is used to achieve momentum effects, which means holding down the mouse and dragging the canvas, then releasing it and the canvas will continue to move a certain distance based on inertia.

## Changelog

> v1.0.1
>
> 1.Fixed the issue of not considering the 'useLeftKeySelectionRightKeyDrag' option to avoid triggering momentum effects when selecting nodes.
>
> 2.Increase the mouse displacement threshold for triggering momentum effects to avoid unexpected movement effects.


## Charge

Please switch to the Chinese documentation for this plugin to view.

## Register

1.Referencing packaged files:

```js
import MindMap from 'simple-mind-map'
import Momentum from 'momentum.cjs.min.js'
// Or import Momentum from 'momentum.esm.min.js'
// If you want a package file in iife format, you can add the following in the build command of the package.json plugin: esbuild ./index.js --bundle --minify --external:buffer --format=iife --outfile=./dist/xxx.iife.min.js --global-name=xxx, Then execute npm run build again to generate

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