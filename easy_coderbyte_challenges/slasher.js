// Return the remaining elements of an array after chopping off n elements from the head.


function slasher(arr, howMany) {
// <<<<<<< Updated upstream
  var new_Array = arr.splice(howMany);
  return new_Array;
// =======
  // it doesn't allways pay to be first
  // arr.splice(0,howMany);
  // return arr;
// >>>>>>> Stashed changes
}

console.log(slasher([1, 2, 3], 2));