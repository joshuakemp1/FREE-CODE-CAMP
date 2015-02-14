// Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

// posible inputs
// Input = "hello world"Output = "Hello World"
// Input = "i ran there"Output = "I Ran There"

function LetterCapitalize(str) {
  var strings_in_Array = [];
  // [ 'hello', 'world' ]
  str = str.split(" ");
  for (var i = 0; i < str.length; i++) {
    // 2
    var capitalizer = str[i];
    capitalizer = capitalizer[0].toUpperCase() + capitalizer.substring(1);
    strings_in_Array.push(capitalizer);
  }
  str = strings_in_Array.join(" ");
  return str;
}
console.log(LetterCapitalize("hello world"));