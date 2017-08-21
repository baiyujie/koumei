import * as avalon from 'avalon2';
import 'koumei';
// import { menu as menuStore } from '../../stores';
import * as navConfig from '../../nav.config.js';

export const name = 'doc-header';

avalon.component(name, {
    template: require('./doc-header.html'),
    defaults: {
        menu: [],
        navConfig:[],
        locale:'',
        selectedKeys: ['component-api'],
        onClick: avalon.noop,
        onInit(event) {
            this.navConfig = navConfig;
            // this.menuStore = menuStore;
            this.locale = avalon.vmodels.root.locale || 'zh-CN';

            this.loadMenu();
            this.$watch('locale', v => {
                this.loadMenu();
            });
        },
        loadMenu() {
            this.menu = this.navConfig[this.locale];
            // this.menuStore.selectedKeys$.subscribe(v => {
            //     this.selectedKeys = v;
            // });
        },
        handleClick(item,key,keyPath) {
            // if (!item.children || item.children.length === 0) {
                this.selectedKeys = [item.key];
                // this.onClick(item, key, keyPath);
                
                avalon.history.setHash(item.uri);
            // }
        },
        localClick(_locale) {
            this.locale = avalon.vmodels.root.locale = _locale;
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