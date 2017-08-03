'use strict';
// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

var size = 10;
var symbol = " 1";
var emptyPlace = " 0";

for(var i = 0; i < size; i++ ) {
  var line = "";
  for(var j = 0; j < size; j++) {
    if(j == (size - i - 1)) {
      line += symbol;
    } else {
      line += emptyPlace;
    }
  }
  console.log(line);
}