// Using the JavaScript language, have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers!

// Use the Parameter Testing feature in the box below to test your code with different arguments.


// Correct Sample Outputs

// Input = 1, 42, 42, 180 Output = "42 42"
// Input = 4, 90 Output = "90 4"
// Input = 7, 7, 12, 98, 106 = "12 98"


function sortByHighestToLowest(a,b) {
    return b - a;
}
function sortByLowestToHighest(a,b) {
    return a - b;
}

function removeDuplicates(elem, pos, array) {
    return array.indexOf(elem) === pos;
  }

function SecondGreatLow(arr) {
  var highest;
  console.log("full array " + arr.sort(sortByHighestToLowest));
  // for (var i = 0; i < arr.length; i++) {

  // }
//  If 2 numbers simply return the array as the output.
  if (arr.length <= 2) {
    results = arr.join(' ');
    console.log(results);
    return results;
  }
  else {
    // If more then 2 numbers do something
    var better_array = arr.filter(removeDuplicates);
    better_array.sort(sortByHighestToLowest);
    highest = better_array[1]; //pop removes the last. does not work.
    better_array.reverse();
    lowest = better_array[1];
    results =  lowest + " " + highest;
    console.log(results);
    return results;
  }
}

  // return arr;


SecondGreatLow([7, 7, 12, 98, 106]);
SecondGreatLow([1, 42, 42, 180]);
SecondGreatLow([4, 90]);
SecondGreatLow([78, 90, 100, 1, 2]);
SecondGreatLow([-4, -5, 10, 2]);
SecondGreatLow([100, 200, 3, 400, 5, 1]);
SecondGreatLow([4, 60,7, 188]);
SecondGreatLow([80, 80]);
// for( var j = 0; j < str.length; j++){
    // var counter = [26];