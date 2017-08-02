'use strict';
// - Create variable named `al` and assign the value `Greenfox` to it
// - Create a function called `greet` that greets it's input parameter
//     - Greeting is printing e.g. `Greetings, dear Greenfox`
//     - Prepare for the special case when no parameters are given
// - Greet `al`

var al = "Greenfox";

// solution with undefined
function greet(name) {
  if (name == undefined) {
    console.log("Enter your name!");
  } else {
    console.log("Greetings, dear " + name + "!");
  }
}

greet(al);
greet();

// other solution with various arguments
function greet2() {
  if (arguments.length == 0) {
    console.log("Enter your name!");
  } else {
    for(var i = 0; i < arguments.length; i++) {
      console.log("Greetings, dear " + arguments[i] + "!");
    }
  }
}

greet2();
greet2("Taj");
greet2("Fiona", "Bibi", "Henry");
