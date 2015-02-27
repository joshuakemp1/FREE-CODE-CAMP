// Compare two arrays and return a new array with any items not found in both of the original arrays.

// function sorter(a,b) {
//   return  a - b;
// }
// arr1.sort(sorter);
// You need node installed
// and then simply type in: "npm install underscore"
// USE BREW install node if you don't have it on your machine
// This is using the Javascript library underscore.js
// ...it makes Javascript MUCH more like Ruby :-) ...and helps to cut down on the ole' for loops :-D
//
//THE AWESOME news is that the BONFIRE terminal already has underscore.js built you simply use any of underscore.js methods!!! FUN!!
var _ = require("underscore");

function diff(arr1, arr2) {
  var new_Array = [];
  if (arr1.length < 1){
      return [],arr2;
      }
  if (arr2.length < 1){
      return [], arr1;
    }
  new_Array.push(_.difference(arr1,arr2));
  new_Array.push(_.difference(arr2,arr1));
  new_Array = _.flatten(new_Array);
  // console.log(new_Array);
    return new_Array;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// diff([], ['snuffleupagus', 'cookie monster', 'elmo']);

//   for (var i = 0; i < arr2.length; i++){
//     for (var j = 0; j < arr1.length; j++){
//       // console.log(arr1[i]);
//       if (arr2[i] === arr1[j]){
//         match_Arr.push(arr2[i]);
//         arr2.splice(i,1);
//       }
//       else if (arr2[i] !== arr1[j]){
//         different.push(arr1[j]);
//       }
//     }
//   }
//   // return different;
//   // console.log(match_Arr);
//   // console.log(different);
//   // console.log(arr2);
//   // console.log(arr1);
//   return arr2;
// }
// //WORKS!!
// diff([1, 2, 3, 5], [1, 2, 3, 4, 5]); // Returns 4 // console.log(arr2);
// diff([], ['snuffleupagus', 'cookie monster', 'elmo']);  // console.log(arr2);
// //THIS ONE SOLVES 4 OF THE 7 TEST CASES!

// diff(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']); // Should return ['pink wool'] // console.log(different);

// diff([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]); // should be ['piglet', 4]
// // console.log(different);
//   // console.log(arr2);
