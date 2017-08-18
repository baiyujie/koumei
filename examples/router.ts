import * as avalon from 'avalon2';
import 'mmRouter';
import { menu as menuStore } from './stores';
import * as navConfig from './nav.config.js';

var bootbox = require('bootbox');

function getPage(component) {
    const html = `<xmp is="${component}" :widget="{id:'${component.replace(/\-/g, '_')}'}"></xmp>`;
    return html
}

function applyRouteConfig(config, parentRoute, accPath = '') {
    config.map(function (route) {
        let components:any = {};
        if (route.component) {
            components.currentPage = route.component;
        }
        if (route.components) {// 没有对应属性
            components = route.components;
        }
        // 20170818:增加国际化标识传惨/:locale
        avalon.router.add(accPath + route.path+'/:locale', function () {
            console.log(this);
            Object.keys(components).map(viewName => {
                let component = components[viewName];
                if (typeof component === 'function') {
                    component(function (m) {
                        menuStore.selectedKeys$.onNext([m.name]);
                        avalon.vmodels[parentRoute.name][viewName] = getPage(m.name);
                    });
                } else {
                    avalon.vmodels[parentRoute.name][viewName] = getPage(component.name);
                }
            });
        });
        // TODO 支持嵌套路由
        //route.children && applyRouteConfig(route.children, route, accPath + route.path);
    });
}

const routeConfig = [];
const locale = avalon.vmodels.root.locale || 'zh-CN';
// 递归菜单的子元素赋值,routeConfig
const travel = item => {
    if (!item.children || item.children.length === 0) {
        routeConfig.push({
            path: item.uri,
            component: item.location
        });
    } else {
        item.children.map(travel);
    }
};
navConfig[locale].map(travel);

applyRouteConfig(routeConfig, {
    name: 'root'
});