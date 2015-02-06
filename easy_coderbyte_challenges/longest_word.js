// var word = "I love dogs";
// var largest_Word = [""];

// function LongestWord(sen) {

// var word_Array = sen.split(" ");

// for ( i = 0; i < word_Array.length; i++ ) {
//   // Comparing the 2 arrays
//   if (word_Array[i].length > largest_Word[0].length) {
//     // First clear out the array of the last smaller value
//     largest_Word.shift();
//     // Now push it up to the largest array
//     largest_Word.push(word_Array[i]);
//     // console.log("LARGER!");
//   } else {
//     // console.log("smaller :-(");
//   }
//   // console.log(word_Array[i].length);
//   sen = largest_Word.join("");
// }

// return sen;
// }

// // console.log(LongestWord(word));
// console.log(LongestWord(word));

// ####################################################
// Better version here:
var word = "I love dogs";
var largest_Word = "";

function LongestWord(sen) {

var word_Array = sen.split(" ");

for ( i = 0; i < word_Array.length; i++ ) {
  // Comparing the 2 arrays
  if (word_Array[i].length > largest_Word.length) {
    largest_Word = word_Array[i];
    // First clear out the array of the last smaller value
  } else {
  }
  sen = largest_Word;
}

return sen;
}
console.log(LongestWord(word));

// There was no need for the second array after all :-( I over engineered it :-)



