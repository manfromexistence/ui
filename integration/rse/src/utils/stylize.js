/*
A quick-and-dirty simulation of JSS.
*/

const PREFIX = 'rse';
const SEPARATOR = '-';
const dashConverter = (match) => '-' + match.toLowerCase();

let registry = {};
let cssCollection = [];
let style = document.createElement('style');
let count = 0;

/**
 *
 */
const stylize = (name, classes) => {
    const output = {};
    const css = collect(name, classes, output);
    const index = registry[name];
    if (index === undefined) {
        registry[name] = cssCollection.push(css) - 1;
    } else {
        cssCollection[index] = css;
    }
    return output;
};

/**
 *
 */
const collect = (name, classes, accumulator = {}) => {
    let css = '';
    for (const selector in classes) {
        const block = classes[selector];
        const className = PREFIX + SEPARATOR + name + SEPARATOR + selector;
        css += '.' + className + '{\r\n';
        const nested = {};
        for (const property in block) {
            const value = block[property];
            if (property.indexOf('&') >= 0) {
                // this is in fact a nested selector, not a declaration
                const resolved = property.replace(/&/g, selector);
                nested[resolved] = value;
                continue;
            }
            const cssProperty = property.replace(/([A-Z])/g, dashConverter);
            const cssValue = value + (typeof value === 'number' ? 'px' : '');
            css += ' ' + cssProperty + ':' + cssValue + ';\r\n';
        }
        css += '}\r\n';
        if (Object.keys(nested).length) {
            css += collect(name, nested);
        }
        accumulator[selector] = className;
    }
    return css;
};

/**
 *
 */
const prepareStyling = () => {
    count++;
    if (count === 1) {
        // TODO: study impact on hot loading
        style.innerHTML = cssCollection.join('');
        document.head.appendChild(style);
    }
};

/**
 *
 */
const releaseStyling = () => {
    count--;
    if (count === 0) {
        document.head.removeChild(style);
        style.innerHTML = '';
    }
};

export default stylize;
export {prepareStyling, releaseStyling};
