// Remove all falsey values from an array.

// false 0 "" null undefined NaN  All of these values count as falsey


function bouncer(arr) {
  // check each element in the array
  // if the element in the array is a falsey
  // then remove it
  // return the original array after
  var empty_Array = [];
  var the_Real_Array = [];
  for (var i = 0; i < arr.length; i++){
    // I would really like to do !== false and if they are false, get rid of them
    if (arr[i] === '' || arr[i] === false || arr[i] === 0 || arr[i] === undefined ){
      empty_Array.push(arr[i]);
    }
    else {
      the_Real_Array.push(arr[i]);
    }
  }
  if (the_Real_Array[0] === null){
    return [];
  }
  // console.log(the_Real_Array);
  return the_Real_Array;
}

// bouncer([7, 'ate', '', false, 9]);
console.log(bouncer([false, null, 0]));