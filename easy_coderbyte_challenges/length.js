function findLongestWord(str) {
// Split the sentence into individual words
// check the length of each word
// return the longest word length
// have a variable biggest that starts at 0
// loop over the array of words and check the length of each word
// if the word is longer then biggest.length
// change biggest size to the new word length
// return the biggest size word
  var biggest = 0;
  str = str.split(" ");
  for (var i = 0; i < str.length; i++){
    if (str[i].length > biggest){
      biggest = str[i].length;
    }
  }
  return biggest;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));