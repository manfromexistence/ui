/*

*/

import {ATRULE, COMMENT, DECLARATION, RULE} from './COMMON.js';

/**
 *
 */
const stringify = (kids) => {
    return flatten(kids).join('');
};

/**
 *
 */
const flatten = (kids, accumulator = []) => {
    for (const item of kids) {
        switch (item.type) {
            case ATRULE:
            case RULE:
                accumulator.push(item.selector + (item.hasBraceBegin ? '{' : ''));
                if (item.kids && item.kids.length) {
                    flatten(item.kids, accumulator);
                }
                accumulator.push((item.hasBraceEnd ? '}' : '') + (item.hasSemicolon ? ';' : ''));
                break;
            case DECLARATION:
                accumulator.push(
                    item.property + (item.hasColon ? ':' : '') + item.value + (item.hasSemicolon ? ';' : '')
                );
                break;
            case COMMENT:
                accumulator.push(item.prefix + '/*' + item.content + (item.hasSlashEnd ? '*/' : ''));
                break;
            default:
            // nothing
        }
    }
    return accumulator;
};

export default stringify;
