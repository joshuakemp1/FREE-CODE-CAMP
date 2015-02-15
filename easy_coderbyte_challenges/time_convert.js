// Using the JavaScript language, have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.

// Use the Parameter Testing feature in the box below to test your code with different arguments.


// Input = 126 Output = "2:6"
// Input = 45 Output = "0:45"

// var hours = [];
// var remainder = [];
function TimeConvert(num) {
  // console.log(num);
  if (num <= 60) {
    num = "0:" + num;
    // console.log("0:" + num);
  }
  // else if (num === 60) {
  //   num = "1";
  //   // console.log("1");
  // }
  else if (num > 60) {
    hours = num / 60;
    num = num % 60;
    // Round the number down to the nearest integer
    hours = Math.floor(hours);
    // reassign num and convert to a string and then grab the last digit
    // num = num.toString().slice(-1);
    // Convert the rounded num to a string
    hours.toString();
    num = hours + ":" + num;
    console.log(num);
  }
  console.log(num);
  return num;
}
TimeConvert(8);
