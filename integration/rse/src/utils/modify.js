/*

*/

/**
 *
 */
const modify = (nodeList, nodeId, payload) => {
    const ancestors = findAncestors(nodeList, nodeId);
    let oldNode = ancestors.pop();
    let node = Object.assign({}, oldNode, payload);
    const originalNode = oldNode;
    const freshNode = node;
    for (let i = ancestors.length - 1; i >= 0; i--) {
        const oldParent = ancestors[i];
        const parent = (ancestors[i] = Object.assign({}, oldParent));
        const kids = (parent.kids = parent.kids.slice());
        const index = kids.indexOf(oldNode);
        kids[index] = node;
        oldNode = oldParent;
        node = parent;
    }
    return {
        freshRules: node.kids,
        originalNode,
        freshNode,
        parentNode: ancestors[ancestors.length - 1],
    };
};

const findAncestors = (nodeList, nodeId) => {
    const path = [{kids: nodeList}];
    const indexes = [];
    let level = 0;
    let i = 0;
    let kids = nodeList;
    while (true) {
        const node = kids[i];
        if (!node) {
            level--;
            path.pop();
            if (level < 0) {
                break;
            }
            i = indexes[level] + 1;
            kids = path[level].kids;
        } else {
            if (node.id === nodeId) {
                path.push(node);
                return path;
            }
            if (node.kids) {
                path.push(node);
                indexes[level] = i;
                level++;
                i = 0;
                kids = node.kids;
            } else {
                i++;
            }
        }
    }
    return null;
};

export default modify;
