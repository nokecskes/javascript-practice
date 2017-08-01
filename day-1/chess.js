// Crate a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % % 
//  % % % %
//


var darkField = "%";
var lightField = " ";
var size = 8;

for(var i = 0; i < size; i++) {
	var line = "";
	for (var j = 0; j < size; j++) {
		if((i + j) % 2 == 0) {
			line += darkField;
		} else {
			line += lightField;
		}		
	}
	console.log(line);
}
