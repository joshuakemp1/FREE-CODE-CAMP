// Using the JavaScript language, have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

// Input = 5,7,16,1,2 Output = "false"
// Input = 3,5,-1,8,12 Output = "true"

var largest_Number = 0;
var _ = require('lodash');
function ArrayAdditionI(arr) {
// Grabs the largest number of the array
largest_Number = _.max(arr);
console.log(_.max(arr));
if (arr[0] === largest_Number){
  console.log('true');
}
else if (arr[0] + arr[1] === largest_Number){
  // console.log(arr[0 + 1]);
  console.log('true');
}
else if (arr[0] + arr[1] + arr[2] === largest_Number) {
  // console.log(arr[0 + 1 + 2]);
  console.log('true');
}
else if (arr[0] + arr[1] + arr[2] + arr[3] === largest_Number){
  // console.log(arr[0 + 1 + 2 + 3]);
  console.log('true');
}
else if (arr[1] + arr[2] === largest_Number){
  // console.log(arr[0 + 1]);
  console.log('true');
}
else if (arr[1] + arr[2] + arr[3] === largest_Number) {
  // console.log(arr[0 + 1 + 2]);
  console.log('true');
}
else if (arr[2] + arr[3] === largest_Number) {
  // console.log(arr[0 + 1 + 2]);
  console.log('true');
}
else if (arr[3] === largest_Number) {
  // console.log(arr[0 + 1 + 2]);
  console.log('true');
}
else {
  console.log('false');
}
}
ArrayAdditionI([4, 6, 23, 10, 1, 3]);