+++
date = '2025-10-17'
draft = false
title = '修改目录'
weight = 1
+++

## 修改目录后需重新生成
content目录只是我们写作的目录，正式运行使用的是public目录下的文件夹。
修改content目录,hugo serve只是增量的生成，不会删除public下多余的内容。
~~~
hugo serve --cleanDestinationDir
~~~

- serve：     可以编译content下的内容到public下（修改目录的话，只在public下增加新目录，废弃的目录名public下还有）

- --cleanDestinationDir：     每次重新生成时，先清空public下的内容
