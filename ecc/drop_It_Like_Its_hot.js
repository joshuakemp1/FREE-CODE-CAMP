// Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

// HOW TO SOLVE:



function drop(arr, func) {
  var counter = 0;
  var new_Arr = [];
  for ( var i = 0; i <= arr.length; i++){
    if (func(arr[counter]) === true){
      // console.log("This was false: " + arr[counter]);
      console.log(arr);
      new_Arr.push(arr[counter]);
      // arr.shift();
      console.log(arr);
      counter++;
    }
    else {
      console.log(arr);
      // new_Arr.push(arr[counter]);
      arr.shift();
      console.log(arr);
      counter++;
    }
  }
  // console.log(new_Arr);
  return new_Arr;
}
console.log(drop([1, 2, 3, 4], function(n) {return n >= 3; })); //.to.eqls([3, 4]);

// console.log(drop([1, 2, 3], function(n) {return n > 0; })); //.to.eqls([1, 2, 3]);AssertionError:expected [ 1, 2 ] to deeply equal [ 1, 2,
// console.log(drop([1, 2, 3], function(n) {return n < 3; }));
// console.log(drop([1, 2, 3, 4], function(n) {return n >= 3; }));
// console.log(drop([1, 2, 3, 4], function(n) {return n > 5; }));

// TEST CASES:

// expect(drop([1, 2, 3, 4], function(n) {return n > 5; })).to.eqls([])
// expect(drop([1, 2, 3, 4], function(n) {return n >= 3; })).to.eqls([3, 4])
// expect(drop([1, 2, 3], function(n) {return n > 0; })).to.eqls([1, 2, 3]);