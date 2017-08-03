'use strict';
// - Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// - Swap the first and the third element of `abc`

var abc = ["Arthur", "Boe", "Chloe"];
console.log(abc);

function swapElements(abc, x, y) {
  var temp = abc[x];
  abc[x] = abc[y];
  abc[y] = temp;
  return abc;
}

var swappedAbc = swapElements(abc, 0, 2);
console.log(swappedAbc);
