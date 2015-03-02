// Return true if the string in the first element of the array contains the string in the second element in any form.

// I'd like to know how to solve this using underscore's _.each method instead of loops

var _ = require("underscore");

// function sorter (a,b) {
//   return b - a;
// }

// var arr = [1,2,3];
function mutation(arr) {

  arr[0] = arr[0].sort();
  arr[1] = arr[1].sort();
  console.log(arr[0]);
  console.log(arr[1]);
  console.log();
  console.log();
//   var final_Array = [];
//   var new_Arr = arr[0].toLowerCase().split("");
//   var new_Arr2 = arr[1].toLowerCase().split("");
//   // _.each(arr){(
//   // console.log(arr);
//   // });

//   for (var i = 0; i < new_Arr.length; i++){
//     for (var j = 0; j < new_Arr2.length; j++){
//       if (new_Arr[i] === new_Arr2[j]){
//         new_Arr2.splice(new_Arr2[j],1);
//         final_Array.push(new_Arr[i]);
//       }
//     }
//   }
//   final_Array = final_Array.sort().join("").toLowerCase();
//   // console.log(final_Array);
//   // arr[1] = arr[1].toLowerCase().join("");
//   console.log(arr[1]);
//   // console.log(arr[1].sort().toLowerCase());
//   if (final_Array === arr[1].toLowerCase()){
//     return true;
//   }
//   else {
//     return false;
//   }
//   console.log(final_Array);
//   // _.each(arr, function(elem) {
//   //  console.log(elem);
//   // });

//   // console.log(new_Arr);
//   // var x = _.contains(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']);
//   // console.log(_.contains(['h','e','l','l','o'],'h'));
//   // console.log(new_Arr2);
//   // final_Array.push(new_Arr,new_Arr2);
//   // var check = _.contains(arr);
//   // console.log(arr[0].split(" "));
//   // return final_Array;
}
console.log(mutation(['hello', 'Hello'])); //true
// mutation([1,2,3]);
// console.log(mutation(['hello', 'hey'])); //false
// console.log(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu'])); //true