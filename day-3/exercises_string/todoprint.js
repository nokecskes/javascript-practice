'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

var todoText = " - Buy milk\n";
var todoTitle = "My todo: \n";
var additionalTodos = " - Download games \n \t - Diablo";
todoText = todoTitle + todoText + additionalTodos;

console.log(todoText);