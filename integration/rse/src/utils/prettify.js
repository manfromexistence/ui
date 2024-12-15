/*

*/

import {ATRULE, COMMENT, DECLARATION, RULE} from './COMMON';
import clean from './clean';

/**
 *
 */
const prettify = (kids) => {
    return flatten(kids).join('');
};

/**
 *
 */
const flatten = (kids, accumulator = [], indent = '') => {
    for (const item of kids) {
        switch (item.type) {
            case ATRULE:
            case RULE:
                const {type, kids, selector, hasBraceBegin, hasBraceEnd, hasSemicolon} = item;
                if (!kids.length && !selector.trim() && !hasBraceBegin && !hasBraceEnd && !hasSemicolon) {
                    continue;
                }
                accumulator.push(indent + clean(selector) + ' {\r\n');
                if (kids && kids.length) {
                    flatten(kids, accumulator, indent + '    ');
                }
                if (type === ATRULE && !hasBraceBegin) {
                    accumulator.push(';\r\n');
                } else {
                    accumulator.push(indent + '}\r\n');
                }
                break;
            case DECLARATION:
                if (!item.hasColon && !item.property.trim()) {
                    continue;
                }
                accumulator.push(indent + clean(item.property) + ': ' + clean(item.value) + ';\r\n');
                break;
            case COMMENT:
                accumulator.push(indent + '/*' + item.content + '*/\r\n');
                break;
            default:
            // nothing
        }
    }
    return accumulator;
};

export default prettify;
