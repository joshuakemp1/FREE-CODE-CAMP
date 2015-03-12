// Return the sum of all indices of elements of 'arr' that can be paired with one other element to form a sum that equals the value in the second argument 'arg'. If multiple sums are possible, return the smallest sum. Once an element has been used, it cannot be reused to pair with another.

// For example, pairwise([1, 4, 2, 3, 0, 5], 5) should return 15 because every element can be paired with another element to equal 5.

// pairwise([1, 3, 2, 4], 4) would only equal 1, because only the first two elements can be paired to equal 4, and the first element has an index of 0!


//HOW TO SOLVE:
//have an empty array called indices_Arr
//first loop over the array and look to see if any of the elements = the target num which is '5' in this case THEN
//Loop over the array and add the 1st element and the second element and see if they
//equal the target number '5' in this case
// if they don't equal the the target number then delete the first element and then
// try to add the 2nd element and the 3rd element and so on, when we find a match push both of the index positions to the indices_Arr
// continue trying to match and pushing up the array matches to indices Arr
// finally add up all of the indices_Arr numbers and return them

var _ = require("ramda");

function pairwise(arr, arg) {
  var indices_Arr = [];
  var total = 0;
  // Loop over the arr
  for (var i = 0; i < arr.length; i++){
    console.log(arr[i]);
    console.log(arr[i+1]);
      if (arr[i] + arr[i+1] === arg && arr.indexOf(i+1) !== -1){
        console.log(arr[i]);
        console.log(arr[i+1]);
          indices_Arr.push(arr.indexOf(arr[i]));
          indices_Arr.push(arr.indexOf(arr[i+1]));
          arr.splice(arr[i],2);
        }
        else{
          break;
        }
          console.log("This is the original arr: " + arr);
          console.log("This is the indices_Arr: " + indices_Arr);
  }
  // console.log(indices_Arr);
  for (var j = 0; j < indices_Arr.length; j++){
    total = total += indices_Arr[j];
  }
  console.log("This is the total: " + total);
  // return arg;

}
pairwise([1,4,2,3,0,5], 5); // WORKING!! should be 15
// pairwise([1, 3, 2, 4], 4); // WORKING!! should be 1
// pairwise([0, 0, 0, 0, 1, 1], 1); // NOT WORKING CORRECTLY should be 10
// pairwise([1,1,1], 2);  // NOT WORKING!!! should be 1

// Assigning a temp var to compare values
    // var temp = arr[i] += arr[i+1];




// expect(pairwise([], 100)).to.equal(0);AssertionError:expected 100 to equal 0
// expect(pairwise([0, 0, 0, 0, 1, 1], 1)).to.equal(10);AssertionError:expected 1 to equal 10
// expect(pairwise([1,1,1], 2)).to.equal(1);AssertionError:expected 2 to equal 1
// expect(pairwise([1, 3, 2, 4], 4)).to.equal(1);AssertionError:expected 4 to equal 1
// expect(pairwise([1, 4, 2, 3, 0, 5], 5)).to.equal(15);AssertionError:expected 5 to equal 15
