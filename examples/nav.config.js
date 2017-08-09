module.exports = [{
    key: 'component-demo-README',
    title: '主页',
    uri: '/',
    location: function (resolve) {
        require.ensure([], function () {
            resolve(require('../README.md?noEval=true'));
        });
    }
}, {
    key: 'component-demo-CHANGELOG',
    title: '升级日志',
    uri: '/changelog',
    location: function (resolve) {
        require.ensure([], function () {
            resolve(require('../CHANGELOG.md'));
        });
    }
}, {
    key: 'component-demo-demo',
    title: '测试',
    uri: '/demo',
    location: function (resolve) {

            require.ensure([], function () {
                resolve(require('./components/gf-aaa/gf-aaa.ts'));
            });

        // require.async('../examples/components/gf-aaa', resolve);
        // require.async('./components/gf-aaa', resolve);
    // },
    // component(resolve) {
    //     require.async('./components/gf-aaa', resolve);
    }
}, {
    key: 'components',
    title: '组件',
    children: [{
        key: 'component-demo-input-input',
        title: 'input 输入框',
        uri: '/input',
        location: function (resolve) {
            require.ensure([], function () {
                resolve(require('../components/ms-input/ms-input.md'));
            });
        }
    }, {
        key: 'component-demo-textarea-textarea',
        title: 'textarea 多行输入框',
        uri: '/textarea',
        location: function (resolve) {
            require.ensure([], function () {
                resolve(require('../components/ms-textarea/ms-textarea.md'));
            });
        }
    }, {
        key: 'component-demo-select-select',
        title: 'select 选择框',
        uri: '/select',
        location: function (resolve) {
            require.ensure([], function () {
                resolve(require('../components/ms-select/ms-select.md'));
            });
        }
    }, {
        key: 'component-demo-radio-radio',
        title: 'radio 单选框',
        uri: '/radio',
        location: function (resolve) {
            require.ensure([], function () {
                resolve(require('../components/ms-radio/ms-radio.md'));
            });
        }
    }, {
        key: 'component-demo-checkbox-checkbox',
        title: 'checkbox 多选框',
        uri: '/checkbox',
        location: function (resolve) {
            require.ensure([], function () {
                resolve(require('../components/ms-checkbox/ms-checkbox.md'));
            });
        }
    }, {
        key: 'component-demo-datepicker-datepicker',
        title: 'datepicker 日期选择器',
        uri: '/datepicker',
        location: function (resolve) {
            require.ensure([], function () {
                resolve(require('../components/ms-datepicker/ms-datepicker.md'));
            });
        }
    }, {
        key: 'component-demo-timepicker-timepicker',
        title: 'timepicker 时间选择器',
        uri: '/timepicker',
        location: function (resolve) {
            require.ensure([], function () {
                resolve(require('../components/ms-timepicker/ms-timepicker.md'));
            });
        }
    }, {
        key: 'component-demo-upload-upload',
        title: 'upload 文件上传',
        uri: '/upload',
        location: function (resolve) {
            require.ensure([], function () {
                resolve(require('../components/ms-upload/ms-upload.md'));
            });
        }
    }, {
        key: 'component-demo-tree-select-tree-select',
        title: 'tree-select 树选择',
        uri: '/tree-select',
        location: function (resolve) {
             require.ensure([], function () {
                 resolve(require('../components/ms-tree-select/ms-tree-select.md'));
             });
         }
    }, {
        key: 'component-demo-form-control',
        title: 'form-control 表单控件',
        uri: '/form-control',
        location: function (resolve) {
            require.ensure([], function () {
                resolve(require('../components/ms-form/ms-control.md'));
            });
        }
    }, {
        key: 'component-demo-form-form',
        title: 'form 表单',
        uri: '/form',
        location: function (resolve) {
            require.ensure([], function () {
                resolve(require('../components/ms-form/ms-form.md'));
            });
        }
    }, {
        key: 'component-demo-menu-menu',
        title: 'menu 菜单',
        uri: '/menu',
        location: function (resolve) {
            require.ensure([], function () {
                resolve(require('../components/ms-menu/ms-menu.md'));
            });
        }
    }, {
        key: 'component-demo-table-table',
        title: 'table 数据表格',
        uri: '/table',
        location: function (resolve) {
            require.ensure([], function () {
                resolve(require('../components/ms-table/ms-table.md'));
            });
        }
    }, {
        key: 'component-demo-pagination-pagination',
        title: 'pagination 分页',
        uri: '/pagination',
        location: function (resolve) {
            require.ensure([], function () {
                resolve(require('../components/ms-pagination/ms-pagination.md'));
            });
        }
    }, {
        key: 'component-demo-tree-tree',
        title: 'tree 树',
        uri: '/tree',
        location: function (resolve) {
            require.ensure([], function () {
                resolve(require('../components/ms-tree/ms-tree.md'));
            });
        }
    }, {
        key: 'component-demo-dialog-dialog',
        title: 'dialog 对话框',
        uri: '/dialog',
        location: function (resolve) {
            require.ensure([], function () {
                resolve(require('../components/ms-dialog/ms-dialog.md'));
            });
        }
    }, {
        key: 'component-demo-loading-loading',
        title: 'loading 加载中蒙版',
        uri: '/loading',
        location: function (resolve) {
            require.ensure([], function () {
                resolve(require('../components/ms-loading/ms-loading.md'));
            });
        }
    }, {
        key: 'component-demo-message-message',
        title: 'message 全局提示',
        uri: '/message',
        location: function (resolve) {
            require.ensure([], function () {
                resolve(require('../components/ms-message/ms-message.md'));
            });
        }
    }, {
        key: 'component-demo-notification-notification',
        title: 'notification 通知提醒框',
        uri: '/notification',
        location: function (resolve) {
            require.ensure([], function () {
                resolve(require('../components/ms-notification/ms-notification.md'));
            });
        }
    }]
}];
// module.exports = [{
//   "zh-CN": [
//     {
//       "name": "开发指南",
//       "children": [
//         {
//           "path": "/installation",
//           "name": "安装"
//         },
//         {
//           "path": "/quickstart",
//           "name": "快速上手"
//         },
//         {
//           "path": "/i18n",
//           "name": "国际化"
//         },
//         {
//           "path": "/custom-theme",
//           "name": "自定义主题"
//         },
//         {
//           "path": "/transition",
//           "name": "内置过渡动画"
//         }
//       ]
//     },
//     {
//       "name": "更新日志",
//       "path": "/changelog"
//     },
//     {
//       "name": "基础组件",
//       "groups": [
//         {
//           "groupName": "Basic",
//           "list": [
//             {
//               "path": "/layout",
//               "title": "Layout 布局"
//             },
//             {
//               "path": "/color",
//               "title": "Color 色彩"
//             },
//             {
//               "path": "/typography",
//               "title": "Typography 字体"
//             },
//             {
//               "path": "/icon",
//               "title": "Icon 图标"
//             },
//             {
//               "path": "/button",
//               "title": "Button 按钮"
//             }
//           ]
//         },
//         {
//           "groupName": "Form",
//           "list": [
//             {
//               "path": "/radio",
//               "title": "Radio 单选框"
//             },
//             {
//               "path": "/checkbox",
//               "title": "Checkbox 多选框"
//             },
//             {
//               "path": "/input",
//               "title": "Input 输入框"
//             },
//             {
//               "path": "/input-number",
//               "title": "InputNumber 计数器"
//             },
//             {
//               "path": "/select",
//               "title": "Select 选择器"
//             },
//             {
//               "path": "/cascader",
//               "title": "Cascader 级联选择器"
//             },
//             {
//               "path": "/switch",
//               "title": "Switch 开关"
//             },
//             {
//               "path": "/slider",
//               "title": "Slider 滑块"
//             },
//             {
//               "path": "/time-picker",
//               "title": "TimePicker 时间选择器"
//             },
//             {
//               "path": "/date-picker",
//               "title": "DatePicker 日期选择器"
//             },
//             {
//               "path": "/datetime-picker",
//               "title": "DateTimePicker 日期时间选择器"
//             },
//             {
//               "path": "/upload",
//               "title": "Upload 上传"
//             },
//             {
//               "path": "/rate",
//               "title": "Rate 评分"
//             },
//             {
//               "path": "/color-picker",
//               "title": "ColorPicker 颜色选择器"
//             },
//             {
//               "path": "/transfer",
//               "title": "Transfer 穿梭框"
//             },
//             {
//               "path": "/form",
//               "title": "Form 表单"
//             }
//           ]
//         },
//         {
//           "groupName": "Data",
//           "list": [
//             {
//               "path": "/table",
//               "title": "Table 表格"
//             },
//             {
//               "path": "/tag",
//               "title": "Tag 标签"
//             },
//             {
//               "path": "/progress",
//               "title": "Progress 进度条"
//             },
//             {
//               "path": "/tree",
//               "title": "Tree 树形控件"
//             },
//             {
//               "path": "/pagination",
//               "title": "Pagination 分页"
//             },
//             {
//               "path": "/badge",
//               "title": "Badge 标记"
//             }
//           ]
//         },
//         {
//           "groupName": "Notice",
//           "list": [
//             {
//               "path": "/alert",
//               "title": "Alert 警告"
//             },
//             {
//               "path": "/loading",
//               "title": "Loading 加载"
//             },
//             {
//               "path": "/message",
//               "title": "Message 消息提示"
//             },
//             {
//               "path": "/message-box",
//               "title": "MessageBox 弹框"
//             },
//             {
//               "path": "/notification",
//               "title": "Notification 通知"
//             }
//           ]
//         },
//         {
//           "groupName": "Navigation",
//           "list": [
//             {
//               "path": "/menu",
//               "title": "NavMenu 导航菜单"
//             },
//             {
//               "path": "/tabs",
//               "title": "Tabs 标签页"
//             },
//             {
//               "path": "/breadcrumb",
//               "title": "Breadcrumb 面包屑"
//             },
//             {
//               "path": "/dropdown",
//               "title": "Dropdown 下拉菜单"
//             },
//             {
//               "path": "/steps",
//               "title": "Steps 步骤条"
//             }
//           ]
//         },
//         {
//           "groupName": "Others",
//           "list": [
//             {
//               "path": "/dialog",
//               "title": "Dialog 对话框"
//             },
//             {
//               "path": "/tooltip",
//               "title": "Tooltip 文字提示"
//             },
//             {
//               "path": "/popover",
//               "title": "Popover 弹出框"
//             },
//             {
//               "path": "/card",
//               "title": "Card 卡片"
//             },
//             {
//               "path": "/carousel",
//               "title": "Carousel 走马灯"
//             },
//             {
//               "path": "/collapse",
//               "title": "Collapse 折叠面板"
//             }
//           ]
//         }
//       ]
//     }
//   ],
//   "en-US": [
//     {
//       "name": "Development",
//       "children": [
//         {
//           "path": "/installation",
//           "name": "Installation"
//         },
//         {
//           "path": "/quickstart",
//           "name": "Quick Start"
//         },
//         {
//           "path": "/i18n",
//           "name": "Internationalization"
//         },
//         {
//           "path": "/custom-theme",
//           "name": "Custom Theme"
//         },
//         {
//           "path": "/transition",
//           "name": "Built-in transition"
//         }
//       ]
//     },
//     {
//       "name": "Changelog",
//       "path": "/changelog"
//     },
//     {
//       "name": "Components",
//       "groups": [
//         {
//           "groupName": "Basic",
//           "list": [
//             {
//               "path": "/layout",
//               "title": "Layout"
//             },
//             {
//               "path": "/color",
//               "title": "Color"
//             },
//             {
//               "path": "/typography",
//               "title": "Typography"
//             },
//             {
//               "path": "/icon",
//               "title": "Icon"
//             },
//             {
//               "path": "/button",
//               "title": "Button"
//             }
//           ]
//         },
//         {
//           "groupName": "Form",
//           "list": [
//             {
//               "path": "/radio",
//               "title": "Radio"
//             },
//             {
//               "path": "/checkbox",
//               "title": "Checkbox"
//             },
//             {
//               "path": "/input",
//               "title": "Input"
//             },
//             {
//               "path": "/input-number",
//               "title": "InputNumber"
//             },
//             {
//               "path": "/select",
//               "title": "Select"
//             },
//             {
//               "path": "/cascader",
//               "title": "Cascader"
//             },
//             {
//               "path": "/switch",
//               "title": "Switch"
//             },
//             {
//               "path": "/slider",
//               "title": "Slider"
//             },
//             {
//               "path": "/time-picker",
//               "title": "TimePicker"
//             },
//             {
//               "path": "/date-picker",
//               "title": "DatePicker"
//             },
//             {
//               "path": "/datetime-picker",
//               "title": "DateTimePicker"
//             },
//             {
//               "path": "/upload",
//               "title": "Upload"
//             },
//             {
//               "path": "/rate",
//               "title": "Rate"
//             },
//             {
//               "path": "/color-picker",
//               "title": "ColorPicker"
//             },
//             {
//               "path": "/transfer",
//               "title": "Transfer"
//             },
//             {
//               "path": "/form",
//               "title": "Form"
//             }
//           ]
//         },
//         {
//           "groupName": "Data",
//           "list": [
//             {
//               "path": "/table",
//               "title": "Table"
//             },
//             {
//               "path": "/tag",
//               "title": "Tag"
//             },
//             {
//               "path": "/progress",
//               "title": "Progress"
//             },
//             {
//               "path": "/tree",
//               "title": "Tree"
//             },
//             {
//               "path": "/pagination",
//               "title": "Pagination"
//             },
//             {
//               "path": "/badge",
//               "title": "Badge"
//             }
//           ]
//         },
//         {
//           "groupName": "Notice",
//           "list": [
//             {
//               "path": "/alert",
//               "title": "Alert"
//             },
//             {
//               "path": "/loading",
//               "title": "Loading"
//             },
//             {
//               "path": "/message",
//               "title": "Message"
//             },
//             {
//               "path": "/message-box",
//               "title": "MessageBox"
//             },
//             {
//               "path": "/notification",
//               "title": "Notification"
//             }
//           ]
//         },
//         {
//           "groupName": "Navigation",
//           "list": [
//             {
//               "path": "/menu",
//               "title": "NavMenu"
//             },
//             {
//               "path": "/tabs",
//               "title": "Tabs"
//             },
//             {
//               "path": "/breadcrumb",
//               "title": "Breadcrumb"
//             },
//             {
//               "path": "/dropdown",
//               "title": "Dropdown"
//             },
//             {
//               "path": "/steps",
//               "title": "Steps"
//             }
//           ]
//         },
//         {
//           "groupName": "Others",
//           "list": [
//             {
//               "path": "/dialog",
//               "title": "Dialog"
//             },
//             {
//               "path": "/tooltip",
//               "title": "Tooltip"
//             },
//             {
//               "path": "/popover",
//               "title": "Popover"
//             },
//             {
//               "path": "/card",
//               "title": "Card"
//             },
//             {
//               "path": "/carousel",
//               "title": "Carousel"
//             },
//             {
//               "path": "/collapse",
//               "title": "Collapse"
//             }
//           ]
//         }
//       ]
//     }
//   ]
// }];
