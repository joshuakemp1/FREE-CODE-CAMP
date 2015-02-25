var _ = require('underscore');

// function test(arr1, arr2) {
// return _.difference(arr1, arr2);
// // => [1, 3, 4]
// shouldn't it return [1,3,4,10]  WHY NOT 10????
// }
// console.log(test([1,2,3,4,5],[5,2,10]));

//####################
// trying out .unique underscore method
function diff(arr1, arr2) {
  // var newArr = [];
  // newArr.push(arr1);
  // newArr.push(arr2);
  newArr = _.difference([newArr]);
// Make the 2 arrays into one
  // newArr = _.flatten(newArr);
  // newArr = _.uniq(newArr);
  console.log(newArr);
  // Same, same; but different.
  // return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);