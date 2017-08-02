'use strict';
// - Create variable named `al` and assign the value `Greenfox` to it
// - Create a function called `greet` that greets it's input parameter
//     - Greeting is printing e.g. `Greetings, dear Greenfox`
//     - Prepare for the special case when no parameters are given
// - Greet `al`

var al = "Greenfox";

function greet(name) {
  if (name == undefined) {
    console.log("Enter your name!");
  } else {
    console.log("Greetings, dear " + name);
  }
}

greet(al);
greet();
