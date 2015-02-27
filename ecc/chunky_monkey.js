// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.

function chunk(arr, size) {
  // grab from the original array every 2 and then push it to the empty array
  var empty_Array = [];
  var counter = 0;

  for (var i = 1; i <= size; i++){
    if(arr.length < 1){
      break;
    }
    else {
      empty_Array.push(arr.splice(counter,size));
    }
}
console.log(empty_Array);
return empty_Array;

  // empty_Array.push(arr.splice(counter,size));
  // console.log("This is the counter: " + counter);
  // Checking to make sure it worked
  // console.log(arr);
  // console.log(arr.slice(0,size));
  // return arr;
}

// chunk(['a', 'b', 'c', 'd'], 2);
chunk([0, 1, 2, 3, 4, 5], 4); // Should be: [[0, 1, 2, 3], [4, 5]]
chunk([0, 1, 2, 3, 4, 5], 3); // Should be: [[0, 1, 2], [3, 4, 5]]
chunk(['a', 'b', 'c', 'd'], 2); // Should be: [['a', 'b'], ['c', 'd']]