// card pngs from open source archive at https://code.google.com/archive/p/vector-playing-cards/

// draw cards functionality adapted from code initially found at 
    // https://stackoverflow.com/questions/61161286/how-to-randomly-select-a-card-from-a-deck-of-cards-and-not-select-it-again

var drawnCardsDisplay = document.getElementById('drawnCards');
var cards = [
    'ace_of_clubs',
    '2_of_clubs',
    '3_of_clubs',
    '4_of_clubs',
    '5_of_clubs',
    '6_of_clubs',
    '7_of_clubs',
    '8_of_clubs',
    '9_of_clubs',
    '10_of_clubs',
    'jack_of_clubs',
    'queen_of_clubs',
    'king_of_clubs',
    'ace_of_diamonds',
    '2_of_diamonds',
    '3_of_diamonds',
    '4_of_diamonds',
    '5_of_diamonds',
    '6_of_diamonds',
    '7_of_diamonds',
    '8_of_diamonds',
    '9_of_diamonds',
    '10_of_diamonds',
    'jack_of_diamonds',
    'queen_of_diamonds',
    'king_of_diamonds',
    'ace_of_hearts',
    '2_of_hearts',
    '3_of_hearts',
    '4_of_hearts',
    '5_of_hearts',
    '6_of_hearts',
    '7_of_hearts',
    '8_of_hearts',
    '9_of_hearts',
    '10_of_hearts',
    'jack_of_hearts',
    'queen_of_hearts',
    'king_of_hearts',
    'ace_of_spades',
    '2_of_spades',
    '3_of_spades',
    '4_of_spades',
    '5_of_spades',
    '6_of_spades',
    '7_of_spades',
    '8_of_spades',
    '9_of_spades',
    '10_of_spades',
    'jack_of_spades',
    'queen_of_spades',
    'king_of_spades'
];

var currentCards = [];

function drawCard() {
    // ue cards here instead of currentCards
    var randomNumber = Math.floor(Math.random() * (cards.length - 1));
    
    currentCards.push(
      // Run an immediately self executing function expression
      (function(){
        // store the elected card temorarily
        var tempSelectedCard = cards[randomNumber];
        // Remove that card from the main cards
        cards = getUnDrawnCards(randomNumber);
        // return the selected card and store it inside the currentCards array
        return tempSelectedCard;
      })()
    );
    // After Drawing the card, display it.
    showDrawnCards(currentCards);
}

function getUnDrawnCards(cardPositionToBeRemoved) // returns card[]
{
  if(cardPositionToBeRemoved)
  {
    // create a temporary array storage
    var tempNewCards = [];
    
    // Loop through the cards
    cards.forEach(function(card, index)
    {
      // if the card to be removed does matches the current card position
      if(index !== cardPositionToBeRemoved)
      {
        // Add it to the tempArrayList
        tempNewCards.push(cards[index]);
      }
      // At tis poist the matched index will not be part of the cards anymore
    });
    
    // Return tempNewCards
    return tempNewCards;
  }
  return [];
}

function showDrawnCards(drawnCardsArray)
{
  if(drawnCardsArray.length > 0)
  {
    drawnCardsDisplay.innerHTML = '';
    drawnCardsArray.map(function(card)
    {
      var drawn_card = document.createElement('span');
      drawn_card.innerHTML = card;
      //drawnCardsDisplay.appendChild(drawn_card);
      document.getElementById("cards").src = `https://github.com/cbeckler/kings-cup-web-game/blob/main/resources/${drawn_card}.png`
    });
  }
}