// Using the JavaScript language, have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this challenge.

// Use the Parameter Testing feature in the box below to test your code with different arguments.


// Input = "hello"Output = 2
// Input = "coderbyte"Output = 3

var re = /[aeiou]/g;
var counter = 0;
function VowelCount(str) {
str = str.split("");
for (var i = 0; i < str.length; i++){
  if (str[i].match(re)){
    counter++;
  }
}
return counter;
}
VowelCount("coderbyte");