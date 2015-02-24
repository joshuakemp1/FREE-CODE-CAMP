// Remove all values (last argument(s)) from an array (first argument) and return as a new array.

function destroyer(arr) {
  // loop over the array if the array element matches the last argument, remove
  var filter_Array = [];
  var empty_Array = [];
  var final_Array = [];
  filter_Array.push(arguments[1]);
  filter_Array.push(arguments[2]);
  // console.log(filter_Array);
  // console.log(arguments);
  for (var i = 0; i < arr.length; i++){
    if (arguments[0][i] === filter_Array[0] || arguments[0][i] === filter_Array[1]){
      empty_Array.push(arguments[0][i]);
    }
    else{
      final_Array.push(arguments[0][i]);
    }
  }
    // console.log(final_Array);
  return final_Array;
}

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
// destroyer([1, 2, 3, 1, 2, 3], 2, 3);