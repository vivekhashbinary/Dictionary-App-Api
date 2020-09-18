const express = require('express');
const router = express.Router();
var Dictionary = require("oxford-dictionary");
import Meaning from '../models/meaning.model'
const { testFunction, getDefinition, getAllWords, postWord } = require('../controllers/Dictionary.controller');

router.get('/getword/:word', getDefinition)

router.post('/post', postWord)

router.get('/allwords', getAllWords)

module.exports = router;

