// card pngs from open source archive at https://code.google.com/archive/p/vector-playing-cards/

// draw cards functionality adapted from code initially found at 
    // https://stackoverflow.com/questions/61161286/how-to-randomly-select-a-card-from-a-deck-of-cards-and-not-select-it-again

    var drawnCardsDisplay = document.getElementById('drawnCards');
    var cards = [
        'clubs-ace',
        'clubs-2',
        'clubs-3',
        'clubs-4',
        'clubs-5',
        'clubs-6',
        'clubs-7',
        'clubs-8',
        'clubs-9',
        'clubs-10',
        'clubs-jack',
        'clubs-queen',
        'clubs-king',
        'diamonds-ace',
        'diamonds-2',
        'diamonds-3',
        'diamonds-4',
        'diamonds-5',
        'diamonds-6',
        'diamonds-7',
        'diamonds-8',
        'diamonds-9',
        'diamonds-10',
        'diamonds-jack',
        'diamonds-queen',
        'diamonds-king',
        'hearts-ace',
        'hearts-2',
        'hearts-3',
        'hearts-4',
        'hearts-5',
        'hearts-6',
        'hearts-7',
        'hearts-8',
        'hearts-9',
        'hearts-10',
        'hearts-jack',
        'hearts-queen',
        'hearts-king',
        'spades-ace',
        'spades-2',
        'spades-3',
        'spades-4',
        'spades-5',
        'spades-6',
        'spades-7',
        'spades-8',
        'spades-9',
        'spades-10',
        'spades-jack',
        'spades-queen',
        'spades-king'
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
          drawnCardsDisplay.appendChild(drawn_card);
        });
      }
    }