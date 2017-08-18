import * as avalon from 'avalon2';

import * as navConfig from '../../nav.config.js';
import 'koumei';
import { menu as menuStore } from '../../stores';

export const name = 'doc-sidebar';

avalon.component(name, {
    template: require('./doc-sidebar.html'),
    navConfig: [],
    menuStore: avalon.noop,
    defaults: {
        menu: [],
        selectedKeys: [],
        locale:'',
        openKeys: ['component-api-guide','components-api-basic'],
        handleMenuClick(item, key, keyPath) {
            avalon.history.setHash(item.uri+'/'+this.locale);
        },
        handleOpenChange(openKeys) {
            this.openKeys = openKeys.slice(-1);
        },
        onInit(event) {
            this.navConfig = navConfig;
            this.menuStore = menuStore;
            this.locale = avalon.vmodels.root.locale || 'zh-CN';
            this.loadMenu();
            this.$watch('locale', v => {
                this.loadMenu();
            });
        },
        loadMenu() {
            this.menu = this.navConfig[this.locale][1].children;
            this.menuStore.selectedKeys$.subscribe(v => {
                this.selectedKeys = v;
            });
        }
    }
});