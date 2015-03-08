// Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

// The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

// As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.

// How to solve:
// First take the input number and generate an array of fibonacci numbers up to num
// then check to see if the input number is a fibonacii number if it is, save it to a temp var
// then maybe loop over the array of fibonacci numbers and remove all EVEN numbers
// then after that is complete, add up all of the even numbers
// then check the temp var and see if it is 0 if its zero then simply return the total value of all the odd numbered fibonacii numbers. IF it is NOT 0 then add the value to the total and return the total value of all the odd numbered fibonacii numbers.

// So we need a:  fib_Arr = [];
// a temp_num = 0;
// .splice fib_Arr[i] % 2 === 0;
// var total_Value = 0;
// return total_Value;

// var u = require("underscore");
// var fibonacci_List = [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368,75025,121393,196418,317811,514229,832040,1346269,2178309,3524578,5702887];
var R = require('ramda');

function sumFibs(num) {
  var fib_Arr = [];
  var new_Arr = [];
  var total = 0;
  // I use this to tell if the fib num is greater than 2
  var the_Bit = "false";
  // This is used to keep track of when to stop the loop
  var fib_Num = 0;

// 0, 1, 1, 2, 3, 5,
// THIS WORKS FROM HERE
// This loop generates a list of fibonacci numbers then pushes them to the fib_Arr
  for(var i = 0; total < num; i++){
    if (i < 1){
      fib_Arr.push(0);
    }
    else if (i === 1){
      fib_Arr.push(i);
      fib_Arr.push(1);
    }
    else if (i === 2){
      fib_Arr.push(2);
      the_Bit = "true";
    }
    else if (the_Bit === "true"){
      temp_Arr = R.last(fib_Arr,2);
      temp_Arr = temp_Arr[0] + temp_Arr[1];
      fib_Arr.push(temp_Arr);
      total = R.last(fib_Arr);
    }
    // Generating the fib Array works TO HERE!!!!
  }
  // console.log(fib_Arr); // Print out the generated fibonacci array
  // if last Array element is greater than the original in
    var last_Element = R.last(fib_Arr);
  if (last_Element > num){
    console.log("The last element of the array is bigger!");
    fib_Arr.splice(-1,1); // This removes the last item from the array if it is larger than the original num input
  }
  // This loop removes all of the EVEN fibonacci numbers and leaves all of the ODD numbers
  for (var j = 0; j < fib_Arr.length; j++){
    if (fib_Arr[j] % 2 !== 0){
      new_Arr.push((fib_Arr[j]));
    }
  }
  // This checks if the original input num was a
    if (num % 2 !== 0){
    new_Arr.push(num);
    }
    else{
      console.log("The original num was not a Fibonacci number!");
    }
  // if last Array element is the same as the original input num
    var last = R.last(fib_Arr);
  if (last === num){
    console.log("Removing the last element of the array!");
    new_Arr.splice(-1,1); // This removes the last item from the array if it is the same as the original num input
  }
  // Now to add all of the numbers up :-)
  for (var k = 0; k < new_Arr.length; k++){
    console.log("This is fib_Num: " + fib_Num);
    // console.log(fib_N`);
    fib_Num = fib_Num += new_Arr[k];
  }
  return fib_Num;
}
// TEST CASES:
// console.log(sumFibs(75025)); //.to.equal(135721);
console.log(sumFibs(75024)); //.to.equal(60696);
// console.log(sumFibs(4)); //.to.equal(5);
// sumFibs(4000000); //.to.equal(4613732);
// console.log(sumFibs(1000)); //.to.equal(1785);