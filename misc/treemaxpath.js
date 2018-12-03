/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 
 * The maximum sum path can contain at most one left and one right subtrees.
 * At each node we find the max sum path of each subtree.
 * We update the answer with the combination of the current node value and child max sum paths.
 * We return the greatest of the value of the node itself, the node plus its left max sum path, 
 * or the node plus its right max sum path.
 */
var maxPathSum = function(root) {
  if (!root) {
    return 0;
  }
  let max = Number.NEGATIVE_INFINITY;
  const traverse = node => {
    if (!node) {
      return 0;
    }
    const left = traverse(node.left);
    const right = traverse(node.right);
    let sum = node.val;
    sum += left > 0 ? left : 0;
    sum += right > 0 ? right : 0;
    if (sum > max) {
      max = sum;
    }

    return node.val + Math.max(left, right, 0);
  };
  traverse(root);
  return max;
};
