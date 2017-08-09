import * as avalon from 'avalon2';
import 'koumei';

export const name = 'doc-header';

avalon.component(name, {
    template: require('./doc-header.html'),
    defaults: {
        menu: [],
        selectedKeys: [],
        openKeys: ['components']
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