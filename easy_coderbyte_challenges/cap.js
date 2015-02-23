// First make the entire string toLowerCase
// next split the into an array of individual words
// capitalize toUpperCase the first lette of each word
// then join the array back into a string
function titleCase(str) {
str = str.toLowerCase();
str = str.split(" ");
for (var i = 0; i < str.length; i++){
  // str[i][0] = str[i].charAt(0).toUpperCase();
//"i'm"    'I' + "i'm"  take old string, make new string by combing old string and new string
  str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
}
str = str.join(" ");
  return str;
}
console.log(titleCase("I'm a little tea pot"));