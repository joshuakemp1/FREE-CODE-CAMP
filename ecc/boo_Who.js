// Check if a value is classified as a boolean primitive. Return true or false.

function boo(bool) {
  // console.log(typeof bool);
  if (typeof bool === "boolean"){
    console.log("true");
    return true;
  }
  else{
    console.log("false");
    return false;
  }
console.log(Boolean(bool));
// console.log(bool);
  // return bool;
}

// boo(null);  //false
//
// boo('a'); //false
// boo(NaN);  //false
// boo(1); //false
// boo({ 'a': 1 }); //false
// boo([].slice); //false
// boo([1, 2, 3]); //false
// boo(false); //true
// boo(true); //true



// NOTES: There are 5 primitive types in Javascript:
// undefined
// null
// boolean
// string
// number

// We are checking if a value is a Boolean Primitve only!