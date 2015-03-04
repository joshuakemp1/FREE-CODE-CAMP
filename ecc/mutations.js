// Return true if the string in the first element of the array contains the string in the second element in any form.

// I'd like to know how to solve this using underscore's _.each method instead of loops

var _ = require("underscore");

// function sorter (a,b) {
//   return b - a;
// }

// var arr = [1,2,3];
function mutation(arr) {
  // Both are now lowercase
  var x = arr[1].toLowerCase();
  x = x.split("").sort();
  x = x.join("");

  console.log(x);
  var new_Arr = arr[0].toLowerCase();
  // console.log(new_Arr);
  var new_Arr2 = arr[1].toLowerCase();
  // console.log(new_Arr2);
  new_Arr = new_Arr.split("").sort();
  // console.log(new_Arr);
  new_Arr2 = new_Arr2.split("").sort();
  // console.log(new_Arr2);
  // console.log(new_Arr);
  // console.log(new_Arr2);
  var first_Array = [];
//   var new_Arr = arr[0].toLowerCase().split("");
//   var new_Arr2 = arr[1].toLowerCase().split("");
//   // _.each(arr){(
//   // console.log(arr);
//   // });
  for (var i = 0; i < new_Arr.length; i++){
    for (var j = 0; j < new_Arr2.length; j++){
      if (new_Arr[i] === new_Arr2[j]){
        // console.log("This is a match: " + new_Arr[i]);
        first_Array.push(new_Arr[i]);
        new_Arr2.splice(new_Arr2[j],1);
        // console.log("This is the array: " + first_Array);
      }
    }
    // console.log(first_Array);
  }
  // console.log(first_Array);
  final_Array = first_Array.sort().join("");
  console.log(final_Array);
  console.log(new_Arr.join(""));
  console.log(x);
  // arr[1] = arr[1].join("");
//   console.log(arr[1]);
// //   // console.log(arr[1].sort().toLowerCase());
  if (final_Array === x){
    return true;
  }
  else {
    return false;
  }
  // _.each(arr, function(elem) {
  //  console.log(elem);
  // });

//   // console.log(new_Arr);
//   // var x = _.contains(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']);
//   // console.log(_.contains(['h','e','l','l','o'],'h'));
//   // console.log(new_Arr2);
//   // final_Array.push(new_Arr,new_Arr2);
//   // var check = _.contains(arr);
//   // console.log(arr[0].split(" "));
//   // return final_Array;
}
// console.log(mutation(['hello', 'Hello'])); //true
// mutation([1,2,3]);
// console.log(mutation(['hello', 'hey'])); //false
// console.log(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu'])); //true