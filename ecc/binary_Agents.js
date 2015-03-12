// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.


// HOW TO SOLVE
// turn the string into an array and loop over it
// convert each array element into a number
// and pass to a new arr
// then convert the number into ascii
// convert the new arr to a strin
// finally return the str

// > var str = "01101";
// undefined
// > str
// '01101'
// > parseInt(str,2);
// 13

// var res = String.fromCharCode(72, 69, 76, 76, 79);
// The result of res will be:

// HELLO

// new_str = new_str.toString();
// '13'

// > new_str = String.fromCharCode(13);
// '\r'
// > new_str = String.fromCharCode(74);
// ‘J'

function binaryAgent(str) {
  var final_Arr = [];
  var new_Arr = [];
  //converting str into an array
  str = str.split(" ");
  // Loop over the array
  for (var i = 0; i < str.length; i++){
    // convert the arr into ascii and push to a new arr
    new_Arr.push(parseInt(str[i],2));
  }
  for (var j = 0; j < new_Arr.length; j++){
    // convert the ascii into letters and push to yet another array called final arr
    final_Arr.push(String.fromCharCode(new_Arr[j]));
  }
  // convert the final arr back into a string and return it
  final_Arr = final_Arr.join("");
  console.log(final_Arr);
  return final_Arr;
}

binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');


// TEST CASES:
// expect(binaryAgent('01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001')).to.equal("I love FreeCodeCamp!")

// expect(binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111')).to.equal("Aren't bonfires fun!?");