'use strict';
// - Create a function called `printer`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)

function printer() {
  for(var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

printer("apple", "orange", "strawberry");
printer(1, 2, 3, 4, 5, 6, 6, 7, 9, 10);
