// card pngs from open source archive at https://code.google.com/archive/p/vector-playing-cards/

// draw cards functionality adapted from code initially found at 
    // https://stackoverflow.com/questions/61161286/how-to-randomly-select-a-card-from-a-deck-of-cards-and-not-select-it-again

const selectableCards= [
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

const currentCard = {}
const cardsAlreadySelected = []
const kingsCup = 0

const drawCard = () => {
  const randomNumber = Math.floor(Math.random() * (selectableCards.length))
  const currentCard = selectableCards.splice(randomNumber, 1)
  //console.log(currentCard.length)
  //document.getElementById("cards").src = `assets/js/games/cards/${currentCard}.png`
  //testing image display code from https://stackoverflow.com/questions/17634019/javascript-load-an-image-from-url-and-display
  document.getElementById('draw card').onclick - function() {
    var val = document.getElementById('currentCard').value,
    src = 'https://github.com/cbeckler/kings-cup-web-game/blob/main/resources/' + val + '.png',
    img = document.createElement('img');

    img.src = src;
    document.body.appendChild(img);
  }
};
