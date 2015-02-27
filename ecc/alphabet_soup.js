// Using the JavaScript language, have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.

// Use the Parameter Testing feature in the box below to test your code with different arguments.


// Input = "coderbyte"Output = "bcdeeorty"
// Input = "hooplah"Output = "ahhloop"
// var counter = 0;
// var alphabetized_Array = [];
function AlphabetSoup(str) {

  str = str.split("");
  str = str.sort();
  str = str.join("");
return str;
}
console.log(AlphabetSoup("coderbyte"));