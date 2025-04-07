# Command 实例

`command`实例负责命令的添加及执行，内置了很多命令，也可以自行添加，命令指需要在历史堆栈数据里添加副本的操作。可通过`mindMap.command`获取到该实例

## 属性

### history

当前所有的历史数据列表。不要手动修改该数组。

`v0.14.0`之前的版本改数组里保存的是历史数据对象，之后的版本里保存的序列化的字符串，如果你要使用需要反序列化。

### activeHistoryIndex

当前所在的历史数据索引。不要手动修改该属性。

## 方法

前进后退请使用命令`BACK`或`FORWARD`。

### pause()

> v0.9.11+

暂停收集历史数据。

### recovery()

> v0.9.11+

恢复收集历史数据。

### add(name, fn)

添加命令。

`name`：命令名称

`fn`：命令要执行的方法

### remove(name, fn)

移除命令。

`name`：要移除的命令名称

`fn`：要移除的方法，不传的话移除该命令所有的方法

### getCopyData()

获取渲染树数据副本。即当前画布的数据。

### clearHistory()

清空历史堆栈数据

### addHistory()

触发一次历史堆栈数据添加操作。注意，该方法会延迟执行，延迟时间可通过实例化选项`addHistoryTime`来设置。

### originAddHistory ()

> v0.12.1+

功能同`addHistory`方法，不过该方法会立即执行，不会延迟。

### extendKeyMap(key, code)

> v0.12.2+

`key`：要扩展的按键标识，比如键盘上可能存在多个`/`按键，库默认已经定义了一个，那么你可以新定义一个，名字可以自己随便取，比如：`/2`

`code`：该按键的键值

扩展按键映射。

使用示例：

```js
mindMap.keyCommand.extendKeyMap('/2', 111)
mindMap.keyCommand.addShortcut('/2', mindMap.renderer.toggleActiveExpand)
```

### removeKeyMap(key)

> v0.12.2+

从按键映射中删除某个键。