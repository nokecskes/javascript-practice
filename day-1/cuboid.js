'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

var a = 4;
var b = 5;
var c = 6;

var surface = 2 * (a * b + a * c + b * c);
var volume = a * b * c;

console.log("Surface Area: " + surface);
console.log("Volume: " + volume);

