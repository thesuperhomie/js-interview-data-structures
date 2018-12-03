// Given 2 identical DOM trees (but not equal) and one element of the first DOM tree,
// how would you find this element in the second DOM tree?
/*
<div id="root1">
<div>
  <div></div>
</div>
<div>
  <div id="node1"></div>
  <div></div>
</div>
</div>

<div id="root2">
<div>
  <div></div>
</div>
<div>
  <div id="node2"></div>
  <div></div>
</div>
</div>
*/

const getPath = (root, node) => {
  const path = [];
  let curElement = node;

  while (curElement !== root && curElement && curElement.parentNode) {
    const index = Array.from(curElement.parentNode.childNodes).indexOf(
      curElement
    );
    path.push(index);
    curElement = curElement.parentNode;
  }

  return path;
};

const getNodeByPath = (root, originalPath) => {
  const path = [].concat(originalPath);
  let element = root;
  while (path.length) {
    element = Array.from(element.childNodes)[path.pop()];
  }
  return element;
};

const getSymmetricNode = (root1, root2, node) => {
  const path = getPath(root1, node);
  return getNodeByPath(root2, path);
};
