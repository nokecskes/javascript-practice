'use strict';

var lineCount = 6;

// Write a program that draws a
// square like this:
//
//
// %%%%%
// %   %
// %   %
// %   %
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

for(var i = 0; i < lineCount; i++) {
	var line = "";
	var isFirstOrLastLine = (i == 0) || (i == (lineCount - 1)); 
	for(var j = 0; j < (lineCount - 1); j++) {
		var isFirstOrLastCharacter = (j == 0) || (j == (lineCount - 2))
		if(isFirstOrLastLine) {
			line += "%";
		} else if(isFirstOrLastCharacter) {
			line += "%";
		} else {
			line += " ";
		}		
	}
	console.log(line)
}
