/*
A tiny alternative to `classnames`, `clsx` and `obj-str`.
*/
const cls = (...args) => {
    const o = [];
    for (const k of args) k && o.push(k);
    return o.join(' ') || null;
};

export default cls;
