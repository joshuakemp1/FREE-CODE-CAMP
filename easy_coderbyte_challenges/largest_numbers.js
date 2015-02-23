// Return an array consisting of the largest numbers in the provided array. The array will contain 4 sub-arrays.

function largestOfFour(arr) {
  // make an empty array that will hold the values of the largest numbers in the arrays
  // loop over each sub array and find the largest number
  // push that number the original empty array
  // continue to do this for all of the 4 sub arrays
  // when done return the original empty array with the largest numbers of the arrays
  var largest_numbers = [];
    for (var i = 0; i < arr.length; i++){
      largest_numbers.push(Math.max.apply(Math,arr[i]));
    }
  return largest_numbers;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));