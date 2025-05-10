# Numbers chargeable plugin

> Current Latest Version:v2.0.0
>
> Version adaptation instructions:
> 
> Version v2.0.0 is compatible with simple-mind-map of v0.12.1 and above.
>
> Version v1.0.0 is compatible with simple-mind-map of v0.12.0 and below.

The Numbers plugin provides the function of one click numbering of child nodes of a node, supports multiple numbering forms, and specifies the hierarchy of numbering:

<p style="display:flex;align-items: flex-end;">

<img src="../../assets/img/编号1.jpg" style="width: 400px" />

<img src="../../assets/img/编号2.jpg" style="width: 400px" />

</p>

<img src="../../assets/img/编号3.jpg" style="width: 400px" />

You can experience it in the online version by right clicking on the node and clicking on its numbered child nodes.

## Charge

Please switch to the Chinese documentation for this plugin to view.

## Register

1.Referencing packaged files:

```js
import MindMap from 'simple-mind-map'
import Numbers from 'numbers.cjs.min.js'
// Or import Numbers from 'numbers.esm.min.js'
// If you want a package file in iife format, you can add the following in the build command of the package.json plugin: esbuild ./index.js --bundle --minify --external:buffer --format=iife --outfile=./dist/xxx.iife.min.js --global-name=xxx, Then execute npm run build again to generate

MindMap.usePlugin(Numbers)
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
import Numbers from 'simple-mind-map-plugin-numbers'

MindMap.usePlugin(Numbers)
```

After registration and instantiation of `MindMap`, the instance can be obtained through `mindMap.numbers`.

## Command

After registering this plugin, the 'SET_NUMBER' command will be added to the mind map instance to set node numbers. Use this command:

```js
mindMap.execCommand('SET_NUMBER', appointNodes, number)
```

This command can pass two parameters:

- `appointNodes`：Assign a number to a specified node instance, which can be passed as a single node instance or as an array of node instances. If an empty array is passed, a number will be added to the currently activated node;

- `number`：If the number data to be set is passed as' null ', it means the number will be deleted. Otherwise, please pass an object with the following detailed fields:

| Field name | Type  | Default | Desc |
| ------- | ----- | ----- | ---- |
| type    | Number | 1    | Number format, default is '1', representing ordinary numbers, optional values: 1 (pure number), 2 (number with decimal point, such as: 1.), 3 (number with parentheses, such as: (1)), 4 (lowercase letter, such as: a.), 5 (uppercase letter, such as: A.), 6 (lowercase Roman number, such as: i.), 7 (uppercase Roman number, such as: I.), 8 (Chinese uppercase number, such as: 一、)     |
| level   | Number | 1    |  The child node hierarchy to be numbered, default is level 1, optional values: 1 (level 1), 2 (level 2), 3 (level 3), 0 (all levels)   |

When calling a command, you can pass only one field, such as '{type: 1}', and the other field will use the previous setting.

示例：

```js
mindMap.execCommand('SET_NUMBER', [], {
    type: 2,
    level: 3
})
```

After setting the number, the data will be saved to the node's 'data' under the name 'number'.