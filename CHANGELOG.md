
1.0.6 / 2017-08-17
------------------

- 修改组件展示样式
- 首页国际化语言切换
- 增加组件：ms-tree,ms-tree-select
- ms-tree修复外部更新 tree 数据，不会重新渲染的问题
- ms-tree修复 onSelect 回调事件对象属性名错误的问题;
- ms-table增加自动序列号
    ``` html
    <ms-table-header :widget="{title:'序号',type:'index'}"></ms-table-header>
    ```

1.0.5 / 2017-07-07
------------------

- 组件库初始化，集成19项组件功能
- 用less替代了sass重写组件样式，并结合了bootstrap