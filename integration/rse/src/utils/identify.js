/*
Adds an unique identifier to each node (`id`).
*/

import {ATRULE, COMMENT, DECLARATION, RULE} from './COMMON.js';

const MAX_CHARS = 32; // how many characters to use as identifier. Protects against giant base64.

/**
 *
 */
const identify = (list, usedIds = {}) => {
    for (const item of list) {
        let id;
        switch (item.type) {
            case ATRULE:
            case RULE:
                id = item.selector.trim() + (item.hasBraceBegin ? '{' : '') + (item.hasSemicolon ? ';' : '');
                break;
            case DECLARATION:
                id =
                    item.property.trim() +
                    (item.hasColon ? ':' : '') +
                    item.value.substr(0, MAX_CHARS) +
                    (item.hasSemicolon ? ';' : '');
                break;
            case COMMENT:
                id = '/*' + item.content.substr(0, MAX_CHARS) + '*/';
                break;
            default:
            // nothing
        }
        if (id in usedIds) {
            usedIds[id]++;
            item.id = id + usedIds[id];
        } else {
            usedIds[id] = 1;
            item.id = id;
        }
        if (item.kids && item.kids.length) {
            identify(item.kids, usedIds);
        }
    }
};

export default identify;
