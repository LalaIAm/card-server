const express = require('express')
const deckCtrl = require('../controllers/deck.controller') 

const router = express.Router();


router.route('/').get(deckCtrl.newDeck)


module.exports = router;