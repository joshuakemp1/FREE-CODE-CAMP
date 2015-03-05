

// * ********************************************* *
// *  The following code shuffles a deck of cards  *
// * ********************************************* *

// Declare the deck of cards. To make it simple the deck has 14 cards.
// The myShuffledDeck array contains the position of the cards within
// the deck. Initially it is in the order you'd expect when you open
// brand new a deck of cards.

var myCardFace  = ["Ace", "King", "Queen", "Jack", "Ten", "Nine",      "Eight", "Seven", "Six"  , "Five", "Four", "Three", "Two", "Joker"];

var myShuffledDeck = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Lets Look at the deck of cards when we start and note that they
// are in order.

for (i = 0; i < myShuffledDeck.length; i++) {
      // window.alert(myCardFace[myShuffledDeck[i]]);
       console.log(myCardFace[myShuffledDeck[i]]);
}

// Now, lets shuffle the deck by randomly altering the myShuffledDeck
// array. We accomplish this by taking each element in the myShuffledDeck
// array, swapping it's value with another element in the myShuffledDeck
// array which we choose at random.

// window.alert("**shuffling!!**");
console.log("**shuffling!");

for (i = 0; i < myShuffledDeck.length; i++) {

      // pick a random other slot
         answer = (Math.random() * 1.3);
         ranNo = answer.toFixed(0);
      // swap them
         temp = myShuffledDeck[i];
         // console.log("This is first temp: " + temp);
         myShuffledDeck[i] = myShuffledDeck[ranNo];
         myShuffledDeck[ranNo] = temp;
         // console.log("This is myShuffledDeck[i]: " + myShuffledDeck[i]);
         // console.log(myShuffledDeck[i]);
         // console.log("This is myShuffledDeck[ranNo]: " + myShuffledDeck[ranNo]);
         // console.log("This is the final TEMP: " + temp);
}

//Now Lets see the shuffled deck

for (i = 0; i < myShuffledDeck.length; i++) {
      // window.alert(myCardFace[myShuffledDeck[i]]);
      console.log(myCardFace[myShuffledDeck[i]]);
}

// note: if you run this you get the shuffled deck in the same order
// each time. That is an indication that the random function is not
// truly random.
