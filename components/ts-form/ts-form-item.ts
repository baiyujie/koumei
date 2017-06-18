import * as avalon from 'avalon2';
import { findParentComponent } from '../../koumei-util';

/**
 * 表单项组件
 * @prop label 表单项标签
 * 
 * @example
 * ``` html
 * <ts-form-item :widget="{label: '标题'}">
        <ts-input :widget="{value: @title, col: 'title'}"></ts-input>
    </ts-form-item>
 * ```
 */
avalon.component('ts-form-item', {
    template: require('./ts-form-item.html'),
    defaults: {
        $formVm: null,
        label: '',
        control: '',
        inline: false,
        dirty: false,
        reasons: [],
        hasRules: false,
        showIcon: true,
        className: '',
        inlineFormGroupStyle: { verticalAlign: 'top' },
        inlineMessageStyle: { marginBottom: 0 },
        onFieldChange(descriptor) {
            this.$formVm.type !== 'search' && this.$formVm.$form.setFieldsValue({
                [descriptor.name]: { value: descriptor.value, denyValidate: descriptor.denyValidate }
            });
            if (!descriptor.rules) return ;
            if (descriptor.showIcon === false) {
                this.showIcon = false;
            }
            delete descriptor.showIcon;
            this.hasRules = true;
            this.$formVm.$form.addFields({
                [descriptor.name]: { rules: descriptor.rules }
            });
            this.$formVm.$form.on('error' + descriptor.name, (reasons) => {
                this.dirty = true;
                this.reasons = reasons;
            });
            this.$formVm.$form.on('reset', fields => {
                if (~Object.keys(fields).indexOf(descriptor.name)) {
                    this.dirty = false;
                    this.reasons = [];
                }
            });
        },
        onFormChange(meta) {
            if (this.$formVm.$form.autoAsyncChange) {
                this.dirty = true;
            }
            this.$formVm.onFormChange(meta);
        },
        onInit(event) {
            event.target._ctype_ = 'ts-form-item';
            event.target._vm_ = this;
            this.$formVm = findParentComponent(this, 'ts-form');
            if (this.$formVm === null) {
                throw 'ts-form-item 必须放在 ts-form 内';
            }
            this.inline = this.$formVm.inline;
        },
        onReady(event) {
        }
    },
    soleSlot: 'control'
});