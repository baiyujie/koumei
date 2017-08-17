import defaultLang from 'koumei/src/locale/lang/zh-CN';
import * as avalon from 'avalon2';
import deepmerge from 'deepmerge';
import Format from './format';

const format = Format(avalon);
let lang = defaultLang;
let merged = false;

export const t = function(path, options) {

  const array = path.split('.');
  let current = lang;

  for (let i = 0, j = array.length; i < j; i++) {
    const property = array[i];
    value = current[property];
    if (i === j - 1) return format(value, options);
    if (!value) return '';
    current = value;
  }
  return '';
};

export const use = function(l) {
  lang = l || lang;
};

export default { use, t };
