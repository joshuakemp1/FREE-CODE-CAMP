var string = "dog";
var final_Array = [];

function reverse(str) {
  var reverse_Array = str.split("");

  for (i = 0; reverse_Array.length; i++) {
    console.log(final_Array.push(reverse_Array.pop()));
  }

  str = final_Array.join(" ");

  return str;
}

console.log(reverse(string));