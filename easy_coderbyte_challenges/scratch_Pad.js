var match = [1, 2, 3, 5];
var arr2 = [1, 2, 3, 4, 5];
var empty_Array = [];

  for ( var i = 0; i < arr2.length; i++){
    for ( var j = 0; j < match.length; j++){
    // console.log(match[i]);
      if (arr2[i] === match[j]){
        empty_Array.push(arr2[i]);
      arr2.splice(i,1);
      }
    }
  }

// console.log(x);
console.log(empty_Array);
console.log(arr2);