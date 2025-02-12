# 如何给节点添加一点自定义的内容

```js
addCustomContentToNode: {
    // 返回要添加的DOM元素详细
    create: node => {
      const childrenLength = node.nodeData.children.length
      if (childrenLength <= 0) return null
      const el = document.createElement('div')
      el.style.cssText = `
        width: 20px;
        height: 20px;
        background: red;
        border-radius: 50%;
        color: #fff;
        text-align: center;
        line-height: 20px;
      `
      el.innerText = childrenLength
      return {
        el, // DOM节点
        width: 20, // 宽高
        height: 20
      }
    },
    // 处理生成的@svgdotjs/svg.js库的ForeignObject节点实例，可以设置其在节点内的位置
    handle: ({ content, element, node }) => {
      element.x(node.width - content.width / 2).y(-content.height / 2)
    }
  }
```
