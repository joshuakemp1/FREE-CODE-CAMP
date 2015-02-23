// Check if a string (first argument) ends with the given target string (second argument).

function end(str, target) {
// First figure out the length of target
// then grap the last of the str that is the same length as the target
// Grap the last letter of the first str
// see if target and string === the same
  var new_Str = str.length;
  // console.log(new_Str);
  // console.log(str.substring(new_Str - target.length, new_Str));
  return str.substring(new_Str - target.length, new_Str) === target;
}

// console.log(end('Bastian', 'n'));
console.log(end('He has to give me a new name', 'name'));