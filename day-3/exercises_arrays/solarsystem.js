'use strict';
// Saturn is missing from the planetList
// Insert it into the correct position
// bonus for using some built in methods

var planetList = ["Mercury","Venus","Earth","Mars","Jupiter","Uranus","Neptune"];

planetList.splice(5, 0, "Saturn");

planetList.forEach(function (element) {
    console.log(element);
})