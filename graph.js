// Adjacency list: For every vertex a list of adjacent vertices is stored.
// This can be viewed as storing the list of edges.
// This data structure allows the storage of additional data on the vertices and edges.

// Adjacency list
// Storage	Add Vertex	Add Edge	Query
// O(|V|+|E|)	O(1)	O(1)	O(|V|)

function Graph() {
  this.edges = [];
  this.vertices = [];
  this.numOfEdges = 0;
}

Graph.prototype.addVertex = function(vertex) {
  this.vertices.push(vertex);
  this.edges[vertex] = [];
};

Graph.prototype.addEdge = function(vertex1, vertex2) {
  this.edges[vertex1].push(vertex2);
  this.edges[vertex2].push(vertex1);
  this.numOfEdges++;
};

Graph.prototype.removeVertex = function(vertex) {
  const index = this.vertices.indexOf(vertex);
  if (index !== -1) {
    this.vertices.splice(index, 1);
  }
  while (this.edges[vertex].length) {
    const adjacentVertex = this.edges[vertex].pop();
    this.removeEdge(adjacentVertex, vertex);
  }
};

Graph.prototype.removeEdge = function(vertex1, vertex2) {
  const index1 = this.edges[vertex1]
    ? this.edges[vertex1].indexOf(vertex2)
    : null;
  const index2 = this.edges[vertex2]
    ? this.edges[vertex2].indexOf(vertex1)
    : null;

  if (index1) {
    this.edges[vertex1].splice(index1, 1);
    this.numOfEdges--;
  }

  if (index2) {
    this.edges[vertex2].splice(index2, 1);
  }
};

Graph.prototype.size = function() {
  return this.vertices.length;
};

Graph.prototype.traverseDFS = function(vertex, func) {
  if (this.vertices.indexOf(vertex) === -1) {
    // Vertex not found in graph
  }

  let visited = [];

  let traverse = function(vertex, visited, func) {
    visited[vertex] = true;
    if (this.edges[vertex]) {
      func(vertex);
    }

    for (var i = 0; i < this.edges[vertex].length; i++) {
      if (!visited[this.edges[vertex][i]]) {
        traverse(this.edges[vertex][i], visited, func);
      }
    }
  };

  traverse = traverse.bind(this);

  traverse(vertex, visited, func);
};

Graph.prototype.traverseBFS = function(vertex, func) {
  if (this.vertices.indexOf(vertex) === -1) {
    // Vertex not found in graph
  }

  let queue = [];
  queue.push(vertex);
  let visited = [];
  visited[vertex] = true;

  while (queue.length) {
    vertex = queue.shift();
    func(vertex);
    for (var i = 0; i < this.edges[vertex].length; i++) {
      if (!visited[this.edges[vertex][i]]) {
        visited[this.edges[vertex][i]] = true;
        queue.push(this.edges[vertex][i]);
      }
    }
  }
};

Graph.prototype.pathFromTo = function(vertexSource, vertexDestination) {
  if (this.vertices[vertexSource] && this.vertices.indexOf(vertexSource) === -1) {
    // Vertex not found
  }

  let queue = [];
  queue.push(vertexSource);
  let visited = [];
  visited[vertexSource] = true;

  // Keep track of paths
  let paths = [];

  // BFS
  while (queue.length) {
    var vertex = queue.shift();
    for (var i = 0; i < this.edges[vertex].length; i++) {
      if (!visited[this.edges[vertex][i]]) {
        visited[this.edges[vertex][i]] = true;
        queue.push(this.edges[vertex][i]);
        // save paths between vertices
        paths[this.edges[vertex][i]] = vertex;
      }
    }
  }

  if (!visited[vertexDestination]) {
    return undefined;
  }

  var path = [];
  for (var j = vertexDestination; j != vertexSource; j = paths[j]) {
    path.push(j);
  }
  path.push(j);
  return path.reverse().join("-");
};
