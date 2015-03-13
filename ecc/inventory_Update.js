// Compare and update inventory stored in a 2d array against a second 2d array of a fresh delivery. Update current inventory item quantity, and if an item cannot be found, add the new item and quantity into the inventory array in alphabetical order.



// HOW TO SOLVE:
//


function inventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
];

var newInv = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
];

inventory(curInv, newInv);






// TEST CASES:
// assert.deepEqual(inventory([[0, 'Bowling Ball'], [0, 'Dirty Sock'], [0, 'Hair Pin'], [0, 'Microphone']], [[1, 'Hair Pin'], [1, 'Half-Eaten Apple'], [1, 'Bowling Ball'], [1, 'Toothpaste']]), [[1, 'Bowling Ball'], [0, 'Dirty Sock'], [1, 'Hair Pin'], [1, 'Half-Eaten Apple'], [0, 'Microphone'], [1, 'Toothpaste']]);AssertionError:expected [ Array(4) ] to deeply equal [ Array(6) ]
// assert.deepEqual(inventory([], [[2, 'Hair Pin'], [3, 'Half-Eaten Apple'], [67, 'Bowling Ball'], [7, 'Toothpaste']]), [[67, 'Bowling Ball'], [2, 'Hair Pin'], [3, 'Half-Eaten Apple'], [7, 'Toothpaste']]);AssertionError:expected [] to deeply equal [ Array(4) ]
// assert.deepEqual(inventory([[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']], [[2, 'Hair Pin'], [3, 'Half-Eaten Apple'], [67, 'Bowling Ball'], [7, 'Toothpaste']]), [[88, 'Bowling Ball'], [2, 'Dirty Sock'], [3, 'Hair Pin'], [3, 'Half-Eaten Apple'], [5, 'Microphone'], [7, 'Toothpaste']]);AssertionError:expected [ Array(4) ] to deeply equal [ Array(6) ]
// assert.equal(inventory([[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']], [[2, 'Hair Pin'], [3, 'Half-Eaten Apple'], [67, 'Bowling Ball'], [7, 'Toothpaste']]).length, 6);AssertionError:expected 4 to equal 6
// expect(inventory([[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']], [[2, 'Hair Pin'], [3, 'Half-Eaten Apple'], [67, 'Bowling Ball'], [7, 'Toothpaste']])).to.be.a('array');
// assert.deepEqual(inventory([[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']], []), [[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']]);