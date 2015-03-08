// I am new to Javascript, I am doing a coding challenge to learn more about the language.  This is not school related or anything like that, totally for my own personal growth.  Here is the challenge:

// "Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number."

// I have spent the past 2 evenings working on solving this challenge.  When I run my code using underscore.js it works.  When I use Ramda.js it says NAN.  I would think both would return NAN.  I'm very surprised that I can get the correct answer from one and not the other.   Any insights would be greatly appreciated!

    var _ = require('ramda');

    function sumFibs(num) {
    var fib_Arr = [];
    var new_Arr = [];
    var total = 0;
    // I use this to tell if the fib num is greater than 2
    var the_Bit = "false";
    // This is used to keep track of when to stop the loop
    var fib_Num = 0;

    // THIS WORKS FROM HERE
    // This loop generates a list of fibonacci numbers then pushes them to the    fib_Arr
    for(var i = 0; total < num; i++){
    if (i < 1){
      fib_Arr.push(0);

    }
    else if (i === 1){
      fib_Arr.push(i);
      fib_Arr.push(1);
    }
    else if (i === 2){
      fib_Arr.push(2);
      the_Bit = "true";
    }
    else if (the_Bit === "true"){
      temp_Arr = _.slice(fib_Arr.length - 2, fib_Arr.length)(fib_Arr);
      // temp_Arr = _.last(fib_Arr,2);
      temp_Arr = temp_Arr[0] + temp_Arr[1];
      fib_Arr.push(temp_Arr);
      total = _.last(fib_Arr);
    }
    // Generating the fib Array works TO HERE!!!!
    }

    // console.log(fib_Arr); // Print out the generated fibonacci array
    // if last Array element is greater than the original in
     var last_Element = _.last(fib_Arr);
    if (last_Element > num){
      console.log("The last element of the array is bigger!");
      fib_Arr.splice(-1,1); // This removes the last item from the array if it is  larger than the original num input
     }

    // This loop removes all of the EVEN fibonacci numbers and leaves all of the ODD numbers
      for (var j = 0; j < fib_Arr.length; j++){
        if (fib_Arr[j] % 2 !== 0){
          new_Arr.push((fib_Arr[j]));
        }
      }

    // This checks if the original input num was a
        if (num % 2 !== 0){
        new_Arr.push(num);
        }
        else{
          console.log("The original num was not a Fibonacci number!");
        }
      // if last Array element is the same as the original input num
        var last = _.last(fib_Arr);
      if (last === num){
       console.log("Removing the last element of the array!");
        new_Arr.splice(-1,1); // This removes the last item from the array if it is the same as the original num input
      }

    // Now to add all of the numbers up :-)
      for (var k = 0; k < new_Arr.length; k++){
        console.log("This is fib_Num: " + fib_Num);
        // console.log(fib_N`);
        fib_Num = fib_Num += new_Arr[k];
      }
      return fib_Num;
    }
    // TEST CASES:
    // console.log(sumFibs(75025)); //.to.equal(135721);
    console.log(sumFibs(75024)); //.to.equal(60696);