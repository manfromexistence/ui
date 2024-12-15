/**
 *
 */
import {ATRULE, COMMENT} from './COMMON';

let sheet;
const BASE64_TEMP = ';base64,0';
const base64Pattern = /;base64,[a-zA-Z/0-9+=]*/g;

/**
 *
 */
const validate = (list) => {
    sheet = sheet || createPlayground(); // lazy initialization
    validateRules(list, '', '', '');
    return list;
};

/**
 *
 */
const validateRules = (list, parentPrefix, parentSuffix, parentFingerprint) => {
    for (const rule of list) {
        if (rule.type === COMMENT) {
            continue;
        }
        const adaptedSelector = rule.selector.split('&').join('#x'); // act as if `&` is valid
        const rulePrefix = parentPrefix + adaptedSelector + (rule.hasBraceBegin ? '{' : '');
        const ruleSuffix = (rule.hasBraceEnd ? '}' : '') + (rule.hasSemicolon ? ';' : '') + parentSuffix;
        const fingerprint = inAndOut(rulePrefix + ruleSuffix);
        if (fingerprint !== parentFingerprint) {
            // the browser accepted our rule
            rule.isValid = true;
            if (rule.kids.length) {
                if (rule.type === ATRULE) {
                    validateRules(rule.kids, rulePrefix, ruleSuffix, fingerprint);
                } else {
                    // RULE
                    validateDeclarations(rule.kids, rulePrefix, ruleSuffix, fingerprint);
                }
            }
        } else {
            rule.isValid = false;
            if (rule.kids.length) {
                invalidateChildren(rule.kids);
            }
        }
    }
};

/**
 *
 */
const validateDeclarations = (list, parentPrefix, parentSuffix, parentFingerprint) => {
    let fingerprint = parentFingerprint;
    let block = '';
    for (let i = list.length - 1; i >= 0; i--) {
        // we traverse backwards to detect overruled declarations
        const declaration = list[i];
        if (declaration.type === COMMENT) {
            continue;
        }
        block = (declaration.hasSemicolon ? ';' : '') + block;
        const safeDeclarationValue = declaration.value.replace(base64Pattern, BASE64_TEMP);
        block = declaration.property + (declaration.hasColon ? ':' : '') + safeDeclarationValue + block;
        const freshFingerprint = inAndOut(parentPrefix + block + parentSuffix);
        if (fingerprint !== freshFingerprint) {
            // the browser accepted our declaration
            declaration.isValid = true;
            fingerprint = freshFingerprint;
        } else {
            declaration.isValid = false;
        }
    }
};

/**
 *
 */
const invalidateChildren = (list) => {
    for (const item of list) {
        if (item.type === COMMENT) {
            continue;
        }
        item.isValid = false;
        const kids = item.kids;
        if (kids && kids.length) {
            invalidateChildren(kids);
        }
    }
};

/**
 *
 */
const inAndOut = (blob) => {
    let index;
    try {
        index = sheet.insertRule(blob);
    } catch (e) {
        // console.log(e);
    }
    if (index >= 0) {
        const fingerprint = sheet.cssRules[index].cssText;
        sheet.deleteRule(index);
        return fingerprint;
    }
    return '';
};

/**
 *
 * Note: DocumentFragment doesn't work because it doesn't compute styles.
 */
const createPlayground = () => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.head.appendChild(iframe);
    const iframeDocument = iframe.contentWindow.document;
    const style = iframeDocument.createElement('style');
    iframeDocument.head.appendChild(style);

    // Important: Since Chrome 80 (or so), we need to remove the iframe AFTER we added the style.
    document.head.removeChild(iframe);

    return style.sheet;
};

/**
 *
 */
const destroyPlayground = () => {
    sheet = null;
};

export default validate;
export {destroyPlayground};
