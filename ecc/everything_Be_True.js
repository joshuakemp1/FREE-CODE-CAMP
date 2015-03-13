// Check if the predicate (second argument) returns truthy (defined) for all elements of a collection (first argument).

// For this, check to see if the property defined in the second argument is present on every element of the collection.

// Remember, you can access object properties through either dot notation or [] notation.

// HOW TO SOLVE:
// I need to check if every user has a sex property


function every(collection, pre) {
  // Does everyone have one of these?
  console.log(pre);
  return pre;
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');


// TEST CASES:
// assert.strictEqual(every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], {'sex': 'female'}), false, 'should return false if predicate returns falsey for any element in the collection');AssertionError:should return false if predicate returns falsey for any element in the collection: expected { sex: 'female' } to equal false
// assert.strictEqual(every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex'), true, 'should return true if predicate returns truthy for all elements in the collection');AssertionError:should return true if predicate returns truthy for all elements in the collection: expected 'sex' to equal true