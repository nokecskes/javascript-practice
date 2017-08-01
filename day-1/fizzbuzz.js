'use strict';

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

var maxNumber = 25;
for(var i = 0; i < maxNumber; i++) {
	var number = i + 1;
	var line = "";
	var multipleOf3 = (number % 3) == 0;
	var multipleOf5 = (number % 5) == 0;
	if(multipleOf3 || multipleOf5) {
		if(multipleOf3) {
			line += "Fizz";
		}
		if(number % 5 == 0) {
			line += "Buzz";
		}		
	} else {
		line += number;
	}
	console.log(line);	
}