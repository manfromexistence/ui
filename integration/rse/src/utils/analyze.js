import parse from './parse.js';
import validate from './validate.js';
import identify from './identify.js';

/**
 *
 */
const analyze = (css) => {
    const rules = parse(css);
    validate(rules);
    identify(rules);
    return rules;
};

export default analyze;
