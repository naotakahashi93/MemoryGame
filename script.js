const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

let card1 = ""; 
let card2 = "";
let clickBlock = false; // the variable to use to stop the function from running aka stop clicking.
let flippedCards = 0;

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}


// TODO: Implement this function!
function handleCardClick(event) {
  if (clickBlock) return;
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);

  // revealing the color under each div and adding class that its been flipped
let clickedCard = event.target;
clickedCard.style.background = clickedCard.className;
clickedCard.classList.add("flipped");


// if (cardCounter === 0) {
//     card1 = clickedCard.className;
//     cardCounter ++;
//     console.log(cardCounter);
//   }

  if (!card1){   // if card1 is empty
card1= clickedCard; // set the clicked card to card1
card1.removeEventListener("click", handleCardClick); // and stop the click from happening again to card1
}

else if (!card2){ // if card2 is empty
  card2=clickedCard; // set the clicked card to be card 2;
  card1.addEventListener("click", handleCardClick)// and allow the clicking to happen again for the next round
}


if (card1 && card2) { // if there are values in both cards..
 clickBlock = true; // then turn the clickblock on and hault the function from running to prevent further clicks (not clicking more than 2 cards)
  let name1 = card1.className;
  let name2 = card2.className;
  console.log('names: ', name1, name2);


  // this will make the same colored cards stay up
  if (name1 === name2){ // if both the names (aka color) of card 1 and card 2 are the same then..
 flippedCards+=2; //add 2 (the two cards) to the flipped card counter
  card1.removeEventListener("click", handleCardClick); // 2 seconds later - remove the event listeners on the matched cards so you cant click on it again.
  card2.removeEventListener("click", handleCardClick);
  card1=""; // and reset the cards back to null again
  card2="";
  clickBlock = false; // turn clickblock off again so we can select more cards
  }
  else { // if the cards are not the same color
  setTimeout(function (){
    card1.style.background = ""; // 2 seconds later - change the card back to white
    card2.style.background = "";
    card1.classList.remove("flipped"); // unflip them by removing the flipped class
    card2.classList.remove("flipped");
    card1=""; // and reset the cards back to null again
    card2=""; 
    clickBlock = false; // turn clickblock off again so we can select more cards
  }, 2000);
 
  }

if (flippedCards === COLORS.length){
console.log("GAME OVER");
}
}




  // else if (cardCounter === 1){
  //   card2 = clickedCard.className;
  //   // cardCounter =0;
  //   console.log(cardCounter);
  // }
  
// console.log("card1", card1, "card2", card2);
  }

// if (cardCounter.length == 1) {
//   card2 = clickedCard.className;
//   cardCounter.push(card2);
//   cardCounter = [];
//   console.log(cardCounter);
// };
// card2 = null;
//   cardCounter.push(card1);
//   console.log(cardCounter);

// console.log("card1", card1, "card2", card2);



// const cards = document.querySelectorAll("div");
 // if (event.target.tagName === "DIV"){

  //   for (let i = 1; i<cards.length; i++){
  //     cards[i].style.background = cards[i].className;
  // }};






// when the DOM loads
createDivsForColors(shuffledColors);

/* */