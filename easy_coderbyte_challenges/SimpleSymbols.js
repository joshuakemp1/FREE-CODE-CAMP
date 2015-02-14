// Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

// Input = "+d+=3=+s+"Output = "true"
// Input = "f++d+"Output = "false"

function SimpleSymbols(str) {
  var t_or_f = [];
  var string = "";
  string = str;
  // console.log(string);
  var re = /\w/g;
  for (var i = 0; i < string.length; i++) {
    console.log(i);
    if (i >= string.length) {
      break;
    }
    if (string[i] === '+') {
    }
    if (string[i+1].match(re)) {
    }
    if (string[i+2] === '+') {
      t_or_f.push('true');
    }
    // else {
    //   t_or_f.push('false');
    // }
  }
console.log(t_or_f);
  // return str;
}
console.log(SimpleSymbols("+d+=3=+s+"));