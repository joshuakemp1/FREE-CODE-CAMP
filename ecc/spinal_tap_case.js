// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
// How to solve:
// First check the string for ANY spacing at all if not then convert to an array
// First take everything in the str to all lower case
// then search for any '_' or ' ' and replace them with '-'
// Actually I think this is all I need :-)
// then convert everything to an array
// then loop over the array and after every word add a '_' unless it is a '_' in which case do nothing to it
// convert the array back to a string
// return the string
function spinalCase(str) {
  var empty_Array = [];
  var spaces_Check = str.search(" ");
  var underscore_Check = str.search("_");
// If there ARE spaces or underscores
  if (spaces_Check !== -1 || underscore_Check !== -1){
    console.log("Heello");
    var re = /(\W|_)/g;
    str = str.toLowerCase();
    str = str.replace(re, "-");
    return str;
  }
// If there are no spaces then do this
  if (spaces_Check === -1){
    for (var i = 0; i < str.length; i++){
      if (str[i] !== str[i].toUpperCase()){
        empty_Array.push(str[i]);
      }
      else if (str[i] === str[i].toUpperCase()){
        var new_Str = str[i].replace(str[i], '-' + str[i].toLowerCase());
        empty_Array.push(new_Str);
      }
    }
  }
  empty_Array = empty_Array.join("");
  return empty_Array;
}
console.log(spinalCase('The_Andy_Griffith_Show'));
console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('thisIsSpinalTap'));
// TEST CASES:
// assert.strictEqual(spinalCase('The_Andy_Griffith_Show'), 'the-andy-griffith-show', 'should return spinal case from string with snake case');AssertionError:should return spinal case from string with snake case: expected 'the_andy_griffith_show' to equal 'the-andy-griffith-show'
// assert.strictEqual(spinalCase('thisIsSpinalTap'), 'this-is-spinal-tap', 'should return spinal case from string with camel case');AssertionError:should return spinal case from string with camel case: expected 'thisisspinaltap' to equal 'this-is-spinal-tap'