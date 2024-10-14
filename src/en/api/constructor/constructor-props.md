# Constructor

## Static props

### pluginList

> v0.3.0+

List of all currently registered plugins.

## Instance props

### el

Container element.

### opt

Config options object.

### svg

> @svgdotjs/svg.js library calls the node instance returned by the SVG() method

Canvas SVG element.

### draw

> @svgdotjs/svg.js library calls the node instance returned by the group() method
>
> Child node of SVG node

Container element, used to carry content such as nodes and connections.

### lineDraw

> v0.8.0+
>
> @svgdotjs/svg.js library calls the node instance returned by the group() method
>
> Child node of draw node

Container for node wiring elements.

### nodeDraw

> v0.8.0+
>
> @svgdotjs/svg.js library calls the node instance returned by the group() method
>
> Child node of draw node

Container for node elements.

### associativeLineDraw

> v0.8.0+
>
> @svgdotjs/svg.js library calls the node instance returned by the group() method
>
> Available when the associated line plugin is registered
>
> Child node of draw node

Container for associative line content.

### otherDraw

> v0.8.0+
>
> @svgdotjs/svg.js library calls the node instance returned by the group() method
>
> Child node of draw node

Container for other content.

### elRect

The size and position information of the container element 'el'. The return result of calling the 'getBoundingClientRect()' method.

### width

The width of the container element 'el'.

### height

The height of the container element 'el'.

### themeConfig

Current Theme Configuration.

### cssTextMap 

> v0.12.0+

Necessary CSS styles. This style will be dynamically added to the page during instantiation, and will also be added to the SVG source code when exported as SVG. The library has some default definitions, which can be viewed here: [constant.js](https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/constants/constant.js#L186). At the same time, plugins can also use the 'appendCss' method to append styles.