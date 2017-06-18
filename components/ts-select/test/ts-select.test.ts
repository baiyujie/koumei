import * as avalon from 'avalon2';
import { createForm } from '../../ts-form/create-form';
import '../../ts-form';
import '../';

export const name = 'component-demo-select';

avalon.component(name, {
    template: require('./ts-select.test.html'),
    defaults: {
        json: '',
        $form: createForm(),
        onInit() {
            this.$form.onFieldsChange = (fields, record) => {
                this.json = JSON.stringify(record);
            }
        }
    }
});