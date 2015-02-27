// Using the JavaScript language, have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

// Input = "Hello apple pie" Output = "Hello"
// Input = "No words" Output = -1
function counter(word) {
  // Container to hold a temp word
  var temp_letter = [];
  // Splitting the string into an array and sorting it
  word = word.split("").sort(); //[ 'a','a','g','i','l','l','o','r','t' ]
  // Looping over the word array and looking for letter matches
  for (var i = 0; i < word.length; i++){
    // If the first letter is the same as the second letter
    if (word[i] === word[i+1]){
      console.log(word);
      // Push it to the temp array
      temp_letter.push(word[i]); //PUSH
      // After pushing to temp_letter remove the element that was just pushed up
      word.splice(0, 1);
      console.log(word);
      // check if the next letter matches
      if (word[i+1] === word[i+2]){
        // Push it to the temp array
        temp_letter.push(word[i+1]); //PUSH
        // After pushing to temp_letter remove the element that was just pushed up
        word.splice(0, 1);
        console.log(word);
      }
    }
      // else {
      //   temp_letter.push(word[i+1]);
      // }
  }
  console.log("This is what is in the temp_letter array:" + temp_letter);
  // console.log(word);
  // console.log(matches.sort());

  // Now go over the matches array
  // for (var j = 0; j < matches.length; j++){

  // }
// console.log(word);
// console.log(matches);
// console.log(word[2]);
}

counter("hello");
