// Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 1 to num. For the test cases, the parameter num will be any number from 1 to 1000.
// Use the Parameter Testing feature in the box below to test your code with different arguments.
// Expect ouputs
// Input = 12 Output = 78
// Input = 140 Output = 9870
function SimpleAdding(num) {
  var total = 0;
  for (var i = 1; i <= num; i++) {
    total = total + i;
  }
  num = total;
  return num;
}
console.log(SimpleAdding(140));