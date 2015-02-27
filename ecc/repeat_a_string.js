// Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.

function repeat(str, num) {
  var empty_Array = [];
  if (num < 0){
    return "";
  }
  for ( var i = 0; i < num; i++){
    empty_Array.push(str);
  }
  empty_Array = empty_Array.join("");
  return empty_Array;
}
console.log(repeat('abc', 3));