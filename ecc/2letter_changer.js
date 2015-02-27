// var counter = 0;
var resulting_Array = [];
var alphabet_Array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var arrayed_String = ['f','u','n',' ','t','i','m','e','s','!'];
for (i = 0; i < arrayed_String.length; i ++) {
  var re = /[' '!*_0-9]/g;
  for (j = 0; j < alphabet_Array.length; j ++) {
    // if (counter > arrayed_String.length) counter = 1;
    // if (counter >= arrayed_String.length) {
    //   break;
    // }
    if (arrayed_String[i].match(re)) {
      resulting_Array.push(arrayed_String[i]);
      // counter++;
    }
    else if (arrayed_String[i] === alphabet_Array[j]) {
        resulting_Array.push(alphabet_Array[j+1]);
        // counter++;
    }
  }
}
console.log(i);
console.log(resulting_Array);
// And an error here for match otherwise it works and returns what is expected :-)
var reg = /[aeiou]/g;
    for ( m = 0; m < resulting_Array.length; m ++ ){
      if (resulting_Array[m].match(reg)){
        resulting_Array[m] = resulting_Array[m].toUpperCase();
      }
    console.log(resulting_Array[m]);
    }
      resulting_Array = resulting_Array.join("");
      console.log("This is the final letter string: " + resulting_Array);