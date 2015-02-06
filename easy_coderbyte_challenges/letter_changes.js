// Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

// Input = "hello*3"Output = "Ifmmp*3"
// Input = "fun times!"Output = "gvO Ujnft!"

function LetterChanges(str) {

  // code goes here
  return str;

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());





// psudeo code

// make an array with all the letters in the alphabet called " var alpha_Array = []"
// Then take the string and convert in into an array with var letters_Array = [] with var letters_Array = string.split("");
//alpha_Array = ['a','b,'c','d','e']
//
//The program should take the first letter of the letters_Array letters_Array[0] and then find it in the alpha_Array once we find the letter we +1 the position and take that letter. We then check if that letter is a vowel if it is we capitalize it.  we then push that letter to a final array called result_Array ['b','e']  we then convert those into a string like so:  string = result_Array.split(" ");
// letters_Array = ['a','d']