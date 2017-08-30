import './doc-sidenav.less';
import * as avalon from 'avalon2';

avalon.component('doc-sidenav', {
    template: require('./doc-sidenav.html'),
    defaults: {
        isSmallScreen:false,
        navStyle() {
            return this.isSmallScreen ? { 'padding-bottom': '60px' } : {};
        },
        data: [],

        menu: [],
        selectedKeys: [],
        openKeys: [],
        onClick: avalon.noop,
        onOpenChange: avalon.noop,
        handleClick(item, key, keyPath) {
            if (!item.children || item.children.length === 0) {
                // 叶子节点
                //this.selectedKeys.ensure(item.key);
                this.selectedKeys = [item.key];
                this.onClick(item, key, keyPath);
            } else {
                // 非叶子节点
                if (this.openKeys.contains(item.key)) {
                    this.openKeys.remove(item.key);
                } else {
                    this.openKeys.push(item.key);
                }
                this.onOpenChange(this.openKeys.toJSON());
            }
        }
    }
});