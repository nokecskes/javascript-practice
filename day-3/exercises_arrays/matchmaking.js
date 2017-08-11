'use strict';
// Join the two array by matching one girl with one boy in the order array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

var girls = ["Eve","Ashley","Bözsi","Kat","Jane"];
var boys = ["Joe","Fred","Béla","Todd","Neef","Jeff"];
var order = [];

console.log(boys);


var listLength;
var girlsLength = girls.length;
var boysLength = boys.length;
if(girlsLength < boysLength) {
    listLength = girlsLength * 2;
} else {
    listLength = boysLength * 2;
}


for(var i = 0; i < listLength; i += 2) {
    order[i] = girls[i / 2];
    order[i + 1] = boys[i / 2];
}


console.log(order);