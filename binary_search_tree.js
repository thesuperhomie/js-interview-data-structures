/*
 * Possible Questions:
 * Design an algorithm to find a path from one node in a binary tree to another.
 * Given a binary tree, check whether it’s a binary search tree or not.
 * Find the minimum depth of binary search tree
 * Given a binary search tree and a value k, please find a node in the binary search tree whose value is closest to k.
 */

function BinarySearchTree() {
  this.root = null;
}

function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.minDepth = function() {
  const minDepth = function(node) {
    if (!node) {
      return 0;
    }

    if (!node.left && !node.right) {
      return 1;
    }

    if (!node.left) {
      return minDepth(node.right) + 1;
    }

    if (!node.right) {
      return minDepth(node.left) + 1;
    }

    return Math.min(minDepth(node.left), minDepth(node.right)) + 1;
  };
};

BinarySearchTree.prototype.contains = function(value) {
  if (!this.root) {
    return false;
  }

  let currentNode = this.root;

  while (currentNode) {
    if (currentNode.value === value) {
      return true;
    } else if (currentNode.value > value) {
      if (!currentNode.left) {
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if (!currentNode.right) {
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }

  return false;
};

BinarySearchTree.prototype.push = function(value) {
  if (!this.root) {
    this.root = new TreeNode(value);
    return;
  }

  let current = this.root;
  const nodeToAdd = new TreeNode(value);

  while (current) {
    const currentNodeValue = current.value;
    if (currentNodeValue > value) {
      if (!current.left) {
        current.left = nodeToAdd;
        break;
      } else {
        current = current.left;
      }
    } else {
      if (!current.right) {
        current.right = nodeToAdd;
        break;
      } else {
        current = current.right;
      }
    }
  }
};
