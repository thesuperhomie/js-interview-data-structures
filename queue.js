function ExampleQueue() {
  this.data = {};
  this.count = 0;
  this.dequeueCount = 0;
}

ExampleQueue.prototype.enqueue = function(element) {
  console.log("inside with element::;", element);
  if (element) {
    this.data[this.count] = element;
    this.count++;
  }
};

ExampleQueue.prototype.dequeue = function() {
  if (this.count - this.dequeueCount > 0) {
    const element = this.data[this.dequeueCount];
    delete this.data[this.dequeueCount];
    this.dequeueCount++;
    return element;
  }
};

ExampleQueue.prototype.size = function() {
  return this.count - this.dequeueCount;
};
