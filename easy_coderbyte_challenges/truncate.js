// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a '...' ending.

function truncate(str, num) {
  // check the length of the str
  // See if str is less or equal to the num
  // if it is simply return the str
  // else then slice the str the length of num
  // return the sliced string and concatnate "..."
    var str_long = str.length;
    if (str_long <= num){
      return str;
    }
    else {
      return str.slice(0,num-3) + "...";
    }
}
console.log(truncate('A-tisket a-tasket A green and yellow basket', 11));