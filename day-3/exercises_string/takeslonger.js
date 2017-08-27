'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

var quote = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law."


//solution 1:
var quote1 = quote.slice(0, 21) + "always takes longer than " + quote.slice(21);
console.log(quote1);

//solution 2:
var quote2 = quote.split("");
quote2.splice(21, 0, "always takes longer than ");
quote2 = quote2.join("");
console.log(quote2);

