// DFS on HTML nodes
function DFS_on_html_nodes(node) {
  for (let i = 0; i < node.childElementCount; i++) {
    DFS_on_html_nodes(node.children[i]);
  }
}

// Implement the functionality of getElementsByClassName
function get_elements_by_class_name(className) {
  let elementsWithClassName = [];
  let add_element_by_className = function(className, node) {
    for (let i = 0; i < node.childElementCount; i++) {
      if (node.children[i].className === className) {
        elementsWithClassName.push(node.children[i]);
      }
      add_element_by_className(className, node.children[i]);
    }
  };
  add_element_by_className(className, document);
  return elementsWithClassName;
}

// Implement the functionality of getElementById
function get_element_by_id(node, id) {
  var element = null;
  for (var i = 0; i < node.childElementCount; i++) {
    if (node.children[i].id === id) {
      element = node.children[i];
      break;
    }
    get_element_by_id(node.children[i], id);
  }
  return element;
}

// Implement the functionality of getElementsByTagName
function get_elements_by_tag_name(node, tagName) {
  var elements = [];
  for (var i = 0; i < node.childElementCount; i++) {
    if (node.children[i].tagName === tagName) {
      element.push(node.children[i]);
    }
    get_elements_by_tag_name(node.children[i], tagName);
  }
  return elements;
}

// How do you make a function that takes f and returns a function that calls f on a timeout
// How do you make a function that only calls input function f every 50 milliseconds - just use setInterval
function call_function_on_timeout(method) {
  setTimeout(() => method(), 3000);
}

// Check if matrix is word square
/*
  const input = [
  ["B", "A", "L", "L"],
  ["A", "R", "E", "A"],
  ["L", "E", "A", "D"],
  ["L", "A", "D", "Y"]
  ];
*/
function isWordSquare(input) {
  const numRow = input.length;
  const numCol = numRow ? input[0].length : 0;
  if (!numRow) return false;
  if (!numCol) return true;
  if (numRow !== numCol) return false;

  for (let i = 0; i < numRow; i++) {
    for (let j = 0; j < numCol; j++) {
      if (input[i][j] !== input[j][i]) return false;
    }
  }

  return true;
}
