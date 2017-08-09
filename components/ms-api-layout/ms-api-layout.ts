import * as avalon from 'avalon2';

const layoutComponent = avalon.component('ms-api-layout', {
    template: `<div class="koumei-api-layout" :css="@style" :class="@className"><slot /></div>`,
    soleSlot: 'slot',
    defaults: {
        style: {},
        className: ''
    }
});

layoutComponent.extend({
    displayName: 'ms-api-layout-sider',
    template: `<div class="koumei-api-layout-sider" :css="@style" :class="@className" :class-1="[@fixed?'koumei-api-layout-fixed-sider':'']"><div class="koumei-api-layout-sider-inner"><slot /></div></div>`,
    soleSlot: 'slot',
    defaults: {
        fixed: false,
        width: '300px'
    }
});

layoutComponent.extend({
    displayName: 'ms-api-layout-header',
    template: `<div class="koumei-api-layout-header" :css="@style" :class="@className" :class-1="[@fixed?'koumei-api-layout-fixed-header':'']"><slot /></div>`,
    soleSlot: 'slot',
    defaults: {
        fixed: false,
        width: '65px'
    }
});

layoutComponent.extend({
    displayName: 'ms-api-layout-content',
    template: `<div class="koumei-api-layout-content" :css="@style" :class="@className"><slot /></div>`,
    soleSlot: 'slot',
    defaults: {
        fixed: false
    }
});

layoutComponent.extend({
    displayName: 'ms-api-layout-footer',
    template: `<div class="koumei-api-layout-footer" :css="@style" :class="@className" :class-1="[@fixed?'koumei-api-layout-fixed-footer':'']"><slot /></div>`,
    soleSlot: 'slot',
    defaults: {
        fixed: false,
        width: '55px'
    }
});