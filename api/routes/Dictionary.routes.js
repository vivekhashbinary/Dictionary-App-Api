const express = require('express');
const router = express.Router();
const { getDefinition, getAllWords, postWord } = require('../controllers/Dictionary.controller');

//get details of the word from oxfordAPI
router.get('/getword/:word', getDefinition)

//post word detail to mongoDB
router.post('/post', postWord)

//fetch all words from mongoDB
router.get('/allwords', getAllWords)

module.exports = router;

