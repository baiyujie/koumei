require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('highlight.js/styles/atom-one-light.css');

require('es5-shim');
require('es6-promise/dist/es6-promise.auto');

var locale = 'zh-CN';

var jQuery = require('jquery');
window.$ = window.jQuery = jQuery;
require('bootstrap');
var bootbox = require('bootbox');
bootbox.setLocale(locale);

// 提前禁止avalon对Object.create的实现
if (!Object.create) {
    Object.create = function () {
        function F() {}

        return function (o) {
            F.prototype = o;
            return new F();
        };
    }();
}

var avalon = require('avalon2');
avalon.config({
    debug: true
});
// ie <= 8  defineProperty的方法补充
if (avalon.msie <= 8) {
    Object.defineProperty = function (obj, property, meta) {
        obj[property] = meta.value;
    }
}
avalon.define({
    $id: 'root',
    locale:locale,
    tabIndex:1,
    hideMenu:true,
    currentPage: '',
    breadcrumb: []
});

require('es5-shim/es5-sham');
require('./router');
require('../components/ms-layout');
require('./components/doc-sidebar/doc-sidebar');
require('./components/doc-header/doc-header');

avalon.history.start({
    fireAnchor: false
});
if (!/#!/.test(global.location.hash)) {
    avalon.router.navigate('/installation/'+locale, 2);
}
avalon.scan(document.body);