'use strict';

var lineCount = 15;



// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is
if (lineCount % 2 == 0) {
	console.log("The number of the diamond's lines has to be odd!")
} else {
	var middleLine = Math.floor(lineCount / 2);
	var spaces = 0;
	var symbols = 0;
	for(var i = 0; i < lineCount; i++) {
		var line = "";
		if(i < middleLine) {
			spaces = middleLine - i;
			symbols = lineCount - (spaces * 2);		
			for(var j = 0; j < spaces; j++) {
				line += " ";
			}
			for(var k = 0; k < symbols; k++) {
				line += "*";
			}
		} else if(i == middleLine) {
			for(var l = 1; l < (lineCount + 1); l++) {
				line += "*";
			}
		} else if (i > middleLine) {
			spaces = i - middleLine;
			symbols = lineCount - (spaces * 2);	
			for(var m = 0; m < spaces; m++) {
				line += " ";
			}
			for (var n = 0; n < symbols; n++) {
				line += "*";
			}
		}
		console.log(line);	
	}	
}




