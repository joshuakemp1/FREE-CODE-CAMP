// Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

// Input = "+d+=3=+s+"Output = "true"
// Input = "f++d+"Output = "false"

function SimpleSymbols(str) {
  var t_or_f = "true";
  var string = "";
  string = str;
  // console.log(string);
  for (var i = 0; i < string.length; i++) {
    console.log(i);
    if (string[i].match(/[A-Za-z]/g)) {
      if (i -1 < 0){
        t_or_f = "false1";
      }
      else if (string[i -1] !== "+"){
        console.log(string[i]);
        console.log(string[i - 1]);
        t_or_f = "false2";
      }
      else if (i +1 >= str.length){
        t_or_f = "false3";
      }
      else if (string[i + 1] !== "+"){
          t_or_f = "false4";
      }
    }
  }
console.log(t_or_f);
  // return str;
}
SimpleSymbols("f++d+");