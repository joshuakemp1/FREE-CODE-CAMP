// Write a method named encode(str) which takes in a string and returns an array of pairs: each pair contains the next distinct letter in the string, and the number consecutive repeats.

// HOW TO SOLVE:

//coverting string to array
//first check to see if string is empty, if so return an empty array
//var totals = [];
//have a var called current highest
//have a var called same letter = ''
//loop over string array and take the first element and set it to same letter value to the first letter
//set the current highest to 1
//
//MAKE THIS INTO A FUNCTION
//then check the second element in the array to see if it is the same as same letter
//if it is inrement current highest++
//else push letter
// same letter value == the new letter such as 'b'


encode("aaabbcbbaaa") ==
  [["a", 3], ["b", 2], ["c", 1], ["b", 2], ["a", 3]]
encode("aaaaaaaaaa") == [["a", 10]]
encode("") == []