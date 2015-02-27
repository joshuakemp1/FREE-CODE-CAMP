// Using the JavaScript language, have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

// Input = "Hello apple pie" Output = "Hello"
// Input = "No words" Output = -1


// This is a test, all I am trying to do is loop of the string and check for the same letter matches throughout the string
function LetterCountI(str) {
  var matches = [];
  var counter = 0;
  var number_of_matches = 0;
  // Splitting bob into an array
  str = str.split("");
  console.log(str);
  for (var i = 0; i < str.length; i++){
    console.log("This is the first letter we are looking for: " + str[counter]);
    // for (var j = 0; j < str.length; j++){
      // if(str[counter] === str[i]){
      if(str[i] === str[counter]){
        number_of_matches++;
        matches.push(str[i]);
      }
      // console.log("This is us searching the string for the first letter to match: " + str[j]);
    // }
  }
console.log("These are our matches in the string: " + matches);
console.log("This is the number of times we matched: " + matches + " : " + number_of_matches);
}
LetterCountI("alligatorahhhhh");

// Have if the number of matches is 1 then the counter gets incremented and the whole loop run again
