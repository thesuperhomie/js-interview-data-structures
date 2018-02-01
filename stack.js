function ExampleStack() {
  this.data = {};
  this.count = 0;
}

ExampleStack.prototype.peek = function () {
  if (this.count > 0) {
    return this.data[`${this.count}`];
  }
};

ExampleStack.prototype.pop = function () {
  const value = this.data[`${this.count}`];
  if (value) {
    this.count--;
    delete this.data[`${this.count}`];
    return value;
  }
}

ExampleStack.prototype.push = function (element) {
  this.data[`${this.count}`] = element;
  this.count++;
}

ExampleStack.prototype.clear = function () {
  for (let key in this.data) {
    delete this.data[`${key}`];
  }
}
