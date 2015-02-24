// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

function sorter(a,b) {
  return b - a;
}
function sumAll(arr) {
var last_Element = arr.slice(-1);
  // first sort all of the numbers from highest to lowest
  // Then generate some
  // Now all of the numbers are sorted

  console.log(arr.sort(sorter));
  // return(1);
}

// var points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a-b});

sumAll([1, 4]);


// (sumAll([5, 10]));//.to.equal(45);
// (sumAll([4, 1])).to.equal(10);
