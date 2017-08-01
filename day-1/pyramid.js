'use strict';

var lineCount = 4;

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for(var i = 0; i < (lineCount + 1); i++) {
	var line = "";
	for(var j = 0; j < (lineCount - i); j++) {
		line += " ";
	}
	for(var k = 0; k < (i * 2 - 1); k++) {
		line += "*";
	}
	console.log(line);
}