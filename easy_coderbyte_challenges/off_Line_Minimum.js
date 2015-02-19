// Using the JavaScript language, have the function OffLineMinimum(strArr) take the strArr parameter being passed which will be an array of integers ranging from 1...n and the letter "E" and return the correct subset based on the following rules. The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] where the I's stand for integers and the E means take out the smallest integer currently in the whole set. When finished, your program should return that new set with integers separated by commas. For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

// strArr =
// Correct Sample Outputs

// Input = "1","2","E","E","3" Output = "1,2"
// Input = "4","E","1","E","2","E","3","E" Output = "4,1,2,3"

function OffLineMinimum(strArr) {
  var result_Array = [];
  var holding_Array = [];
// loop over the strArr and push the numbers to a holding_Array
for (var i = 0; i < strArr.length; i++){
  // if you come across an 'E' then go check the holding array
  if (strArr[i] !== 'E') {
    // console.log("number!");
    holding_Array.push(strArr[i]);
    console.log(holding_Array);
  }
  else if(strArr[i] === 'E'){
    // grab the smallest number in the holding array using .shift() and push it to a new array called result_Array
    var temp = Math.min.apply(Math,holding_Array);
    result_Array.push(temp);
    // make sure that the holding_array smallest number was removed
    holding_Array.sort();
    holding_Array.shift();
    // now continue on with looping over the str_Arr and push the numbers to the holding_Array until you find another 'E'
  }
  else{
    console.log("letter!");
  }
}
// Then simply take the result_Array and join it to a string result_Array.join("");
  result_Array = result_Array.join(",");
  console.log("This is the result_Array in string form: " + result_Array);
  console.log("This is the holding_Array: " + holding_Array);
  console.log("This is the result_Array: " + result_Array);
}
OffLineMinimum(["5","4","6","E","1","7","E","E","3","2"]);//4,1,5