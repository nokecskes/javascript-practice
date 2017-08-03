'use strict';
// - Create a variable named `t` with the following content: `[1, 2, 3, 4, 5]`
// - Increment the third element simply by accessing it
// - Log the third element to the console

var t = [1, 2, 3, 4, 5];

//increment with map()
var incrementedT = t.map(function (element, index) {
  if(index == 2) {
    return ++element;
  }
  return element;
});

console.log(incrementedT[2]);

//increment t's third value
t[2]++;
console.log(t[2]);
