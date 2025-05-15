# Freemind chargeable plugin

This plugin can be used to import and export Freemind software in. mm file format.

## Changelog

> v1.0.1：
>
> 1.Fixed the issue where no space was added before the LINK attribute of the node when exporting mm files, resulting in an error when importing again;

## Charge

Please switch to the Chinese documentation for this plugin to view.

## Register

1.Referencing packaged files:

```js
import MindMap from 'simple-mind-map'
import Freemind from 'freemind.cjs.min.js'
// Or import Freemind from 'freemind.esm.min.js'
// If you want a package file in iife format, you can add the following in the build command of the package.json plugin: esbuild ./index.js --bundle --minify --external:buffer --format=iife --outfile=./dist/xxx.iife.min.js --global-name=xxx, Then execute npm run build again to generate

MindMap.usePlugin(Freemind)
```

2.Referencing Unpackaged Source Code

You can first enter the plugin directory to execute:

```bash
npm link
```

Then enter your project root directory to execute:

```bash
npm link simple-mind-map-plugin-freemind
```

Then you can directly import it for use:

```js
import MindMap from 'simple-mind-map'
import Freemind from 'simple-mind-map-plugin-freemind'

MindMap.usePlugin(Freemind)
```

## Usage

### Import .mm file

When importing, only the node text, comments, hyperlinks, and certain styles (color, background, line color and line width, font, size, bold, italic) are retained.

Regarding images: The '.mm' file stores data in the local path of the image on the computer, so 'js' cannot read it. Considering that the client scenario can be read, the 'transformImg' option is provided to customize the method of loading images. If it is not provided, the images will be ignored by default.

Regarding icons: Icons are proprietary protocols for various mind maps, so they cannot be retained.

To import a '.mm' file, you need to use the plugin's 'freemindToSmm' method, which can be obtained in the following ways.

1.Directly import file

```js
import { freemindToSmm } from 'simple-mind-map-plugin-freemind/freemindTo.js'
```

2.Through plugin class

```js
import MindMap from 'simple-mind-map'
import Freemind from 'simple-mind-map-plugin-freemind'

Freemind.freemindToSmm
```

Usage example:

```js
import MindMap from 'simple-mind-map'
import Freemind from 'simple-mind-map-plugin-freemind'

const mindMap = new MindMap()

const fileReader = new FileReader()
fileReader.readAsText(file)// File object, which is obtained through <input type="file">
fileReader.onload = async evt => {
    const data = await Freemind.freemindToSmm(evt.target.result, opt)
    mindMap.setData(res)
}
```

`opt' supports the following parameters:

```js
{
    transformImg: () => {},// Convert image path
    withStyle: false,// Is keep the style
}
```

Example of transformImg parameter passing in the official online Demo:

```js
{
    transformImg: image => {
        return new Promise(resolve => {
            // Only retain online image addresses
            if (/^https?:\/\//.test(image)) {
                resolve({ url: image })
            } else {
                resolve(null)
            }
        })
    }
}
```

### Export as .mm file

When exporting, only node text, comments (conversion methods need to be provided by oneself), hyperlinks, and certain manually set styles (not styles provided by the theme) are supported. Of course, if it is in rich text mode, inline styles will take effect.

Regarding images: Freemind does not support the base64 format and only supports images with online addresses. Therefore, if the image of your mind map node is not an online address, it cannot be rendered and can be set through the transformImage option.

Regarding the note: Freemind's note is in HTML format. Although the official demo of simple mind map provides Markdown format, there is actually no format limitation, so the conversion method needs to be based on your actual format. If your file is also in HTML format, there is no need to convert it directly, otherwise you need to implement the conversion method yourself.

Regarding formulas: Freemind does not support mathematical formulas, so the formula content will be deleted by default. If you want to keep it, you can set it through the withFormula option

After registering the plugin, you can directly call the 'export' method of the mind map instance to export:

```js
mindMap.export('mm', true, 'Filename')
```

Of course, it also supports passing some parameters:

```js
mindMap.export('mm', true, 'Filename', {
   transformNote: (note) => { return note },// Transform note
   transformImage: (image) => { return image },// Convert image link
   withStyle: false,// Is keep the style
   withFormula: false,// Is keep formula characters
})
```

In addition to using the `mindMap.export` method, you can also directly call the `smmToFreemind` method of the plugin, which are also two methods to obtain:

1.Directly import file

```js
import { smmToFreemind } from 'simple-mind-map-plugin-excel/toFreemind.js'
```

2.Through plugin class

```js
import MindMap from 'simple-mind-map'
import Freemind from 'simple-mind-map-plugin-freemind'

Freemind.smmToFreemind
```

Usage example:

```js
import MindMap from 'simple-mind-map'
import Freemind from 'simple-mind-map-plugin-freemind'

const mindMap = new MindMap()
const data = mindMap.getData()// Mind map data
const res = Freemind.smmToFreemind(data, opt)// The returned res is a string in mm format
```
