function TrieNode(data) {
  this.children = {};
  this.data = data;
  this.prefixes = 0;
  this.isWord = false;
}

function Trie() {
  this.root = new TrieNode("");
}

Trie.prototype.add = function(word, node) {
  if (!word || !node) {
    return null;
  }
  node.prefixes++;
  const currentChar = word.charAt(0);
  const remainingWord = word.substring(1);
  const childNode = node.children[currentChar]
    ? node.children[currentChar]
    : new TrieNode(currentChar);
  node.children[currentChar] = childNode;
  if (!remainingWord) {
    childNode.isWord = true;
  }
  this.add(remainingWord, childNode);
};

Trie.prototype.remove = function(word, node) {
  if (!word || !node) {
    return null;
  }

  const currentChar = word.charAt(0);
  const childNode = node.children[currentChar];

  if (!childNode) {
    return null;
  }

  const remainingWord = word.substring(1);
  const nextNode = childNode.children[remainingWord.charAt(0)];
  node.prefixes--;
  delete node.children[currentChar];
  this.remove(remainingWord, nextNode);
};

Trie.prototype.contains = function(word, node) {
  if (!word || !node) {
    return false;
  }

  const search = function(word, node) {
    const currentChar = word.charAt(0);
    const currentNode = node.children[currentChar];
    if (!currentNode && !currentChar) {
      return true;
    }

    if (currentChar && !currentNode) {
      return false;
    }
    const remainingWord = word.substring(1);
    return this.search(remainingWord, currentNode);
  };

  this.search = search.bind(this);

  return this.search(word, node);
};
