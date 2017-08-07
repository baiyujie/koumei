import * as avalon from 'avalon2';

export const name = 'doc-layout';

const layoutComponent = avalon.component('doc-layout', {
    template: `<div class="koumei-doc-layout" :css="@style" :class="@className"><slot /></div>`,
    soleSlot: 'slot',
    defaults: {
        style: {},
        className: ''
    }
});

layoutComponent.extend({
    displayName: 'doc-layout-sider',
    template: `<div class="koumei-doc-layout-sider" :css="@style" :class="@className" :class-1="[@fixed?'koumei-doc-layout-fixed-sider':'']"><div class="koumei-doc-layout-sider-inner"><slot /></div></div>`,
    soleSlot: 'slot',
    defaults: {
        fixed: false,
        width: '300px'
    }
});

layoutComponent.extend({
    displayName: 'doc-layout-header',
    template: `<div class="koumei-doc-layout-header" :css="@style" :class="@className" :class-1="[@fixed?'koumei-doc-layout-fixed-header':'']"><slot /></div>`,
    soleSlot: 'slot',
    defaults: {
        fixed: false,
        width: '65px'
    }
});

layoutComponent.extend({
    displayName: 'doc-layout-content',
    template: `<div class="koumei-doc-layout-content" :css="@style" :class="@className"><slot /></div>`,
    soleSlot: 'slot',
    defaults: {
        fixed: false
    }
});

layoutComponent.extend({
    displayName: 'doc-layout-footer',
    template: `<div class="koumei-doc-layout-footer" :css="@style" :class="@className" :class-1="[@fixed?'koumei-doc-layout-fixed-footer':'']"><slot /></div>`,
    soleSlot: 'slot',
    defaults: {
        fixed: false,
        width: '55px'
    }
});