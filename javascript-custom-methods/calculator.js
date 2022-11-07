/* exported calculator */

var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbers) {
    var number = 0;
    for (var i = 0; i < numbers.length; i++) {
      number += numbers[i];
    }
    return number;
  },
  getAverage: function (numbers) {
    var number = 0;
    for (var i = 0; i < numbers.length; i++) {
      number += numbers[i];
    }
    number = number / numbers.length;
    return number;
  }
};
