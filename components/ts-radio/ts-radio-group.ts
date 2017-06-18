import * as avalon from 'avalon2';
import controlComponent from '../ts-form/ts-control';
import { emitToFormItem } from '../ts-form/utils';
import { findParentComponent } from '../../koumei-util';
import './ts-radio';

controlComponent.extend({
    displayName: 'ts-radio-group',
    template: require('./ts-radio-group.html'),
    defaults: {
        value: '',
        disabled: false,
        options: [],
        selected: '',
        toggleOption(e, option) {
            this.selected = option.value;
            this.handleChange({
                target: { value: this.selected },
                type: 'radio-group'
            });
        },
        helpId: '',
        mapValueToSelected(value) {
            this.selected = value;
        },
        onInit(event) {
            this.helpId = this.$id;
            emitToFormItem(this);
            this.$watch('value', v => {
                this.mapValueToSelected(v);
                this.handleChange({
                    target: { value: v },
                    denyValidate: true,
                    type: 'radio-group'
                });
            });
            this.mapValueToSelected(this.value);
        },
        onReady(event) {
        },
        onDispose(event) {
        }
    }
});