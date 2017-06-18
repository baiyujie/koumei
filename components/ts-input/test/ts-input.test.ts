import * as avalon from 'avalon2';
import { createForm } from '../../ts-form/create-form';
import '../../ts-form';
import '../ts-input';

export const name = 'component-demo-input';

avalon.component(name, {
    template: require('./ts-input.test.html'),
    defaults: {
        value: '123',
        json: '',
        $form: createForm(),
        onInit() {
            this.$form.onFieldsChange = (fields, record) => {
                this.json = JSON.stringify(record);
            }
        }
    }
});