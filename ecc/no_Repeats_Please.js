// Return the number of total permutations of the provided string that don't have repeated consecutive letters.

// For example, 'aab' should return 2 because it has 6 total permutations, but only 2 of them don't have the same letter (in this case 'a') repeating.



// HOW TO SOLVE:
// 

function permAlone(str) {
  return str;
}

permAlone('aab');

// TEST CASES:

// expect(permAlone('zzzzzzzz')).to.equal(0);AssertionError:expected 'zzzzzzzz' to equal 0
// expect(permAlone('abfdefa')).to.equal(2640);AssertionError:expected 'abfdefa' to equal 2640
// expect(permAlone('abcdefa')).to.equal(3600);AssertionError:expected 'abcdefa' to equal 3600
// expect(permAlone('aabb')).to.equal(8);AssertionError:expected 'aabb' to equal 8
// expect(permAlone('aaa')).to.equal(0);AssertionError:expected 'aaa' to equal 0
// expect(permAlone('aab')).to.equal(2);AssertionError:expected 'aab' to equal 2
// expect(permAlone('aab')).to.be.a.number;