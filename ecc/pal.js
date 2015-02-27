function palindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[,\.\s+]/g, '');
 if ( str === str.split("").reverse().join("")) {
    return true;
 }
  else{
  return false;
  }
}
console.log(palindrome("A man, a plan, a canal. Panama"));