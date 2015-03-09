// Find the smallest number that evenly divides all numbers in the provided range.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// HOW TO SOLVE:
// first generate
//first take the input arr and sort them from smallest to biggest
//next remove all numbers that are odd UNLESS they were the original 2 input numbers

function smallestCommons(arr) {
  return arr;
}


smallestCommons([1,5]);


// TEST CASES:

// (smallestCommons([1,13])).should.equal(360360);
// expect(smallestCommons([5,1])).to.equal(60);
// expect(smallestCommons([1,5])).to.equal(60);
// expect(smallestCommons([1,5])).to.be.a('number');AssertionError:expected [ 1, 5 ] to be a number