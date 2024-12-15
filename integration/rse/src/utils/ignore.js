/*

*/

import modify from './modify.js';
import stringify from './stringify.js';
import {ATRULE, DECLARATION, RULE, COMMENT, SLASH_SUBSTITUTE} from './COMMON.js';

/**
 *
 */
const ignore = (oldRules, id) => {
    const {freshRules, freshNode} = modify(oldRules, id, {}); // blank change to get the `freshNode`
    const content = stringifyAndHandleComments([freshNode]);
    for (const key in freshNode) {
        delete freshNode[key];
    }
    Object.assign(freshNode, {
        type: COMMENT,
        prefix: '',
        hasSlashEnd: true,
        content: content,
    });
    return stringify(freshRules);
};

/**
 *
 */
const stringifyAndHandleComments = (kids) => {
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
                accumulator.push(handleInlineComments(item.selector) + (item.hasBraceBegin ? '{' : ''));
                if (item.kids && item.kids.length) {
                    flatten(item.kids, accumulator);
                }
                accumulator.push((item.hasBraceEnd ? '}' : '') + (item.hasSemicolon ? ';' : ''));
                break;
            case DECLARATION:
                accumulator.push(
                    handleInlineComments(item.property) +
                        (item.hasColon ? ':' : '') +
                        handleInlineComments(item.value) +
                        (item.hasSemicolon ? ';' : '')
                );
                break;
            case COMMENT:
                accumulator.push(
                    item.prefix +
                        SLASH_SUBSTITUTE +
                        '*' +
                        item.content +
                        (item.hasSlashEnd ? '*' + SLASH_SUBSTITUTE : '')
                );
                break;
            default:
            // nothing
        }
    }
    return accumulator;
};

/**
 *
 */
const handleInlineComments = (blob) => {
    return blob
        .split('/*')
        .join(SLASH_SUBSTITUTE + '*')
        .split('*/')
        .join('*' + SLASH_SUBSTITUTE);
};

export default ignore;
