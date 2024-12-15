"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/*

*/

/**
 *
 */
var modify = function modify(nodeList, nodeId, payload) {
  var ancestors = findAncestors(nodeList, nodeId);
  var oldNode = ancestors.pop();
  var node = Object.assign({}, oldNode, payload);
  var originalNode = oldNode;
  var freshNode = node;

  for (var i = ancestors.length - 1; i >= 0; i--) {
    var oldParent = ancestors[i];
    var parent = ancestors[i] = Object.assign({}, oldParent);
    var kids = parent.kids = parent.kids.slice();
    var index = kids.indexOf(oldNode);
    kids[index] = node;
    oldNode = oldParent;
    node = parent;
  }

  return {
    freshRules: node.kids,
    originalNode: originalNode,
    freshNode: freshNode,
    parentNode: ancestors[ancestors.length - 1]
  };
};

var findAncestors = function findAncestors(nodeList, nodeId) {
  var path = [{
    kids: nodeList
  }];
  var indexes = [];
  var level = 0;
  var i = 0;
  var kids = nodeList;

  while (true) {
    var node = kids[i];

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

var _default = modify;
exports["default"] = _default;