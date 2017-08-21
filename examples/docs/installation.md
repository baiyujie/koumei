## 安装

### npm 安装

推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

```shell
npm install koumei --save
```

### Koumei npm命令

```shell
  npm run [scripts]
  i: 安装阿里npm资源镜像 
  build: 测试编译
  dev：启动服务,在线组件测试
  examples: koumei指南在线查看
  examples: build: koumei指南静态资源生成
  dist: koumei核心文件压缩生成 
```

### CDN

目前可以通过 [github.com/koumei](https://github.com/baiyujie/koumei/) 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

```shell
<!-- 引入样式 -->
<link rel="stylesheet" href="/lib/koumei.css">
<!-- 引入组件库 -->
<script src="/lib/koumei.js"></script>
```

### 浏览器支持

现代浏览器、IE8 及以上

### Hello world

通过 CDN 的方式我们可以很容易地使用 koumei 写出一个 Hello world 页面。[在线演示](http://)

```shell
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <!-- 引入样式 -->
  <link rel="stylesheet" href="/lib/koumei.css">
</head>
<body>
  <div :controller="helloworld">
    <button type="button" class="btn btn-primary" :click="@show = true">弹出对话框</button>
    <ms-dialog :widget="{$innerVm: 'helloworld-dialog', show: @show, onCancel: @handleCancel, onOk: @handleOk}">
      <div slot="body" ms-skip>
        <p>欢迎使用 Koumei</p>
      </div>
    </ms-dialog>
  </div>
</body>
  <!-- 先引入 Avalon2 -->
  <script src="/lib/avalon2.js"></script>
  <!-- 引入组件库 -->
  <script src="/lib/koumei.js"></script>
  <script>
    vm = avalon.define({
      $id: 'helloworld',
      show: false,
      handleCancel(e) {
          this.show = false;
      },
      handleOk() {
          this.show = false;
      }
    });
    avalon.define({
      $id: 'helloworld-dialog',
      title: 'Koumei'
    });
  </script>
</html>
```

如果是通过 npm 安装，并希望配合 webpack 使用，请阅读下一节：快速上手。