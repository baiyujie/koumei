import * as avalon from 'avalon2';
import 'koumei';

import './doc-menu.less';

import { menu as menuStore } from '../../stores';
import * as navConfig from '../../nav.config.js';
export const name = 'doc-menu';

avalon.component(name, {
    template: require('./doc-menu.html'),
    defaults: {
        menu: [],
        selectedKeys: ['component-demo-menu-component'],
        openKeys: ['components'],
        onClick: avalon.noop,
        onInit(event) {
            this.menu = navConfig['zh-CN'];
            menuStore.selectedKeys$.subscribe(v => {
                this.selectedKeys = v;
            });
        },
        handleClick(item,key,keyPath) {
            if (!item.children || item.children.length === 0) {
                this.selectedKeys = [item.key];
                this.onClick(item, key, keyPath);
            }
        }
        
        // ,
        // handleMenuClick(item, key, keyPath) {
        //     avalon.history.setHash(item.uri);
        // },
        // handleOpenChange(openKeys) {
        //     this.openKeys = openKeys.slice(-1);
        // },
        // onInit(event) {
        //     this.menu = navConfig;
        //     menuStore.selectedKeys$.subscribe(v => {
        //         this.selectedKeys = v;
        //     });
        // }
    }
});