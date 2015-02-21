// Using the JavaScript language, have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string.

// Use the Parameter Testing feature in the box below to test your code with different arguments.


// Input = "never odd or even"Output = "true"
// Input = "eye"Output = "true"


//The below version uses the Javascript library lo_dash.
// var _ = require('lodash');
// function Palindrome(str) {
// var first_Array = [];
// var second_Array = [];
// for (var i = 0; i < str.length; i++){
//   first_Array.push(str[i]);
//   second_Array.unshift(str[i]);
// }
// if (_.isEqual(first_Array,second_Array)) {
//   return 'true';
// }
// else{
//   return 'false';
// }
// }
// Palindrome("never odd or even");

// The below code solution uses just straight Javscript

function Palindrome(str) {
  return str == str.split("").reverse().join("");
}

// console.log(Palindrome("bob"));
// console.log(Palindrome("hello"));
console.log(Palindrome("never odd or even"));