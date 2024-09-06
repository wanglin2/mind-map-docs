# Contribute

## Participate in development

If you want to contribute code, you can 'fork' this project and switch to the 'feature' branch for development. After development and testing, you can submit the 'pr' to the 'feature' branch of this project. When submitting, please try to submit functional files as much as possible. Do not submit unnecessary files.

Before development, it is best to create a new 'issue' to describe the new features you want to add. We can have sufficient communication first, and when submitting a 'pr', please provide a detailed description of the features you are developing.

## Participate in translation

> Thanks for the first version English translation provided by [Emircan ERKUL](https://github.com/emircanerkul).
>
> Due to limited energy, most translations currently use machine translation, so accuracy is inevitably problematic.

## Translate doc

If you want to join the translation work of the document, you can fork the document project: [https://github.com/wanglin2/mind-map-docs](https://github.com/wanglin2/mind-map-docs).

Reference[English translation](https://github.com/wanglin2/mind-map-docs/tree/main/src/en), Create a new folder for the language you want to translate, and after all translations are completed, you need to add a new '[Language].mjs' file in the '.vitepress' directory, with the content modified according to other language files.

Finally, it is necessary to modify the '.vitepress/config.mjs' file by introducing the '[Language].mjs' file and modifying the 'locales' configuration.

After completing everything, you can submit 'pr' to the 'main' branch.

> At present, the tutorial section has not been translated. If you are interested, please feel free to translate it into English.

## Translate online demo

In addition to documentation, online demos also support multiple languages, so you can also help add new languages. Compared to documentation, this workload will be much smaller.

Firstly, we need to `fork` this project, and then:

1.Add a file for the new language in the 'web/src/lang/' directory, and refer to the content of the existing language. After the translation is completed, it needs to be exported in the 'web/src/lang/index.js' file.

2.Add a file for the new language in the 'web/src/config/' directory, and refer to the content of the existing language. After the translation is completed, it needs to be exported in the 'web/src/config/index.js' file.

After completing everything, you can submit 'pr' to the 'features' branch.

