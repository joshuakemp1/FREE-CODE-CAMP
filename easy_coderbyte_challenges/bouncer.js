// Remove all falsey values from an array.

// false 0 "" null undefined NaN  All of these values count as falsey


function bouncer(arr) {
  // check each element in the array
  // if the element in the array is a falsey
  // then remove it
  // return the original array after
  var empty_Array = [];
  for (var i = 0; i < arr.length; i++){
    if (arr[i] !== ''){
      empty_Array.push(arr[i]);
    }
  }
  console.log(empty_Array);
  return arr;
}

bouncer([7, 'ate', '', false, 9]);