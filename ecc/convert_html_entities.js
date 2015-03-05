// Convert the characters "&", "<", ">", '"', and "'", in a string to their corresponding HTML entities.


// HOW TO SOLVE:
// First search through the string and find any of the html entities
// if there are any then simply replace them with their corresponding characters

function convert(str) {
var amp = str.search("&");
if (amp !== -1) {
  str = str.replace('&', '&amp;');
}
return str;
  // &colon;&rpar;
  // console.log(str);
  // return str;
}

console.log(convert('Dolce & Gabbana'));

// Test Cases:
// convert('Dolce & Gabbana'), 'Dolce & Gabbana', 'should escape characters');
// assert.strictEqual(convert('abc'), 'abc', 'should handle strings with nothing to escape');

// &amp;