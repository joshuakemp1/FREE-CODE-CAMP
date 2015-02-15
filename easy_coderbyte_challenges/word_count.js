// Using the JavaScript language, have the function WordCount(str) take the str string parameter being passed and return the number of words the string contains (ie. "Never eat shredded wheat" would return 4). Words will be separated by single spaces.

// Use the Parameter Testing feature in the box below to test your code with different arguments.


// Input = "Hello World" Output = 2
// Input = "one 22 three" Output = 3

function WordCount(str) {
  str = str.split(" ");
  str = str.length;
  return str;
}
WordCount("one 22 three");