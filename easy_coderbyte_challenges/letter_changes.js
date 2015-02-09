// // Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

// // Use the Parameter Testing feature in the box below to test your code with different arguments.

// // Input = "hello*3"Output = "Ifmmp*3"
// // Input = "fun times!"Output = "gvO Ujnft!"

// function LetterChanges(str) {

//   // code goes here
//   return str;

// }

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
// LetterChanges(readline());
// This is the array with the converted letters
var letters_Array = [];

// make an array with all the letters in the alphabet called " var alpha_Array = []"
var alphabet_Array = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ];
// Splitting the input string into an array
var str = "fun times!";
// Split the string into an array still keeping the middle blank space we now have an array of letters
var arrayed_String = str.split("");
//Now loop over the "str" until we find a matching letter, when we do, we +1 to the place and take the next letter value.



for (i = 0; i < alphabet_Array.length; i ++) {
  for (j = 0; j < 1; j ++) {
    // console.log(arrayed_String[j]);
    // console.log(alphabet_Array[i]);
    if ( arrayed_String[j] === alphabet_Array[i] ) {
      letters_Array.push(arrayed_String[j]);
      // console.log("I match the alphabet array: " + arrayed_String[j]);
    }
  }
// }
console.log(letters_Array);
}

// START check for vowels and Capitalize them
// final_letters = ['a','h','h','g','d','j','g','o','i','q','e','h','o','r','n','q','g','i','o'];
var re = /[aeiou]/g;
    // for ( i = 0; i < final_letters.length; i++ ){
    for ( i = 0; i < letters_Array.length; i++ ){
      if (letters_Array[i].match(re)){
        letters_Array[i] = letters_Array[i].toUpperCase();
      }
    console.log(letters_Array[i]);
    }
      letters_Array = letters_Array.join("");
//  END check for vowels and Capitalize them


//
//The program should take the first letter of the letters_Array letters_Array[0] and then find it in the alpha_Array once we find the letter we +1 the position and take that letter. We then check if that letter is a vowel if it is we capitalize it.  we then push that letter to a final array called result_Array ['b','e']  we then convert those into a string like so:  string = result_Array.split(" ");
// letters_Array = ['a','d']