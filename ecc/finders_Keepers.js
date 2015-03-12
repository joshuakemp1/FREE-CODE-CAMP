// http://www.freecodecamp.com/bonfires/finders-keepers


// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

// How to solve:
// loop over the array and simply pass them into func
// return the first one that passes

function find(arr, func) {
  var counter = 0;
  for (var i = 0; i < arr.length;i++){
    if (func(arr[counter]) !== true){
      counter++;
    }
    else if(func(arr[counter]) === true){
      return arr[counter];
    }
    else{
      return undefined;
    }
  }
}

// console.log(find([1, 2, 3, 4], function(num){ return num % 2 === 0; }));
console.log(find([1, 3, 5, 9], function(num) { return num % 2 === 0; }));
// console.log(find([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));

// TEST CASES:
// assert.strictEqual(find([1, 3, 5, 9], function(num) { return num % 2 === 0; }), undefined, 'should return undefined if not found');AssertionError:should return undefined if not found: expected 0 to equal undefined
// assert.strictEqual(find([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }), 8, 'should return first found value');AssertionError:should return first found value: expected 0 to equal 8