## 快速上手

本节将介绍如何在项目中使用 Koumei。

### 使用 Starter Kit

我们提供了通用的[项目模板](https://github.com/baiyujie/ts-koumei)，你可以直接使用。

如果不希望使用我们提供的模板，请继续阅读。

### 引入 Koumei

你可以引入整个 Koumei，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Koumei。

#### 完整引入

``` javascript
import * as avalon from 'avalon2';
import 'koumei';
// 打印一下会发现组件库已经挂在 avalon 上了
console.log(avalon.components);
```

以上代码便完成了 Koumei 的引入。需要注意的是，样式文件需要单独引入。

#### 按需引入

### 开始使用

至此，一个基于 Avalon2 和 Koumei 的开发环境已经搭建完毕，现在就可以编写代码了。启动开发模式：

```bash
# 执行如下命令后访问 localhost:9000
npm run dev
```

编译：

```bash
npm run build
```

各个组件的使用方法请参阅它们各自的文档。

### 组件文档及示例

[Koumei API](https://baiyujie.github.io/koumei-docs)

### Wiki百科

[开始!](https://github.com/baiyujie/koumei/wiki/%E5%BC%80%E5%A7%8B%EF%BC%81)

[怎么搞组件开发!](https://github.com/baiyujie/koumei/wiki/%E6%80%8E%E4%B9%88%E6%90%9E%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91%EF%BC%9F)