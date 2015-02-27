// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

function sorter(a,b) {
  return b - a;
}

function sumAll(arr) {
  var total = 0;
  var original_Num = [];
  original_Num.push(arr[0]);
  original_Num.push(arr[1]);
  arr.sort(sorter);
  var last_Element = arr[1];
  var first_Element = arr[0];
  // console.log(last_Element);
  // console.log(first_Element);

  // first sort all of the numbers from highest to lowest
  // Then generate some
  // Now all of the numbers are sorted
  for (var i = last_Element; i <= first_Element; i++){
    // console.log(i);
    total = i + total;
  }
console.log(total);
  return total;
}

// var points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a-b});
sumAll([1, 4]);
// sumAll([10,5]);


// (sumAll([5, 10]));//.to.equal(45);
// (sumAll([4, 1])).to.equal(10);



// function sorter(a,b) {
//   return b - a;
// }

// function sumAll(arr) {
//  // var total = 0;
//   var original_Num = [];
//   var empty_Array = [];
//   original_Num.push(arr[0]);
//   original_Num.push(arr[1]);
//   arr.sort(sorter);
//   var last_Element = arr.slice(-1).toString();
//   var first_Element = arr[0];
//   // console.log(last_Element);
//   // console.log(first_Element);

//   // first sort all of the numbers from highest to lowest
//   // Then generate some
//   // Now all of the numbers are sorted
//   for (var i = last_Element; i <= first_Element; i++){
//     // console.log(i);
//     //total = i += total;
//     if (i !== last_Elment || first_Element){
//       empty_Array.push(i);
//     }
//   }
// // console.log(total);
//   return ;
// }

// sumAll([1, 4]);