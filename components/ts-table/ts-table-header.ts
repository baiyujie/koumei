import * as avalon from 'avalon2';

avalon.component('ts-table-header', {
    template: '<th><slot /></th>',
    soleSlot: 'content',
    defaults: {
        content: '',
        col: ''
    }
});