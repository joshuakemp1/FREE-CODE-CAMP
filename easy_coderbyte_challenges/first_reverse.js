// function FirstReverse(str) {
//   // console.log(str.split('').reverse().join(''));
// for (i; str.length; i > str.length; i--) {
//   console.log(str);
// }

// }

// FirstReverse("I Love Code");
// ################// ################
// var string = "hello";

// // set the counter tell it when to stop  and then to increment the counter
// for (i = 0; i < string.length; i++) {
//   console.log(string[i]);
// }
// var newString = "";
// var theString = "Hello";
// var counter = theString.length;

//     // 5 while counter is greater then zero keep looping and decrementing
// for (counter; counter > 0; counter --) {
//     newString += theString.substring(counter-1, counter);
//     console.log(newString);
// }

// ################// ################

// Good basic example
// for (i = 1; i <= 10; i++) {
//   console.log(i);
// }
// ################// ################
var string = "hello";
var counter = string.length;
var reversedString = "";


for ( counter; counter > -1; counter -- ) {
  // # here is where the grabbing of the last char takes place (4, 5) slicing out the last letter and then making it the new reversedString
    reversedString += string.substring(counter-1, counter);
}
console.log(reversedString);


