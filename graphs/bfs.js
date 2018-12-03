/*
  Graph object representation
  const network = {
    'Min'     : ['William', 'Jayden', 'Omar'],
    'William' : ['Min', 'Noam'],
    'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
    'Ren'     : ['Jayden', 'Omar'],
    'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
    'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
    'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
    'Noam'    : ['Nathan', 'Jayden', 'William'],
    'Omar'    : ['Ren', 'Min', 'Scott'],
    ...
};
*/

const reconstructPath = (map, endNode) => {
  const shortestPath = [];

  let currentNode = endNode;

  while (currentNode != null) {
    shortestPath.push(currentNode);
    currentNode = map[currentNode];
  }
  return shortestPath.reverse();
};

const bfsGetPath = (graph, startNode, endNode) => {
  if (!graph.hasOwnProperty(startNode)) {
    throw new Error('Start node not in graph!');
  }
  if (!graph.hasOwnProperty(endNode)) {
    throw new Error('End node not in graph!');
  }
  const queue = [];
  queue.push(startNode);

  const paths = {};
  paths[startNode] = null;

  while (queue.length) {
    const current = queue.shift();

    if (current === endNode) {
      return reconstructPath(paths, startNode, endNode);
    }

    graph[current].forEach(neighbor => {
      if (!paths.hasOwnProperty(neighbor)) {
        queue.push(neighbor);
        paths[neighbor] = current;
      }
    });
  }

  return null;
};

// console.log(bfsGetPath(network, 'Jayden', 'Adam'));
