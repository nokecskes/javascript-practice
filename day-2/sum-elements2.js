'use strict';
// - Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// - Log the sum of the elements in `ai` to the console

var ai = [3, 4, 5, 6, 7];

//solution with for loop
var sum = 0;
for(var i = 0; i < ai.length; i++) {
  sum += ai[i];
}
console.log(sum);

//solution with built in methods
var sum2 = 0;
ai.forEach(function (element) {
  sum2 += element;
});
console.log(sum2);

//solution with reduce
var sum3 = ai.reduce(function (sum, value) {
  return sum + value;
});
console.log(sum3);



