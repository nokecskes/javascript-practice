'use strict';

// make it bigger by 10
var a = 3;
a += 7;
console.log("Should be 10: " + a);

// make it smaller by 7
var b = 100;
b -= 7;
console.log("Should be 93: " + b);

// double c's value
var c = 44;
c *= 2;
console.log("Should be 88: " + c);

// divide d's value by 5
var d = 125;
d /= 5;
console.log("Should be 25: " + d);

// what's the cube of e's value?
var e = 8;
e = Math.pow(e, 3);
console.log("Should be 512: " + e);

// tell if f1 is bigger than f2 (as a boolean)
var f1 = 123;
var f2 = 345;
var f1isBigger = f1 > f2;
console.log("Should be false: " + f1isBigger);

// tell if the double of g2 is bigger than g1 (as a boolean)
var g1 = 350;
var g2 = 200;
var g2DoubleisBigger = (g2 * 2) > g1;
console.log("Should be true: " + g2DoubleisBigger);

// tell if h has 11 as a divisor (as a boolean)
var h = 1357988018575474;
var isDivisor = (h % 11) == 0;
console.log("Should be true: " + isDivisor);

// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
var i1 = 10;
var i2 = 3;
var bool1 = i1 > (Math.pow(i2, 2));
var bool2 = i1 < (Math.pow(i2, 3));
var isHigher = false;
if(bool1 && bool2) {
	isHigher = true;
}
console.log("Should be true: " + isHigher);

// tell if j is dividable by 3 or 5 (as a boolean)
var j = 1521;
var dividableBy3 = (j % 3) == 0;
var dividableBy5 = (j % 5) == 0;
var isDividableBy3Or5 = false;
if(dividableBy3 || dividableBy5) {
	isDividableBy3Or5 = true;
}
console.log("Should be true: " + isDividableBy3Or5);

// fill the k variable with its content 4 times
var k = 'Apple';
for(var i = 0; i < 4; i++) {
	k += "Apple";
}
console.log(k);