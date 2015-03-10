// http://www.freecodecamp.com/bonfires/finders-keepers


// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

// How to solve:
// loop over the array and simply pass them into func
// return the first one that passes

function find(arr, func) {
  var counter = 0;
  // var num = 0;
  for (var i = 0; i < arr.length;i++){
    
  }
  console.log(func(arr[1]));
  // return num;
}

console.log(find([1, 2, 3, 4], function(num){ return num % 2 === 0; }));