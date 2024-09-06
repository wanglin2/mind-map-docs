# 贡献

## 参与开发

如果你想贡献代码的话可以`fork`本项目，然后切换到`feature`分支下进行开发，开发并测试完后可以提交`pr`到本项目的`feature`分支，提交时请尽量提交功能相关的文件，非必要的文件请勿提交。

在开发前最好通过新建一个`issue`来描述你想要新增的功能，我们可以先进行充分的沟通，在提交`pr`时请详细描述你开发的功能。

## 参与翻译

> 感谢[Emircan ERKUL](https://github.com/emircanerkul)提供的第一版英文翻译。
>
> 因为精力有限，目前大部分翻译都是使用机翻的，所以准确度难免有问题。

## 翻译文档

如果你想加入到文档的翻译工作中，可以`fork`文档项目：[https://github.com/wanglin2/mind-map-docs](https://github.com/wanglin2/mind-map-docs)。

可以参考[英文翻译](https://github.com/wanglin2/mind-map-docs/tree/main/src/en)，新建一个你要翻译的语言的文件夹，全部翻译完成后需要在`.vitepress`目录下新增一个`[语言].mjs`文件，内容参考其他语言文件修改即可。

最后需要修改一下`.vitepress/config.mjs`，引入`[语言].mjs`文件，修改`locales`配置即可。

全部完成后就可以提交`pr`到`main`分支了。

> 目前【教程】部分是没有进行翻译的，如果你有兴趣，也欢迎翻译到英文。

## 翻译在线Demo

除了文档，在线`Demo`也是支持多语言的，所以你也可以帮助新增语言，相比文档，这个工作量会小很多。

首先需要`fork`本项目，然后：

1.在`web/src/lang/`目录下新增新语言的文件，内容可以参考现有语言。翻译完成后需要在`web/src/lang/index.js`文件中导出。

2.在`web/src/config/`目录下新增新语言的文件，内容可以参考现有语言。翻译完成后需要在`web/src/config/index.js`文件中导出。

全部完成后就可以提交`pr`到`feature`分支了。
