// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.

// The provided number may not be a prime.


// HOW TO SOLVE:
// First I need to check if the input num is a prime of not.
// Have a bit that we flip to prime if the input number is a prime
// first we need to check if the input number is 2, if it is then it is NOT a prime
// else we check if the number can be divided evenly in which case it is NOT a prime

// So we have a prime number


// INSTEAD!
// we could cheat and simply search through the first 100 or SO known prime numbers and check those to see if the input num is a prime number or not.
// THEN if it is a prime number we flip a bit called prime to true if not then to false
//we then find out the closest position of the prime number from the list
//we then push all those numbers to a new array and simply add them up
//or we could add them up using the same loop


// have a var called total = 0
// loop over the array
// First check if prime array[i] === num
        //if so then make the pointer be prime array[i] position
// then check if prime array[i] is smaller than num
//      if so then we do nothing
// then check if prime array[i] is greater than num
//      if so then make the pointer be prime array[i -1] position
// We then delete everything else from the array that is after the pointer position
// We should be left with an array of all the prime numbers we need we then simply add them all up with total var

var _ = require("ramda");

var prime_Arr = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997,1009,1013,1019,1021,1031,1033,1039,1049,1051,1061,1063,1069,1087,1091,1093,1097,1103,1109,1117,1123,1129,1151,1153,1163,1171,1181,1187,1193,1201,1213,1217,1223,1229,1231,1237,1249,1259,1277,1279,1283,1289,1291,1297,1301,1303,1307,1319,1321,1327,1361,1367,1373,1381,1399,1409,1423,1427,1429,1433,1439,1447,1451];

function sumPrimes(num) {
  var total = 0;

  for (var i = 0; i < prime_Arr.length; i++){
    // check to see if the input num is bigger then we have on our list of prime numbers
    if (num > _.last(prime_Arr)) {
      console.log("The input number: " + num + " is too big for our list!");
      break;
    }
    // if the num and the prime are the same this deletes the rest of the array
    if (prime_Arr[i] === num){
      console.log("THE SAME!");
      var pointer = prime_Arr[i];
      var extract = prime_Arr.indexOf(pointer);
      prime_Arr.splice(extract+1,prime_Arr.length);
    }
    else if (prime_Arr[i] < num){
      console.log("LESS than num!");
    }
    else if (prime_Arr[i] > num){
      var pointer2 = prime_Arr[i-1];
      var extract2 = prime_Arr.indexOf(pointer2);
      prime_Arr.splice(extract2+1,prime_Arr.length);
    }
  }
  // Now to add up all of the remaining prime number in the array
  for (var j = 0; j < prime_Arr.length; j++){
    total = total += prime_Arr[j];
  }
  return total;
}

console.log(sumPrimes(977));


// TEST CASES:

// expect(sumPrimes(977)).to.equal(73156);AssertionError:expected 17 to equal 73156