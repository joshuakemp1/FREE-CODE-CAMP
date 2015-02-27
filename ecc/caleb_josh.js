// is array[I] == "this letter", if it does that particular letter's counter is ++



function LetterCountI(str) {
//split string into array
str = str.split(" ");
var max_Counter = [str.length];
console.log(str);
console.log(str.length);
  for( var j = 0; j < str.length; j++){
    var counter = [26];
    for (var i = 0; i < str[j].length; i++){
      //console.log(str[j].substring(i,i+1));
      var temp = str[j].substring(i, i+1);
      if (temp === "a" || temp === "A") {
        counter [0]++;
      }
      else if (temp === "b" || temp === "B") {
        counter [1]++;
      }
      else if (temp === "c" || temp === "C") {
        counter [2]++;
      }
      else if (temp === "d" || temp === "D") {
        counter [3]++;
      }
      else if (temp === "e" || temp === "E") {
        counter [4]++;
      }
      else if (temp === "f" || temp === "F") {
        counter [5]++;
      }
      else if (temp === "g" || temp === "G") {
        counter [6]++;
      }
      else if (temp === "h" || temp === "H") {
        counter [7]++;
      }
      else if (temp === "i" || temp === "I") {
        counter [8]++;
      }
      else if (temp === "j" || temp === "J") {
        counter [9]++;
      }
      else if (temp === "k" || temp === "K") {
        counter [10]++;
      }
      else if (temp === "l" || temp === "L") {
        counter [11]++;
      }
      else if (temp === "m" || temp === "M") {
        counter [12]++;
      }
      else if (temp === "n" || temp === "N") {
        counter [13]++;
      }
      else if (temp === "o" || temp === "O") {
        counter [14]++;
      }
      else if (temp === "p" || temp === "P") {
        counter [15]++;
      }
      else if (temp === "q" || temp === "Q") {
        counter [16]++;
      }
      else if (temp === "r" || temp === "R") {
        counter [17]++;
      }
      else if (temp === "s" || temp === "S") {
        counter [18]++;
      }
      else if (temp === "t" || temp === "T") {
        counter [19]++;
      }
      else if (temp === "u" || temp === "U") {
        counter [20]++;
      }
      else if (temp === "v" || temp === "V") {
        counter [21]++;
      }
      else if (temp === "w" || temp === "W") {
        counter [22]++;
      }
      else if (temp === "x" || temp === "X") {
        counter [23]++;
      }
      else if (temp === "y" || temp === "Y") {
        counter [24]++;
      }
      else if (temp === "z" || temp === "Z") {
        counter [25]++;
      }
    }
  }
      console.log(counter);//Used out of scope



  // return str;
}