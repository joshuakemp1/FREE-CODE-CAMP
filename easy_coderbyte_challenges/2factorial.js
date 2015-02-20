function FirstFactorial(num) {
  var total = 1;
  for (var i = 1; i <= num; i++){
    total = total * i;
  }
  return total;
}

console.log(FirstFactorial(5));