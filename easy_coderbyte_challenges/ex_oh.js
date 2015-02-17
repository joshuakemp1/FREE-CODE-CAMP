// Using the JavaScript language, have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

// Input = "xooxxo" Output = "true"
// Input = "x" Output = "false"

// var x_Array = [];
// var o_Array = [];
var x_Counter = 0;
var o_Counter = 0;
function ExOh(str) {
  for ( var i = 0; i < str.length; i++){
    if(str[i] === 'x'){
      x_Counter++;
      // x_Array.push(str[i]);
    }
    else {
      o_Counter++;
      // o_Array.push(str[i]);
    }
  }
  if (x_Counter === o_Counter){
    console.log('true');
    return 'true';
  }
  else{
    console.log('false');
    return 'false';
  }
// console.log(str);
// console.log(x_Counter);
// console.log(o_Counter);
  // return str;

}
ExOh("xooxxo");