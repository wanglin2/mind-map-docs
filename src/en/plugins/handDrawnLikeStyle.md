# HandDrawnLikeStyle chargeable plugin

HandDrawnLikeStyle plugin provides a hand drawn style, where the connections and shapes of nodes become hand drawn, just like the following:

<img src="../../assets/img/手绘风格.png" style="width: 800px" />

## Charge

Please switch to the Chinese documentation for this plugin to view.

## Register

1.Referencing packaged files:

```js
import MindMap from 'simple-mind-map'
import HandDrawnLikeStyle from 'handDrawnLikeStyle.cjs.min.js'
// Or import HandDrawnLikeStyle from 'handDrawnLikeStyle.esm.min.js'
// If you want a package file in iife format, you can add the following in the build command of the package.json plugin: esbuild ./index.js --bundle --minify --external:buffer --format=iife --outfile=./dist/xxx.iife.min.js --global-name=xxx, Then execute npm run build again to generate

MindMap.usePlugin(HandDrawnLikeStyle)
```

2.Referencing Unpackaged Source Code

You can first enter the plugin directory to execute:

```bash
npm link
```

Then enter your project root directory to execute:

```bash
npm link simple-mind-map-plugin-handdrawnlikestyle
```

Then you can directly import it for use:

```js
import MindMap from 'simple-mind-map'
import HandDrawnLikeStyle from 'simple-mind-map-plugin-handdrawnlikestyle'

MindMap.usePlugin(HandDrawnLikeStyle)
```

After registration and instantiation of `MindMap`, the instance can be obtained through `mindMap.handDrawnLikeStyle`.

After registering the plugin, there is no need to perform other methods and the hand drawn style can take effect.

If you are using the mindMap.addPlugin method to dynamically register a component, you need to call the method of re rendering once:

```js
mindMap.addPlugin(HandDrawnLikeStyle)
mindMap.reRender()
```

## Methods

You may not be familiar with the following methods.

### createPath(svgPathStr)

- `svgPathStr`：SVG Path string

Create a hand drawn style path node and return the path node of SVG.

### createPolygon(points)

- `points`：Points array

```js
points：[
    [x1, y1],
    ...
]
```

Create a hand drawn polygon node and return the Path node of SVG.

### transformPath(svgPathStr)

Convert SVG Path strings to hand drawn SVG Path strings.