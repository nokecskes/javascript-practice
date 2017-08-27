'use strict';

// Check if the array contains "7" if it contains print "Hoorray" otherwise print "Noooooo"

var numbers = [1,2,3,4,5,6,8];


//Solution 1:
var listLength = numbers.length;
var result1 = "Noooooo";


for(var i = 0; i < listLength; i++ ) {
    if(numbers[i] == 7) {
        result1 = "Hoorray";
    }
}

console.log(result1);


//Solution 2:
if (numbers.includes(7)){
    console.log('Hoorray');
} else{
    console.log('Nooooo');
};
