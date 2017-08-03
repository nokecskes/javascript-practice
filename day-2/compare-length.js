'use strict';
// - Create a variable named `p1`
//   with the following content: `[1, 2, 3]`
// - Create a variable named `p2`
//   with the following content: `[4, 5]`
// - Log to the console if `p2` has more elements than `p1`

var p1 = [1, 2, 3];
var p2 = [4, 5];

var p1Length = p1.length;
var p2Length = p2.length;

if (p1Length < p2Length) {
  console.log("p2 has more elements than p1!");
} else if (p1Length === p2Length) {
  console.log("p2 and p1 have the same amount of elements!");
} else {
  console.log("p2 has less elements than p1!");
}

