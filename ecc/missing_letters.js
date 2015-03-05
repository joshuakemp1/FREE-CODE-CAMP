// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.


// How to solve
// We need to make sure that a letter IS indeed missing.
// If a letter isn't missing, we need to return undefined and exit the program
// First search the alphabet for the str to see if there is a match if so then return undefined if NOT then continue on


// How are we going to know if a letter is missing? Compare it to something
// After comparing the str how do we know WHICH letter is missing? Maybe say what the letter SHOULD be AND if not
// On which every letter it fails to find, return that letter and end the program
// Make an alphabet array and convert our string into an array and loop over our string if our letter matches the alphabet arrays letter then continue on.  IF the our str letter does not match the alphabet letter, return the alphbets letter
//First convert the input string into an array .split();

var alphabet_String = "abcdefghijklmnopqrstuvwxyz";
var alphabet_Array = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ];

function fearNotLetter(str) {
  var un_Check = alphabet_String.search(str);
  // Checking if the str letters are present in the alphabet if so return undefined
  if (un_Check !== -1){
    return undefined;
  }
  str = str.split("");
  for (var i = 0; i < alphabet_Array.length; i++){
    if (alphabet_Array[i] !== str[i]){
      return alphabet_Array[i];
    }
  }
}
console.log(fearNotLetter('abce'));
// TEST CASES:

// fearNotLetter('yz') expected 'yz' to be undefined    FIRST check for the pattern and see if it exists
// fearNotLetter('bcd')) expected 'bcd' to be undefined
// fearNotLetter('abcdefghjklmno') expected abcdefghjklmno' to equal 'i'
// fearNotLetter('abce')) expected 'abce' to equal 'd'