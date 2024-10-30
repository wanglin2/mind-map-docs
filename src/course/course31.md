# 设置节点样式的更多方式

首先最基本的节点样式来自应用的主题，也就是通过实例化选项`theme`指定的主题，如果想覆盖主题的一部分配置可以通过实例化选项`themeConfig`：

```js
new MindMap({
    theme: 'classic4',
    themeConfig: {
        // 覆盖主题的二级节点的填充样式
        second: {
            fillColor: 'red'
        }
    }
})
```

所有字段可以从默认主题[default.js](https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/theme/default.js)文件里查看。

主题将节点按层级分为三种：

```js
{
    // 根节点样式
    root: {
        
    },
    // 二级节点样式
    second: {

    },
    // 三级及以下节点样式
    node: {

    }
}
```

所以你想修改哪一级节点的样式需要修改对应的层级对象，支持的字段依旧是从`default.js`文件里查看，如你所见，它们支持的字段是一样的。

显然这个文件里没有的字段你设置当然是没用的。

因为主题只支持这三种层级，所以比如你只想给第五层级设置样式，那么抱歉是无法实现的。

动态修改节点的样式可以使用节点实例的`setStyle`或`setStyles`方法：

```js
node.setStyle('color', 'blue')
```

也可以直接使用`SET_NODE_STYLE`或`SET_NODE_STYLES`命令：

```js
mindMap.execCommand('SET_NODE_STYLES', node, {
    fontSize: 24,
    shape: 'circle'
})
```

这些方法或命令最终体现在数据里就是给节点数据添加了对应的样式字段，如果使用了富文本，那么`text`字段中的富文本样式也会修改。

```js
{
    data: {
        text: '节点文本',
        fontSize: 24,
        shape: 'circle',
        color: 'blue'
    }
}
```

那么聪明的你肯定知道，如果想在渲染时就给节点设置样式，只要给你的数据上加上样式字段再传给思维导图渲染就可以了：

```js
new MindMap({
    data: {
        text: '节点文本',
        fontSize: 24,
        shape: 'circle',
        color: 'blue'
    },
    children: []
})
```

完整示例：

<iframe style="width: 100%; height: 455px; border: none;" src="https://wanglin2.github.io/playground/#eNrFVs1uGzcQfhWCRbFyIa/ktU+qHCRxfChQu0WUHooyCFa7I4kpl1zsUpZdQ5eglxQFeump6CHIJbccckkcBMjLJHbyFhkuSWn1kx/kB4EggJz5ZubjkPuRp/RKnodHY6Ad2i2TguealKDH+SUmeZarQpNTUsCgSZQ8UGOpIW2SchQLoSbXYUCmZFCojASYIZhFHHCZHsS5dTFaolnAZobWzSzOGWWSECYFaGJsBrlL5FgIJplMlCw1SUaxHMKhSiHa2lNCFYhobJDdS+TUBFuQRDfaXY6wAJlCAUU4QIMJvXryC08bQbS5FWyYKIMPcXE9fSKgESQmb9AkQV8geURM19aPPr1+ZOt7IBxDsqeyLJbo7e3fuHX407X9W70bv/6430M+Jm3T1iFkoKTu8T+gQ6KdpjVh93OcBwkvEmG6zvTUs59tUqPGttZkmPjNabgCIDokVck4A6nDIeh9AWZ49eQHJOci95BEzCUUwYbjkMY67niOuJnUGBitmYxRw7E2RkbP7529+uvOxZ0zRl0Gixjz1AC2vG068zKajLhIsakG8Ns8qFbhLYWXi794+vfF0wdr6i9wiOr2OY93clnh805OK7ye3J3x2lohtkCuOsTL/kWSa4jeXPQv4z8P8+i9zKNPZ16f1nz1PF/qXGx/1XOx/Z7ubuO5WAMIvG4ENeGoIrX9BZWKoNfLyDqMVUjEVAr5xTbRD53N59UjVCJDUMRlyZMdT7GyoyQN+HChlSWgLKcr3R1wISoJx1QFpLVluMK+HpdcX1dKG+n+WZVccyVxFYGAgTbXRIKyiBJ408GTAmINhzCppB5G8RGvakilrySaH9mGTTe+R2lGee627O2K9ypONOCViOE4I6Sb8iNSrXKXUSe51yBTjFZuB+Dp3DsTZIR0W+itA30mrZToxwbil9ztj7VWklxOBE9+R8jKNYvgF88fnv97tqBNF//9+fr+/6/uPuq2bIYPymgvzrUZI8x4fu/xy2f/LGWcL8aPuq1ar3Bamsu7Qlx2rw1Gw5Z9YrirLYQyC5OyZBR7b14ahIS1tvoDMuGpHuHd025/W+EIyWe7XgBWxD2sHNU5Mf9vltvvU80D436pxFjbQELM2emQtptplc8nq+VHwIcjhO+02/mxr7y+7ne+chYXQ451fdY8TlMu8cOwhhn10J2Gj2eMqfAMV92nTWp7b55z4e1SSXw9VomZc2DvZx8io/g4tMoWtnAYFvhC4RmYbdrsF2pS4pvpNka4D2vNg9HGrm6yiXLcpnT6BixeSXA=" />