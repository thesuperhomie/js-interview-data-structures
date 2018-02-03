function ExampleLinkedList() {
  this.head = null;
}

ExampleLinkedList.prototype.add = function(value) {
  const node = {
    value,
    next: null
  };

  if (!this.head) {
    this.head = node;
  } else {
    let traversingNode = this.head;
    while (traversingNode.next) {
      traversingNode = traversingNode.next;
    }
    traversingNode.next = node;
  }
};

ExampleLinkedList.prototype.remove = function(value) {
  let traversingNode = this.head;
  if (!traversingNode) {
    console.log("List is empty.");
  } else {
    if (traversingNode.value === value) {
      this.head = traversingNode.next;
    } else {
      let found = false;
      while (!found) {
        if (traversingNode.value === value) {
          found = true;
          traversingNode.next = traversingNode.next.next
            ? traversingNode.next.next
            : null;
        } else {
          traversingNode = traversingNode.next;
        }
      }
    }
  }
};
