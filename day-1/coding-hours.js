'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

var codingHoursPerDay = 6;
var semesterLenghInWeeks = 17;
var workDaysOfWeek = 5;
var workHoursPerWeek = 52;

var codingHoursPerSemester = workDaysOfWeek * codingHoursPerDay * semesterLenghInWeeks;

var codingHoursPercentage = ((codingHoursPerDay * workDaysOfWeek) / workHoursPerWeek) * 100;

console.log(codingHoursPerSemester);
console.log(codingHoursPercentage);