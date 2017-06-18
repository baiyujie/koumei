## 输入组件

#### 基本使用

``` html
<div :controller="doc-textarea-basic">
    <ts-textarea :widget="{value:@value}"></ts-textarea>
</div>
```

``` js
import * as avalon from 'avalon2';
import 'koumei';

const vm = avalon.define({
    $id: 'doc-textarea-basic',
    value: '这个家伙很懒，什么也没留下'
});
```

> 继承 [ts-control 组件](#!/form-control) 的所有参数