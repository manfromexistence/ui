/*

*/

import {RULE, COMMENT, SLASH_SUBSTITUTE} from './COMMON.js';
import modify from './modify.js';
import stringify from './stringify.js';

/**
 *
 */
const unignore = (rules, id) => {
    const {freshRules, freshNode} = modify(rules, id, {}); // blank change to get the `freshNode`
    if (freshNode.type === COMMENT) {
        unignoreComment(freshNode);
    } else {
        unignoreKids(freshNode.kids);
    }
    return stringify(freshRules);
};

/**
 *
 */
const unignoreComment = (node) => {
    const prefix = node.prefix; // backup
    const content = node.content
        .split(SLASH_SUBSTITUTE + '*')
        .join('/*')
        .split('*' + SLASH_SUBSTITUTE)
        .join('*/');
    for (const key in node) {
        delete node[key];
    }
    Object.assign(node, {
        type: RULE, // could also be ATRULE or DECLARATION, because it's just temporary
        selector: prefix + content,
    });
};

/**
 *
 */
const unignoreKids = (kids) => {
    for (const item of kids) {
        if (item.type === COMMENT) {
            unignoreComment(item);
        } else {
            if (item.kids && item.kids.length) {
                unignoreKids(item.kids);
            }
        }
    }
};

export default unignore;
