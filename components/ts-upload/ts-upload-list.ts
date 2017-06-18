import * as avalon from 'avalon2';

avalon.component('ts-upload-list', {
    template: require('./ts-upload-list.html'),
    defaults: {
        fileList: [],
        getTextClass(file) {
            switch (file.status) {
                case 'done': return 'text-primary';
                case 'uploading': return 'text-muted';
                case 'error': return 'text-danger';
            }
            return '';
        },
        onRemove: avalon.noop,
        del(file) {
            this.onRemove(file);
        }
    }
});