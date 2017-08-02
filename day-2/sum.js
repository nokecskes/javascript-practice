'use strict';
// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result

function sum(sumUntil) {
  var sum = 0;
  for(var i = 0; i < sumUntil; i++) {
    sum += (i + 1);
  }
  console.log(sum);
}

sum(1);
sum(-1);
sum(10);
