(function() {
  var list, number, opposite, square;

  number = 42;

  opposite = true;

  list = [1, 2, 3, 4, 5];

  if (opposite) {
    number = -42;
  }

  square = function(x) {
    return x * x;
  };

}).call(this);
