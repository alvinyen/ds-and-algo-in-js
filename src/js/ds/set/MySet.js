function mySet() {
  // the let collection will hold the set
  let collection = [];

  // this method will check for the presence of an element and return true or false
  this.has = function (element) {
    return (collection.indexOf(element) !== -1);
  }; // note logic、Array.indexOf

  // this method will return all the values in the set
  this.values = function () {
    return collection;
  };

  // this method will add an element to the set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  this.remove = function (element) {
    if (this.has(element)) {
      const index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.size = function () {
    return collection.length;
  };
}
