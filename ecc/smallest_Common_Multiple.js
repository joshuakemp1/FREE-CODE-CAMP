// Find the smallest number that evenly divides all numbers in the provided range.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// HOW TO SOLVE:
// first generate
//first take the input arr and sort them from smallest to biggest
// Next generate multiples for all of the numbers in the array range
// ...in this case 1,2,3,4,5
// then find the lowest number that all of the multiples have
// check and make sure that ALL of the numbers have the same multiple
// first find the missing numbers in the array and add them
// maybe simpy start generating an array of numbers starting from 1 to the arr[2] or _.last(arr)
// generate an array of numbers first

// var _ = require('ramda'); // I'm not using this library YET, BUT I will after I get pass how to handle the data part

// function sorter(a,b) {
//   return a - b;
// }
// // This is the 100 multiple number generator
// function multiples_Maker(num) {
//   // Setting the multiple_Array to start at the num value
//   var multiple_Array = [num];
//   var total = num;
//   // This generates 100 things
//   for(var i = 1; i < 100; i++){
//     total = total + num;
//     multiple_Array.push(total);
//   }
//   return multiple_Array;
// }
// // console.log(multiples_Maker(5));

// function smallestCommons(arr) {
// // this is the array that we generate to make sure we have all of the numbers for the multiple challenge in the range
// // 1,2,3,4,5
//   var new_Arr = [];
// // First lets sort the array to make the array always be from smallest to biggest
//   arr.sort(sorter);
//   // Generate the new Arr of numbers for the range
//   for (var i = 1; i <= arr[1]; i++){
//     new_Arr.push(i);
//   }
//   // Now I have the new generated array
//   // console.log(new_Arr);
//   // I pass in the third number in the new arr to the multiples maker method and get back an array of 100 multiples of that number
//   console.log(multiples_Maker(new_Arr[2]));
//   // return arr;
// }



// OR SOLVE THIS WAY:
// HOW I am trying to solve
//sort the input array lowest to highest
//have a loop that just keeps counting from 1 to infinity
//check the first number in the input array if it divides evenly by the first number of the loop
//if it does then increment a counter and check the next number in the input array if it ALSO divides evenly then incremnt the counter again.
//When the entire array has matched we break out of the loop and return the number that matched all of the multiples
//


function sorter(a,b) {
  return a - b;
}

function smallestCommons(arr) {
  var num;
  var counter = 0;
  var the_Bit = "false";
  // // 1,2,3,4,5
  var new_Arr = [];
  // First lets sort the array to make the array always be from smallest to biggest
  arr.sort(sorter);
  // Generate the new Arr of numbers for the range
  for (var i = 1; i <= arr[1]; i++){
    new_Arr.push(i);
  }
  console.log(new_Arr);
// Infinite loop that simlpy increments higher and higher until the_Bit changes
  for (var j = 1;the_Bit === "false"; j++){
    // console.log(j);
    // if (j % new_Arr[counter] === 0 && j % new_Arr[counter+1] === 0 && j % new_Arr[counter+2] === 0 && j % new_Arr[counter+3] === 0 && j % new_Arr[counter+4] === 0) {
    //   console.log("match! " + j);
    //   num = j;
    //   counter++;
    // }
    var remainder = j % new_Arr[counter];

    if (remainder !== 0){
      console.log("NO MATCH");

    }

    // START OF MARKS CODE
    //
    //for {counter = a, counter = b, counter++){
        //for (i=a, i=b, i++){
            //remainder = i%counter
          //  if (remainder != 0) then console.log" counter + "is does not divide evenly";
        //}
      //}
    //
    // END MARKS CODE
    //   if(j % new_Arr[counter] === 0){
    //     counter++;
    //     if(j % new_Arr[counter] === 0){
    //       counter++;
    //       if(j % new_Arr[counter] === 0){
    //         counter++;
    //         if(j % new_Arr[counter] === 0){
    //           counter++;
    //           console.log("This is the 5th match!");
    //           num = j;
    //         }
    //       }
    //     }
    //   }

    else if (j === 1000000){
      the_Bit = "true";
    }
  }
  return num;
}


smallestCommons([5,1]);


// TEST CASES:

// (smallestCommons([1,13])).should.equal(360360);
// expect(smallestCommons([5,1])).to.equal(60);
// expect(smallestCommons([1,5])).to.equal(60);
// expect(smallestCommons([1,5])).to.be.a('number');AssertionError:expected [ 1, 5 ] to be a number