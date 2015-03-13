// Create a function that takes two or more arrays and returns an array of the symmetric difference of the provided arrays.

// The mathematical term symmetric difference refers to the elements in two sets that are in either the first or second set, but not in both.

// HOW TO SOLVE:
//

function sym(arr) {
  return arr;
}

sym([1, 2, 3], [5, 2, 1, 4]);


// TEST CASES:
// assert.deepEqual(sym([1, 1]), [1], 'should return an array of unique values');AssertionError:should return an array of unique values: expected [ 1, 1 ] to deeply equal [ 1 ]
// assert.deepEqual(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]), [1, 4, 5], 'should return an array of unique values');AssertionError:should return an array of unique values: expected [ 1, 1, 2, 5 ] to deeply equal [ 1, 4, 5 ]
// assert.deepEqual(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]), [1, 4, 5], 'should return the symmetric difference of the given arrays');AssertionError:should return the symmetric difference of the given arrays: expected [ 1, 2, 5 ] to deeply equal [ 1, 4, 5 ]