/* Please create a javascript class that represents a deck of cards. Please include any methods or properties on the class that you think might be applicable to using a deck of cards. Create the UI for one game that will use this deck of cards. This game can be any game you like, even a game that you created just for this assignment

Requirements:
Create class that represents a deck of cards
Create an HTML/CSS UI for a game that interacts with this deck of cards class
Please make sure there is a valid package.json file in the root of the repo
Upload this homework to a github repository or a github gist
*/
console.log('JS LOADED');
class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }

  takeCards(cards) {
    this.hand = cards;
  }

  showHand() {
    console.log(`Showing ${this.name}'s hand...`);
    console.log(this.hand);
  }

  dominionAttempt() {
    const currentCard = this.hand[this.hand.length - 1];
    cardSection.src = currentCard.imageUrl;
    const hasKingOfDiamonds = !!this.hand.find(
      (card) => card.rank === 'King' && card.suit === 'Diamonds'
    );
    if (hasKingOfDiamonds) {
      console.log(`Winning Hand (${this.name}) =>`, this.hand);
      cardSection.src = './pics/crown.jpg';
      winnerText.innerText = `${this.name} is the new King!`;
      p1AttemptButton.classList.add('hidden');
      p2AttemptButton.classList.add('hidden');
    }
    this.hand.pop();
    return hasKingOfDiamonds;
  }
}

class Card {
  constructor(suit, rank, imageUrl) {
    this.suit = suit;
    this.rank = rank;
    this.imageUrl = imageUrl;
  }
}

class DeckOfCards {
  constructor(cards) {
    this.cards = cards;
    this.cardsInDeck = this.cards.length;
    this.originalDeck = [...cards];
  }

  resetDeck() {
    this.cards = this.originalDeck;
  }

  revealDeck() {
    for (let card of this.cards) {
      console.log(`${card.rank} of ${card.suit}`);
    }
  }

  deal(cardsToDeal) {
    if (cardsToDeal > this.remainigNumberOfCards) {
      console.warn('Not enough cards in the deck.');
      cardSection.src = './pics/game-over.jpg';
      winnerText.innerText = "It's a tie. No Kings this round! Try again!";
      this.resetDeck();
    }

    const dealtDeck = [];

    for (let i = 0; i < cardsToDeal; i++) {
      dealtDeck.push(this.removeCard());
    }
    return dealtDeck;
  }

  shuffle() {
    if (this.remainigNumberOfCards < 2) {
      console.warn(
        'You can only shuffle 2 or more cards. Please add cards now.'
      );
      return false;
    }

    this.cards = this.cards
      .map((card) => ({ sortValue: Math.random(), value: card }))
      .sort((card1, card2) => card1.sortValue - card2.sortValue)
      .map((card) => card.value);

    return this.cards;
  }

  cut() {
    if (!this.cards.length > 1) {
      console.warn(
        'There must be at least 2 cards in the deck to cut the deck'
      );
      return false;
    }
    const half = Math.ceil(this.cards.length / 2);
    const deckOne = this.cards.splice(0, half);
    const deckTwo = this.cards.splice(-half);

    // console.log("deckOne =>", deckOne)
    // console.log("deckTwo =>", deckTwo)
  }

  removeCard() {
    if (!this.remainigNumberOfCards) {
      console.error(
        'There are no cards in this deck. Please add cards to perfom this method.'
      );
      return null;
    }

    this.cardsInDeck -= 1;
    return this.cards.pop();
  }

  addCard() {
    this.cardsInDeck += 1;
  }

  get remainigNumberOfCards() {
    return this.cardsInDeck;
  }
}

const aceOfClubs = new Card('Clubs', 'Ace', './pics/AC.jpg');
const twoOfClubs = new Card('Clubs', '2', './pics/2C.jpg');
const threeOfClubs = new Card('Clubs', '3', './pics/3C.jpg');
const fourOfClubs = new Card('Clubs', '4', './pics/4C.jpg');
const fiveOfClubs = new Card('Clubs', '5', './pics/5C.jpg');
const sixOfClubs = new Card('Clubs', '6', './pics/6C.jpg');
const sevenOfClubs = new Card('Clubs', '7', './pics/7C.jpg');
const eightOfClubs = new Card('Clubs', '8', './pics/8C.jpg');
const nineOfClubs = new Card('Clubs', '9', './pics/9C.jpg');
const tenOfClubs = new Card('Clubs', '10', './pics/10C.jpg');
const jackOfClubs = new Card('Clubs', 'Jack', './pics/JC.jpg');
const queenOfClubs = new Card('Clubs', 'Queen', './pics/QC.jpg');
const kingOfClubs = new Card('Clubs', 'King', './pics/KC.jpg');

const aceOfDiamonds = new Card('Diamonds', 'Ace', './pics/AD.jpg');
const twoOfDiamonds = new Card('Diamonds', '2', './pics/2D.jpg');
const threeOfDiamonds = new Card('Diamonds', '3', './pics/3D.jpg');
const fourOfDiamonds = new Card('Diamonds', '4', './pics/4D.jpg');
const fiveOfDiamonds = new Card('Diamonds', '5', './pics/5D.jpg');
const sixOfDiamonds = new Card('Diamonds', '6', './pics/6D.jpg');
const sevenOfDiamonds = new Card('Diamonds', '7', './pics/7D.jpg');
const eightOfDiamonds = new Card('Diamonds', '8', './pics/8D.jpg');
const nineOfDiamonds = new Card('Diamonds', '9', './pics/9D.jpg');
const tenOfDiamonds = new Card('Diamonds', '10', './pics/10D.jpg');
const jackOfDiamonds = new Card('Diamonds', 'Jack', './pics/JD.jpg');
const queenOfDiamonds = new Card('Diamonds', 'Queen', './pics/QD.jpg');
const kingOfDiamonds = new Card('Diamonds', 'King', './pics/KD.jpg');

const aceOfHearts = new Card('Hearts', 'Ace', './pics/AH.jpg');
const twoOfHearts = new Card('Hearts', '2', './pics/2H.jpg');
const threeOfHearts = new Card('Hearts', '3', './pics/3H.jpg');
const fourOfHearts = new Card('Hearts', '4', './pics/4H.jpg');
const fiveOfHearts = new Card('Hearts', '5', './pics/5H.jpg');
const sixOfHearts = new Card('Hearts', '6', './pics/6H.jpg');
const sevenOfHearts = new Card('Hearts', '7', './pics/7H.jpg');
const eightOfHearts = new Card('Hearts', '8', './pics/8H.jpg');
const nineOfHearts = new Card('Hearts', '9', './pics/9H.jpg');
const tenOfHearts = new Card('Hearts', '10', './pics/10H.jpg');
const jackOfHearts = new Card('Hearts', 'Jack', './pics/JH.jpg');
const queenOfHearts = new Card('Hearts', 'Queen', './pics/QH.jpg');
const kingOfHearts = new Card('Hearts', 'King', './pics/KH.jpg');

const aceOfSpades = new Card('Spades', 'Ace', './pics/AS.jpg');
const twoOfSpades = new Card('Spades', '2', './pics/2S.jpg');
const threeOfSpades = new Card('Spades', '3', './pics/3S.jpg');
const fourOfSpades = new Card('Spades', '4', './pics/4S.jpg');
const fiveOfSpades = new Card('Spades', '5', './pics/5S.jpg');
const sixOfSpades = new Card('Spades', '6', './pics/6S.jpg');
const sevenOfSpades = new Card('Spades', '7', './pics/7S.jpg');
const eightOfSpades = new Card('Spades', '8', './pics/8S.jpg');
const nineOfSpades = new Card('Spades', '9', './pics/9S.jpg');
const tenOfSpades = new Card('Spades', '10', './pics/10S.jpg');
const jackOfSpades = new Card('Spades', 'Jack', './pics/JS.jpg');
const queenOfSpades = new Card('Spades', 'Queen', './pics/QS.jpg');
const kingOfSpades = new Card('Spades', 'King', './pics/KS.jpg');

const deck = new DeckOfCards([
  aceOfClubs,
  twoOfClubs,
  threeOfClubs,
  fourOfClubs,
  fiveOfClubs,
  sixOfClubs,
  sevenOfClubs,
  eightOfClubs,
  nineOfClubs,
  tenOfClubs,
  jackOfClubs,
  queenOfClubs,
  kingOfClubs,
  aceOfDiamonds,
  twoOfDiamonds,
  threeOfDiamonds,
  fourOfDiamonds,
  fiveOfDiamonds,
  sixOfDiamonds,
  sevenOfDiamonds,
  eightOfDiamonds,
  nineOfDiamonds,
  tenOfDiamonds,
  jackOfDiamonds,
  queenOfDiamonds,
  kingOfDiamonds,
  aceOfHearts,
  twoOfHearts,
  threeOfHearts,
  fourOfHearts,
  fiveOfHearts,
  sixOfHearts,
  sevenOfHearts,
  eightOfHearts,
  nineOfHearts,
  tenOfHearts,
  jackOfHearts,
  queenOfHearts,
  kingOfHearts,
  aceOfSpades,
  twoOfSpades,
  threeOfSpades,
  fourOfSpades,
  fiveOfSpades,
  sixOfSpades,
  sevenOfSpades,
  eightOfSpades,
  nineOfSpades,
  tenOfSpades,
  jackOfSpades,
  queenOfSpades,
  kingOfSpades,
]);

deck.shuffle();

const p1 = new Player('Anthony');
const p2 = new Player('Tony');

p1.takeCards(deck.deal(5));

p2.takeCards(deck.deal(5));

function startGame() {
  let shouldContinueGame = true;
  while (shouldContinueGame) {
    if (p1.hand.length < 1 && p2.hand.length < 1) {
      p1.takeCards(deck.deal(5));
      p2.takeCards(deck.deal(5));
    } else if (p1.dominionAttempt()) {
      console.log(`${p1.name} wins!!!`);
      shouldContinueGame = false;
    } else if (p2.dominionAttempt()) {
      console.log(`${p2.name} wins!!!`);
      shouldContinueGame = false;
    }
  }
}

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {
  resetGame();
});
const winnerText = document.querySelector('.winner-text');
const cardSection = document.querySelector('.card-reveal');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const playerNameInput = document.querySelector('.player-name-input');
const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!player1.innerText) {
    player1.innerText = playerNameInput.value;
    const p1 = new Player(playerNameInput.value);
    playerNameInput.value = '';
  } else if (!player2.innerText) {
    player2.innerText = playerNameInput.value;
    const p2 = new Player(playerNameInput.value);
    playerNameInput.value = '';
    p1AttemptButton.classList.remove('hidden');
    p2AttemptButton.classList.remove('hidden');
    form.classList.add('hidden');
  }
});

const addPlayerSection = document.querySelector('.add-player-section');
const addPlayerButton = document.querySelector('.add-player');
addPlayerButton.addEventListener('click', () => {
  addPlayerSection.classList.remove('hidden');
});

const p1AttemptButton = document.querySelector('.player1-attempt');
const p2AttemptButton = document.querySelector('.player2-attempt');

p1AttemptButton.addEventListener('click', () => {
  if (p1.hand.length < 1) {
    p1.takeCards(deck.deal(5));
  }
  playerAttempt(p1);
});
p2AttemptButton.addEventListener('click', () => {
  if (p2.hand.length < 1) {
    p2.takeCards(deck.deal(5));
  }
  playerAttempt(p2);
});

function playerAttempt(player) {
  return player.dominionAttempt();
}

function resetGame() {
  cardSection.src = './pics/cards.jpg';
  p1AttemptButton.classList.add('hidden');
  p2AttemptButton.classList.add('hidden');
  addPlayerSection.classList.add('hidden');
  form.classList.remove('hidden');
  winnerText.innerText = '';
  player1.innerText = '';
  player2.innerText = '';
  deck.resetDeck();
  p1.hand = [];
  p2.hand = [];
}
