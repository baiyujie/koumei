module.exports = {
    "zh-CN":[{
            key: 'component-guide',
            title: '指南',
            uri: '/guide',
            location: function (resolve) {
                require.ensure([], function () {
                    resolve(require('./components/doc-menu/doc-guide.md'));
                });
            }
        }, {
            key: 'component-api',
            title: '组件',
            children:[{
                key: 'component-api-guide',
                title: '开发指南',                
                children:[{
                    key: 'component-api-installation',
                    title: '安装',
                    uri: '/installation',
                    location: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('../README.md?noEval=true'));
                        });
                    }
                }, {
                    key: 'component-api-quickstart',
                    title: '快速上手',
                    uri: '/quickstart',
                    location: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('../README.md?noEval=true'));
                        });
                    }
                }, {
                    key: 'component-api-i18n',
                    title: '国际化',
                    uri: '/i18n',
                    location: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('../README.md?noEval=true'));
                        });
                    }
                }]
            }, {
                key: 'component-api-changelog',
                title: '更新日志',
                uri: '/changelog',
                location: function (resolve) {
                    require.ensure([], function () {
                        resolve(require('../CHANGELOG.md'));
                    });
                }
            }, {
                key: 'components-api-basic',
                title: '基础组件',
                children: [{
                    key: 'component-api-input-input',
                    title: 'input 输入框',
                    uri: '/input',
                    location: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('../components/ms-input/ms-input.md'));
                        });
                    }
                }, {
                    key: 'component-api-textarea-textarea',
                    title: 'textarea 多行输入框',
                    uri: '/textarea',
                    location: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('../components/ms-textarea/ms-textarea.md'));
                        });
                    }
                }, {
                    key: 'component-api-select-select',
                    title: 'select 选择框',
                    uri: '/select',
                    location: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('../components/ms-select/ms-select.md'));
                        });
                    }
                }, {
                    key: 'component-api-radio-radio',
                    title: 'radio 单选框',
                    uri: '/radio',
                    location: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('../components/ms-radio/ms-radio.md'));
                        });
                    }
                }, {
                    key: 'component-api-checkbox-checkbox',
                    title: 'checkbox 多选框',
                    uri: '/checkbox',
                    location: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('../components/ms-checkbox/ms-checkbox.md'));
                        });
                    }
                }, {
                    key: 'component-api-datepicker-datepicker',
                    title: 'datepicker 日期选择器',
                    uri: '/datepicker',
                    location: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('../components/ms-datepicker/ms-datepicker.md'));
                        });
                    }
                }, {
                    key: 'component-api-timepicker-timepicker',
                    title: 'timepicker 时间选择器',
                    uri: '/timepicker',
                    location: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('../components/ms-timepicker/ms-timepicker.md'));
                        });
                    }
                }, {
                    key: 'component-api-upload-upload',
                    title: 'upload 文件上传',
                    uri: '/upload',
                    location: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('../components/ms-upload/ms-upload.md'));
                        });
                    }
                }, {
                    key: 'component-api-tree-select-tree-select',
                    title: 'tree-select 树选择',
                    uri: '/tree-select',
                    location: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('../components/ms-tree-select/ms-tree-select.md'));
                        });
                    }
                }, {
                    key: 'component-api-form-control',
                    title: 'form-control 表单控件',
                    uri: '/form-control',
                    location: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('../components/ms-form/ms-control.md'));
                        });
                    }
                }, {
                    key: 'component-api-form-form',
                    title: 'form 表单',
                    uri: '/form',
                    location: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('../components/ms-form/ms-form.md'));
                        });
                    }
                }, {
                    key: 'component-api-menu-menu',
                    title: 'menu 菜单',
                    uri: '/menu',
                    location: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('../components/ms-menu/ms-menu.md'));
                        });
                    }
                }, {
                    key: 'component-api-table-table',
                    title: 'table 数据表格',
                    uri: '/table',
                    location: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('../components/ms-table/ms-table.md'));
                        });
                    }
                }, {
                    key: 'component-api-pagination-pagination',
                    title: 'pagination 分页',
                    uri: '/pagination',
                    location: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('../components/ms-pagination/ms-pagination.md'));
                        });
                    }
                }, {
                    key: 'component-api-tree-tree',
                    title: 'tree 树',
                    uri: '/tree',
                    location: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('../components/ms-tree/ms-tree.md'));
                        });
                    }
                }, {
                    key: 'component-api-dialog-dialog',
                    title: 'dialog 对话框',
                    uri: '/dialog',
                    location: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('../components/ms-dialog/ms-dialog.md'));
                        });
                    }
                }, {
                    key: 'component-api-loading-loading',
                    title: 'loading 加载中蒙版',
                    uri: '/loading',
                    location: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('../components/ms-loading/ms-loading.md'));
                        });
                    }
                }, {
                    key: 'component-api-message-message',
                    title: 'message 全局提示',
                    uri: '/message',
                    location: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('../components/ms-message/ms-message.md'));
                        });
                    }
                }, {
                    key: 'component-api-notification-notification',
                    title: 'notification 通知提醒框',
                    uri: '/notification',
                    location: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('../components/ms-notification/ms-notification.md'));
                        });
                    }
                }]
            }]
        }, {
            key: 'component-resource',
            title: '资源',
            uri: '/resource',
            location: function (resolve) {
                require.ensure([], function () {
                    resolve(require('./components/doc-menu/doc-resource.md'));
                });
            }
        }]
    ,'en-US': [{
        key: 'component-guide',
        title: 'Guide',
        uri: '/guide',
        location: function (resolve) {
            require.ensure([], function () {
                resolve(require('./components/doc-menu/doc-guide.md'));
            });
        }
    }, {
        key: 'component-api',
        title: 'Component',
        children:[{
            key: 'component-api-guide',
            title: 'Development',                
            children:[{
                key: 'component-api-installation',
                title: 'Installation',
                uri: '/',
                location: function (resolve) {
                    require.ensure([], function () {
                        resolve(require('../README.md?noEval=true'));
                    });
                }
            }, {
                key: 'component-api-quickstart',
                title: 'Quick start',
                uri: '/quickstart',
                location: function (resolve) {
                    require.ensure([], function () {
                        resolve(require('../README.md?noEval=true'));
                    });
                }
            }, {
                key: 'component-api-i18n',
                title: 'Internationalization',
                uri: '/i18n',
                location: function (resolve) {
                    require.ensure([], function () {
                        resolve(require('../README.md?noEval=true'));
                    });
                }
            }]
        }, {
            key: 'component-api-changelog',
            title: 'Changelog',
            uri: '/changelog',
            location: function (resolve) {
                require.ensure([], function () {
                    resolve(require('../CHANGELOG.md'));
                });
            }
        }, {
            key: 'components-api-basic',
            title: 'Components',
            children: [{
                key: 'component-api-input-input',
                title: 'Input',
                uri: '/input',
                location: function (resolve) {
                    require.ensure([], function () {
                        resolve(require('../components/ms-input/ms-input.md'));
                    });
                }
            }, {
                key: 'component-api-textarea-textarea',
                title: 'Textarea',
                uri: '/textarea',
                location: function (resolve) {
                    require.ensure([], function () {
                        resolve(require('../components/ms-textarea/ms-textarea.md'));
                    });
                }
            }, {
                key: 'component-api-select-select',
                title: 'Select',
                uri: '/select',
                location: function (resolve) {
                    require.ensure([], function () {
                        resolve(require('../components/ms-select/ms-select.md'));
                    });
                }
            }, {
                key: 'component-api-radio-radio',
                title: 'Radio',
                uri: '/radio',
                location: function (resolve) {
                    require.ensure([], function () {
                        resolve(require('../components/ms-radio/ms-radio.md'));
                    });
                }
            }, {
                key: 'component-api-checkbox-checkbox',
                title: 'Checkbox',
                uri: '/checkbox',
                location: function (resolve) {
                    require.ensure([], function () {
                        resolve(require('../components/ms-checkbox/ms-checkbox.md'));
                    });
                }
            }, {
                key: 'component-api-datepicker-datepicker',
                title: 'Datepicker',
                uri: '/datepicker',
                location: function (resolve) {
                    require.ensure([], function () {
                        resolve(require('../components/ms-datepicker/ms-datepicker.md'));
                    });
                }
            }, {
                key: 'component-api-timepicker-timepicker',
                title: 'Timepicker',
                uri: '/timepicker',
                location: function (resolve) {
                    require.ensure([], function () {
                        resolve(require('../components/ms-timepicker/ms-timepicker.md'));
                    });
                }
            }, {
                key: 'component-api-upload-upload',
                title: 'Upload',
                uri: '/upload',
                location: function (resolve) {
                    require.ensure([], function () {
                        resolve(require('../components/ms-upload/ms-upload.md'));
                    });
                }
            }, {
                key: 'component-api-tree-select-tree-select',
                title: 'Tree-Select',
                uri: '/tree-select',
                location: function (resolve) {
                    require.ensure([], function () {
                        resolve(require('../components/ms-tree-select/ms-tree-select.md'));
                    });
                }
            }, {
                key: 'component-api-form-control',
                title: 'Form-Control',
                uri: '/form-control',
                location: function (resolve) {
                    require.ensure([], function () {
                        resolve(require('../components/ms-form/ms-control.md'));
                    });
                }
            }, {
                key: 'component-api-form-form',
                title: 'Form',
                uri: '/form',
                location: function (resolve) {
                    require.ensure([], function () {
                        resolve(require('../components/ms-form/ms-form.md'));
                    });
                }
            }, {
                key: 'component-api-menu-menu',
                title: 'Menu',
                uri: '/menu',
                location: function (resolve) {
                    require.ensure([], function () {
                        resolve(require('../components/ms-menu/ms-menu.md'));
                    });
                }
            }, {
                key: 'component-api-table-table',
                title: 'Table',
                uri: '/table',
                location: function (resolve) {
                    require.ensure([], function () {
                        resolve(require('../components/ms-table/ms-table.md'));
                    });
                }
            }, {
                key: 'component-api-pagination-pagination',
                title: 'Pagination',
                uri: '/pagination',
                location: function (resolve) {
                    require.ensure([], function () {
                        resolve(require('../components/ms-pagination/ms-pagination.md'));
                    });
                }
            }, {
                key: 'component-api-tree-tree',
                title: 'Tree',
                uri: '/tree',
                location: function (resolve) {
                    require.ensure([], function () {
                        resolve(require('../components/ms-tree/ms-tree.md'));
                    });
                }
            }, {
                key: 'component-api-dialog-dialog',
                title: 'Dialog',
                uri: '/dialog',
                location: function (resolve) {
                    require.ensure([], function () {
                        resolve(require('../components/ms-dialog/ms-dialog.md'));
                    });
                }
            }, {
                key: 'component-api-loading-loading',
                title: 'Loading',
                uri: '/loading',
                location: function (resolve) {
                    require.ensure([], function () {
                        resolve(require('../components/ms-loading/ms-loading.md'));
                    });
                }
            }, {
                key: 'component-api-message-message',
                title: 'Message',
                uri: '/message',
                location: function (resolve) {
                    require.ensure([], function () {
                        resolve(require('../components/ms-message/ms-message.md'));
                    });
                }
            }, {
                key: 'component-api-notification-notification',
                title: 'Notification',
                uri: '/notification',
                location: function (resolve) {
                    require.ensure([], function () {
                        resolve(require('../components/ms-notification/ms-notification.md'));
                    });
                }
            }]
        }]
    }, {
        key: 'component-resource',
        title: 'Resource',
        uri: '/Resource',
        location: function (resolve) {
            require.ensure([], function () {
                resolve(require('./components/doc-menu/doc-resource.md'));
            });
        }
    }]
}

// [{
//     key: 'zh-cn',
//     title: 'zh-cn',
//     children: [{
//         key: 'component-page-guide',
//         title: '指南',
//         uri: '/guide',
//         location: function (resolve) {
//             require.ensure([], function () {
//                 resolve(require('./components/doc-menu/doc-guide.md'));
//             });
//         }
//     }, {
//         key: 'component-page-component',
//         title: '组件',
//         children:[{
//             key: 'component-api-README',
//             title: '主页',
//             uri: '/',
//             location: function (resolve) {
//                 require.ensure([], function () {
//                     resolve(require('../README.md?noEval=true'));
//                 });
//             }
//         }, {
//             key: 'component-api-CHANGELOG',
//             title: '升级日志',
//             uri: '/changelog',
//             location: function (resolve) {
//                 require.ensure([], function () {
//                     resolve(require('../CHANGELOG.md'));
//                 });
//             }
//         }, {
//             key: 'components',
//             title: '组件',
//             children: [{
//                 key: 'component-api-input-input',
//                 title: 'input 输入框',
//                 uri: '/input',
//                 location: function (resolve) {
//                     require.ensure([], function () {
//                         resolve(require('../components/ms-input/ms-input.md'));
//                     });
//                 }
//             }, {
//                 key: 'component-api-textarea-textarea',
//                 title: 'textarea 多行输入框',
//                 uri: '/textarea',
//                 location: function (resolve) {
//                     require.ensure([], function () {
//                         resolve(require('../components/ms-textarea/ms-textarea.md'));
//                     });
//                 }
//             }, {
//                 key: 'component-api-select-select',
//                 title: 'select 选择框',
//                 uri: '/select',
//                 location: function (resolve) {
//                     require.ensure([], function () {
//                         resolve(require('../components/ms-select/ms-select.md'));
//                     });
//                 }
//             }, {
//                 key: 'component-api-radio-radio',
//                 title: 'radio 单选框',
//                 uri: '/radio',
//                 location: function (resolve) {
//                     require.ensure([], function () {
//                         resolve(require('../components/ms-radio/ms-radio.md'));
//                     });
//                 }
//             }, {
//                 key: 'component-api-checkbox-checkbox',
//                 title: 'checkbox 多选框',
//                 uri: '/checkbox',
//                 location: function (resolve) {
//                     require.ensure([], function () {
//                         resolve(require('../components/ms-checkbox/ms-checkbox.md'));
//                     });
//                 }
//             }, {
//                 key: 'component-api-datepicker-datepicker',
//                 title: 'datepicker 日期选择器',
//                 uri: '/datepicker',
//                 location: function (resolve) {
//                     require.ensure([], function () {
//                         resolve(require('../components/ms-datepicker/ms-datepicker.md'));
//                     });
//                 }
//             }, {
//                 key: 'component-api-timepicker-timepicker',
//                 title: 'timepicker 时间选择器',
//                 uri: '/timepicker',
//                 location: function (resolve) {
//                     require.ensure([], function () {
//                         resolve(require('../components/ms-timepicker/ms-timepicker.md'));
//                     });
//                 }
//             }, {
//                 key: 'component-api-upload-upload',
//                 title: 'upload 文件上传',
//                 uri: '/upload',
//                 location: function (resolve) {
//                     require.ensure([], function () {
//                         resolve(require('../components/ms-upload/ms-upload.md'));
//                     });
//                 }
//             }, {
//                 key: 'component-api-tree-select-tree-select',
//                 title: 'tree-select 树选择',
//                 uri: '/tree-select',
//                 location: function (resolve) {
//                     require.ensure([], function () {
//                         resolve(require('../components/ms-tree-select/ms-tree-select.md'));
//                     });
//                 }
//             }, {
//                 key: 'component-api-form-control',
//                 title: 'form-control 表单控件',
//                 uri: '/form-control',
//                 location: function (resolve) {
//                     require.ensure([], function () {
//                         resolve(require('../components/ms-form/ms-control.md'));
//                     });
//                 }
//             }, {
//                 key: 'component-api-form-form',
//                 title: 'form 表单',
//                 uri: '/form',
//                 location: function (resolve) {
//                     require.ensure([], function () {
//                         resolve(require('../components/ms-form/ms-form.md'));
//                     });
//                 }
//             }, {
//                 key: 'component-api-menu-menu',
//                 title: 'menu 菜单',
//                 uri: '/menu',
//                 location: function (resolve) {
//                     require.ensure([], function () {
//                         resolve(require('../components/ms-menu/ms-menu.md'));
//                     });
//                 }
//             }, {
//                 key: 'component-api-table-table',
//                 title: 'table 数据表格',
//                 uri: '/table',
//                 location: function (resolve) {
//                     require.ensure([], function () {
//                         resolve(require('../components/ms-table/ms-table.md'));
//                     });
//                 }
//             }, {
//                 key: 'component-api-pagination-pagination',
//                 title: 'pagination 分页',
//                 uri: '/pagination',
//                 location: function (resolve) {
//                     require.ensure([], function () {
//                         resolve(require('../components/ms-pagination/ms-pagination.md'));
//                     });
//                 }
//             }, {
//                 key: 'component-api-tree-tree',
//                 title: 'tree 树',
//                 uri: '/tree',
//                 location: function (resolve) {
//                     require.ensure([], function () {
//                         resolve(require('../components/ms-tree/ms-tree.md'));
//                     });
//                 }
//             }, {
//                 key: 'component-api-dialog-dialog',
//                 title: 'dialog 对话框',
//                 uri: '/dialog',
//                 location: function (resolve) {
//                     require.ensure([], function () {
//                         resolve(require('../components/ms-dialog/ms-dialog.md'));
//                     });
//                 }
//             }, {
//                 key: 'component-api-loading-loading',
//                 title: 'loading 加载中蒙版',
//                 uri: '/loading',
//                 location: function (resolve) {
//                     require.ensure([], function () {
//                         resolve(require('../components/ms-loading/ms-loading.md'));
//                     });
//                 }
//             }, {
//                 key: 'component-api-message-message',
//                 title: 'message 全局提示',
//                 uri: '/message',
//                 location: function (resolve) {
//                     require.ensure([], function () {
//                         resolve(require('../components/ms-message/ms-message.md'));
//                     });
//                 }
//             }, {
//                 key: 'component-api-notification-notification',
//                 title: 'notification 通知提醒框',
//                 uri: '/notification',
//                 location: function (resolve) {
//                     require.ensure([], function () {
//                         resolve(require('../components/ms-notification/ms-notification.md'));
//                     });
//                 }
//             }]
//         }]
//     }, {
//         key: 'component-page-resource',
//         title: '资源',
//         uri: '/resource',
//         location: function (resolve) {
//             require.ensure([], function () {
//                 resolve(require('./components/doc-menu/doc-resource.md'));
//             });
//         }
//     }]
// }
// // ,{
// //     key: 'en-US',
// //     title: 'en-US',
// //     children: [{
// //         key: 'component-page-guide',
// //         title: 'Guide',
// //         uri: '/guide',
// //         location: function (resolve) {
// //             require.ensure([], function () {
// //                 resolve(require('./components/doc-menu/doc-guide.md'));
// //             });
// //         }
// //     }]
// // }
// ];