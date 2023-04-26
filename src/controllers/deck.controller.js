const { newDeck} = require('../services/deck.service')


exports.newDeck = (req, res) => {
    const deck = newDeck();
    res.json({deck: deck})
}