import * as avalon from 'avalon2';
import controlComponent from '../ts-form/ts-control';
import { emitToFormItem } from '../ts-form/utils';
import { findParentComponent } from '../../koumei-util';

controlComponent.extend({
    displayName: 'ts-input',
    template: require('./ts-input.html'),
    defaults: {
        text: '',
        mapValueToText(value) {
            this.text = value;
        },
        onInit: function (event) {
            emitToFormItem(this);
            this.$watch('value', v => {
                this.mapValueToText(v);
                this.handleChange({
                    target: { value: v },
                    denyValidate: true,
                    type: 'changed'
                });
            });
            this.mapValueToText(this.value);
        }
    }
});