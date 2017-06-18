import * as avalon from 'avalon2';

avalon.component('ts-select-option', {
    template: '&nbsp;',
    soleSlot: 'label',
    defaults: {
        label: '',
        value: '',
        disabled: false
    }
});