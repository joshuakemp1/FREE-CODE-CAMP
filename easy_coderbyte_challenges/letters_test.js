var resulting_Array = [];
var re = /[' '!*_0-9]/g;
var alphabet_Array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var arrayed_String = ['f','u','n',' ','t','i','m','e','s','!'];
var reg = /[aeiou]/g;
var counter = arrayed_String.length;

for (i = 0; i < counter; i ++) {
  for (j = 0; j < alphabet_Array.length; j ++) {
    if (arrayed_String[i] === alphabet_Array[j]) {
      resulting_Array.push(alphabet_Array[j+1]);
    }
    if (arrayed_String[i].match(re)) {
      resulting_Array.push(arrayed_String[i]);
    }
  }
}
console.log(counter);
console.log(resulting_Array);
    for ( m = 0; m < resulting_Array.length; m ++ ){
      if (resulting_Array[m].match(reg)){
        resulting_Array[m] = resulting_Array[m].toUpperCase();
      }
    console.log(resulting_Array[m]);
    }
      resulting_Array = resulting_Array.join("");
      console.log("This is the final letter string: " + resulting_Array);