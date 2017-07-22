// push、pop、size、peak
const MyStack = function () {
  this.count = 0;
  this.storage = {};

  // adds a value onto the end of the stack
  this.push = function (value) {
    this.storage[this.count++] = value;
  };

  // removes and returns the value at the end of the stack
  this.pop = function () {
    if (this.count === 0) {
      console.log('no value to pop');
      return undefined;
    }

    --this.count;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function () {
    return this.count;
  };

  this.peak = function () {
    return this.storage[this.count - 1];
  };

  // returns the value of the stack without remove it
  this.dev = function () {
    console.log(this.storage);
    console.log(this.count);
  };
};

export default MyStack;
