'use strict';
// - Create a function called `factorio`
//   that returns it's input's factorial

function factorio(number) {
  if (number === 2) {
    return 2;
  }
  var factorial = number * factorio(number - 1);
  return factorial;
}

console.log("The factorial of 5 should be 120: " + factorio(5));
console.log("The factorial of 10 should be 3628800: " + factorio(10));
