// Using the JavaScript language, have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false.

// Use the Parameter Testing feature in the box below to test your code with different arguments.


// Input = "after badly" Output = "false"
// Input = "Laura sobs" Output = "true"
// Failed on these strings below, I need to not count spaces, ONLY characters!
// Input = "away obe"
// Input = "noah obe"
// Input = "far ebs"
// Input = "123adzvb"
// Input = "abcccazzzb"
// Input = "bzzza"

function ABCheck(str) {
  var t_or_f ;
  // There must be at least an a and b somewhere in the string or else it is false
  //
  // If I find an 'a' AND a 'b' then I need to look +3 ahead and behind for the other letter.
  // I think I will start with the a boolean set to false, then only if I find an 'a' AND a 'b' would I change that.
  //
  //
  // I need to have a check to make sure that the string allows me to count back 3 spaces or forwards 3 spaces

  // I think I will first check the string for an 'a' AND 'b' if there is not both an a AND b then return 'false'
  // Next I will search for the letter 'a'
  // I will then record it's string position
  // If the string position is [2] or < less, then I will only do a forward search for 'b' with a string position[+3] === 'b' if it matches then return 'true'
  // Else the string position does NOT match return 'false'
  // Now go search for another 'a' in the string if there are no more 'a' then return 'false'
  // Check string position -3 === 'b' and then check for +3 === 'b' if it matches return 'true'
  // Else return 'false'
  // Check for anymore remaining 'a's if not then simply return 'false'

//Checking to make sure the string actually has an 'a' AND a 'b' in it.
  // var slicer = str.slice(position_a+1);
  var string =  str.length;
  var position_a = str.search("a");
  var position_b = str.search("b");
  console.log(position_b);
  var second_position_a = str.search(position_a + 1);
  if (position_a !== -1 && position_b !== -1) {
  }
  //Else set the boolean variable to 'false' and end the program
  else {
    t_or_f = "false";
    return t_or_f;
  }
  //Check the index position so we know if we can search in reverse or not with a -3
  if (position_a <= 2){
    console.log("This is the first 'a' position " + position_a);
    //Check for a match 3 index positions in front
    if (str[position_a] === str[position_a+4]){
      t_or_f = "true";
      return t_or_f;
    }
  }
  // If the index position is greater then '2' print it out and say what the position is
  else if (position_a > 2){// should this be an IF statement instead of else if?
      console.log("This is the first 'a' position and it is GREATER than 2! " + position_a);
    }
    //Check to see if the index position is too close to the end of the string
    if (position_a <= string-4){
      console.log("This 'a' is NOT too close to the end of the string!");
    }
    else if (position_a > string-4) {
      console.log("TOO CLOSE to the end of the string!!!");
      t_or_f = "false";
      return t_or_f;
    }
    //Check for a match 3 index positions in front
      if (str[position_a] === str[position_a+4]){
        t_or_f = "true";
        return t_or_f;
      }
      // If not a match then search for the next 'a' in the string
      else if (str[position_a] !== str[position_a+4]){
        var next_occurence = str.indexOf("a",position_a+1);
        console.log(next_occurence);
      }
      // Check to see if the index position is too close to the end of the string
      if (next_occurence <= string-4){
        console.log("This 'a' is NOT too close to the end of the string!");
      }
      else if (next_occurence > string-4) {
        console.log("TOO CLOSE to the end of the string!!!");
        t_or_f = "false";
        return t_or_f;
      }
      // //Check for a match 3 index positions in front
      if (str[next_occurence+4] === 'b'){
        t_or_f = "true";
        return t_or_f;
      }
    else{
      t_or_f = "false";
      return t_or_f;
    }
// console.log(position_a);
//   return str;
}
console.log(ABCheck("abcccazzzb"));