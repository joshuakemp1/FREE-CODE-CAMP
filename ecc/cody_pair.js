function pairwise(arr, arg) {
  var the_Total = 0;
  var counter_1 = 0;
  var counter_2 = 0;
  var erased = "";
  for (var i = 0; i < arr.length; i++){
    console.log(arr[counter_1]);
    counter_1++;
    counter_2++;

// Assign counter_1 and counter_2 values to the_Total
    the_Total = counter_1 + counter_2;
    // erased = counter_1, counter_2; // Not sure how to assign that one.
  }
  return the_Total;
  // return arg;
  // console.log(arg);
}

pairwise([1,4,2,3,0,5], 5);




//HOW TO SOLVE:
// have var called the_total set to 0
// loop through the array with counter1 going from 0th to the last - 1 element
// inside the first loop, loop through the array with counter2 going from the counter1 + 1 to the last element
// inside the second loop, if the counter1 element added to the counter2 element add up to the target value
// then we add counter1 and counter2 and total together and assign it back to total
// as well as set counter1 and counter2 elements to a string value like "erased"
// finally once the loops are finished return the_total, and thats it