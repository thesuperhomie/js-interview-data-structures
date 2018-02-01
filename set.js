function ExampleSet() {
  this.data = {};
  this.count = 0;
}

ExampleSet.prototype.add = function (element) {
  const key = `${element}`;
  if (!this.data[key]) {
    this.data[key] = element;
    this.count++;
  }
}

ExampleSet.prototype.remove = function (element) {
  const value = this.data[`${element}`];
  if (value) {
    delete this.data[`${element}`];
    this.count--;
    return value;
  }
}

ExampleSet.prototype.size = function () {
  return this.count;
}

ExampleSet.prototype.clear = function () {
  for (let key in this.data) {
    delete this.data[`${key}`];
  }
}

ExampleSet.prototype.has = function (element) {
  return this.data[`${element}`] !== undefined;
}
