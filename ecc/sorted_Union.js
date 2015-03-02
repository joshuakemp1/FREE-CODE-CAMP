// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
//
//
// Here's how to solve this problem:
//First loop over the arrays and remove an repeat letters using _.unique();
//
//
// var _ = require("underscore");
// function unite(arr1, arr2, arr3) {
//   var combined_Array = arr1.concat(arr2,arr3);
//   var final_Array = _.uniq(combined_Array);
//   return final_Array;
// }
// console.log(unite([1, 2, 3], [5, 2, 1, 4], [2, 1]));
// var u = require("underscore");
  // var new_Array = [];
  // console.log(arr1);
  // console.log(arr2);
  // console.log(arr3);
//   function unite(arr1, arr2, arr3) {
//   var combined_Array = arr1.concat(arr2,arr3);
//   combined_Array = _.unique(combined_Array);
//   return combined_Array;
// }
   // new_Array.push(_.difference(arr1,arr2,arr3));
   // new_Array.push(_.difference(arr2,arr1,arr3));
   // new_Array.push(_.difference(arr3,arr2,arr1));
   // figure out how to flatten the only one level by passing shallow to the array
   // new_Array = _.flatten(new_Array, [shallow]);
   // return new_Array;
  // return arr1;
// }

// console.log(unite([1, 2, 3], [5, 2, 1, 4], [2, 1]));

// unite([1, 3, 2], [1, [5]], [2, [4]]); //Should return: [1, 3, 2, [5], [4]]
// expected [ 3, 2, 5, 2, 4 ] to deeply equal [ 1, 3, 2, [ 5 ], [ 4 ] ]


// unite([1, 3, 2], [5, 2, 1, 4], [2, 1]); // Should return: [1, 3, 2, 5, 4]
//expected [ 3, 5, 4 ] to deeply equal [ 1, 3, 2, 5, 4 ]


// SOLVING
// first combine the arrays with array.concat()
// Then remove the duplicates of the array, keeping the same order like so _.uniq(combined_Array);

var _ = require("underscore");
function unite(arr1, arr2, arr3) {
 var final_Array = [];
 var combined_Array = arr1.concat(arr2,arr3);
 final_Array = _.uniq(combined_Array);
  return final_Array;
}
console.log(unite([1, 2, 3], [5, 2, 1, 4], [2, 1]));
