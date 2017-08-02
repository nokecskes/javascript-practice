'use strict';
// - Create a variable named `ak` and assign the value `123` to it
// - Create a function called `doubling` that doubles it's input parameter
// - Log the result of `doubling(ak)` to the console

var ak = 123;

//normal function
function doubling(a) {
  var doubleValue = 2 * a;
  return doubleValue;
}

//function expression
var doubleAndPrint = function(a) {
  var doubleValue = 2 * a;
  console.log(doubleValue);
}

var result = doubling(ak);
console.log(result);

doubleAndPrint(ak);