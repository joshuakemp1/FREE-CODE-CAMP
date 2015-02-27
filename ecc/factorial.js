// Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

// Input = 4 Output = 24
// Input = 8 Output = 40320

var counter = 0;
var total = 0;
var factor_Array = [];
function FirstFactorial(num) {
  for (var i = 1; i <= num; i++){
    factor_Array.unshift(i);
    // console.log(factor_Array);
  }
for (var j = 0; j < (factor_Array.length); j++){
    console.log(total);
    total = factor_Array[counter] * factor_Array[counter+1];
    console.log(total);
    counter++;
    console.log(total);
    total = total * factor_Array[counter+1];
    console.log(total);
    // console.log([j]);
}
// console.log(total);
  // for (var j = 0; j <= factor_Array.length -1; j++){
    // Why does this work??? But not when I use 'j' to grab the index position?  Seems like BOTH ways should work
    // total = factor_Array[0] * factor_Array[0+1];
    // console.log(factor_Array[j]);
    // total = factor_Array[j] * factor_Array[j+1];

  }

  // return num;

// }
FirstFactorial(4);