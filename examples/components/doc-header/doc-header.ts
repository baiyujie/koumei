import './doc-header.less';
import * as avalon from 'avalon2';
import 'koumei';
import * as navConfig from '../../nav.config.js';

export const name = 'doc-header';

avalon.component(name, {
    template: require('./doc-header.html'),
    defaults: {
        menu: [],
        navConfig:[],
        locale:'',
        tabIndex: avalon.noop,
        selectedKeys: ['component-api'],
        onClick: avalon.noop,
        onInit(event) {
            this.navConfig = navConfig;
            this.locale = avalon.vmodels.root.locale || 'zh-CN';

            this.loadMenu();
            this.$watch('locale', v => {
                this.loadMenu();
            });
        },
        loadMenu() {
            this.menu = this.navConfig[this.locale];
        },
        handleClick(item,key,keyPath,index) {
            this.selectedKeys = [item.key];
            this.tabIndex =  avalon.vmodels.root.tabIndex = index;
            if (index == 2) { // 如果选项是资源隐藏左侧菜单
                avalon.vmodels.root.hideMenu = false;
            }else{
                avalon.vmodels.root.hideMenu = true;
            }
            avalon.history.setHash(item.uri + "/" + this.locale);
        },
        localClick(_locale) {
            this.locale = avalon.vmodels.root.locale = _locale;
        }
    }
});