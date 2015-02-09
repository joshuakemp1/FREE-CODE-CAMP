var counter = 0;
var resulting_Array = [];
var alphabet_Array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var arrayed_String = ['f','u','n',' ','t','i','m','e','s','!'];
for (i = 0; i < alphabet_Array.length; i ++) {
  var re = /[' '!*_0-9]/g;
  for (j = 0; j < alphabet_Array.length; j ++) {
// console.log(counter);
// console.log(alphabet_Array[i]);
// console.log(arrayed_String[counter]);
    if (counter > arrayed_String.length) counter = 1;
    if (arrayed_String[counter] === alphabet_Array[j]) {
        resulting_Array.push(alphabet_Array[j+1]);
        counter++;
    }
    else if (arrayed_String[counter].match(re)) {
      resulting_Array.push(arrayed_String[counter]);
      counter++;
    }
  }
}
console.log(counter);
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
// Change the value of the counter > 10
// To counter > arrayed_String.length
// And that should allow for variable length strings.
// You should change
// if (arrayed_String[counter].match(re)) {
// resulting_Array.push(arrayed_String[counter]);
// counter++;
// To an elsif. Because you don't want check and see if the character in the string is a letter if you've just changed it to the next letter, you only want to deal with the non letter case if you couldn't change the character to the next letter.