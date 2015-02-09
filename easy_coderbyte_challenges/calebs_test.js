var resulting_Array = [];
var re = /[' '!*_0-9]/g;
var alphabet_Array = ['a','b','​c','d','e','f','g','​h','i','j','k','l','​m','n','o','p','q','​r','s','t','u','v','​w','x','y','z'];
var arrayed_String = ['f','u','​n',' ','t','i','m','e','s​','!'];
var len = arrayed_String.length;
for (i = 0; i < len; i ++) {
    for (j = 0; j < alphabet_Array.length; j ++) {
     console.log(arrayed_String[j]);
      if (arrayed_String[i] === alphabet_Array[j]) {
          //if it doesn't = last letter behave normally
          if(alphabet_Array[j] !== alphabet_Array[alphabet_Array.length-1])
          {
          resulting_Array.push(alphabet_Array[j+1]);
          }
          //otherwise (it is the last letter), run the exception
          //wrap around to the first letter
          else
          {
          resulting_Array.push(alphabet_Array[0]);
          }
      }
    }
    if (arrayed_String[i].match(re)) {
    resulting_Array.push(arrayed_String[i]);
    }
}
//Here is a more professional implementation.  We can change
//Alphabet to Greek or Cyrilic characters and are code will still gulp
//it down :)
