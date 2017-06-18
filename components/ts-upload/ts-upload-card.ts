import * as avalon from 'avalon2';

avalon.component('ts-upload-card', {
    template: require('./ts-upload-card.html'),
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