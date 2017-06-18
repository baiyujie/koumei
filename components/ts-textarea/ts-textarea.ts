import * as avalon from 'avalon2';
import controlComponent from '../ts-form/ts-control';
import { emitToFormItem } from '../ts-form/utils';
import { findParentComponent } from '../../koumei-util';

/**
 * 多行文本输入组件
 * @prop value 组件值(inherit)
 * @prop col 字段路径(inherit)
 * @prop rows 文本框行数
 * 
 * @example
 * ``` html
 * <ts-textarea :widget="{value: @bio, col: 'bio', rows: 3}"></ts-textarea>
 * ```
 */
controlComponent.extend({
    displayName: 'ts-textarea',
    template: require('./ts-textarea.html'),
    defaults: {
        rows: '',
        text: '',
        mapValueToText(value) {
            this.text = value;
        },
        onInit(event) {
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