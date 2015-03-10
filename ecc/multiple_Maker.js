function multiples_Maker(num) {
  // Setting the multiple_Array to start at the num value
  var multiple_Array = [num];
  var total = num;
  // This generates 100 things
  for(var i = 1; i < 100; i++){
    total = total + num;
    multiple_Array.push(total);
  }
  return multiple_Array;
}

console.log(multiples_Maker(5));