const cardMap = require('../data/cards.json');

const isReversed = () => {
    let i = Math.random();
    return i > 0.5 ? false : true;
}


function createDeck() {
  const numCards = 78;
  let deck = [];
  for (let i = 0; i < numCards; i++) {
    let card = {
      id: i,
      reversed: isReversed(),
    };
    deck.push(card);
  }
  return deck;
}

function shuffle(deck) {
  let index = deck.length;
  let randomIndex;

  while (index !== 0) {
    randomIndex = Math.floor(Math.random() * index);
    index--;

    [deck[index], deck[randomIndex]] = [deck[randomIndex], deck[index]];
  }
  return deck;
}

const populateDeck = (cardArray) => {
  let cards = [];

  for (let i = 0; i < cardArray.length; i++) {
    let cardIndex = cardArray[i].id;

    let cardData = cardMap[cardIndex];

    let newCard = {
      id: cardIndex,
      reversed: cardArray[i].reversed,
      ...cardData,
      image: `https://gfx.tarot.com/images/site/decks/smith-waite/full_size/${i}.jpg`,
    };
    cards.push(newCard);
  }
  return cards;
};

exports.newDeck = () => {
  let deck = createDeck();

  deck = populateDeck(deck);

  deck = shuffle(deck);
  deck = shuffle(deck);
  deck = shuffle(deck);

  return deck;
};
