// # def sort arr
// #   rec_sort arr, []
// # end

var compare = ['bac','abva'];

function sort(compare) {
  console.log(compare);
  if (compare[0] < compare[1]){
    console.log("--" + compare[0] + "-- Compare 0 is smaller than --" + compare[1] + "-- compare 1");
  }
    else {
      console.log("--" + compare[1] + "-- Compare 1 is smaller then --" + compare[0] + "-- compare 0");
    }
  }
sort(compare);

// def sort(compare)
  // puts compare
  // if compare[0] < compare[1]
    // puts "-- #{compare[0]} -- Compare 0 is smaller than -- #{compare[1]} -- compare 1!!"
  // else
    // puts "-- #{compare[1]} -- Compare 1 is smaller then -- #{compare[0]} -- compare 0!"
  // end
// end
// sort(compare)