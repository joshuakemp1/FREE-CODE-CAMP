// Return the lowest index at which a value (second argument) should be inserted into a sorted array (first argument).


function where(arr, num) {
  // Find my place in this sorted array.
  // loop over the arr and compare if the arr element is less then the num
  // if less then keep looping, if the arr element is greater then or === to num
  // then record that arr elements index and return -1 index less for the answer
  console.log(arr);
  for (var i = 0; i < arr.length; i++){
    if ( arr[i] < num ){
      // console.log("lower!");
    }
    else if ( arr[i] >= num ){
      var position = arr[i];
      return arr.indexOf(position);
     }
    }
  }
  // return num;

console.log(where([40, 60], 50));
// console.log((where([10, 20, 30, 40, 50], 30)));