const express = require('express');
const router = express.Router();
var Dictionary = require("oxford-dictionary");
import Meaning from '../models/meaning.model'
const { testFunction, getDefinition } = require('../controllers/Dictionary.controller');

router.get('/getword/:word', getDefinition)

router.post('/post', async (req, res, next) => {
    let post = new Meaning({
        word: "happy",
        definitions: ["feeling or showing pleasure or contentment"],
        examples: [{ "text": "Melissa came in looking happy and excited" }, { "notes": [{ "text": "with clause", "type": "grammaticalNote" }], "text": "we're just happy that he's still alive" }, { "notes": [{ "text": "with infinitive", "type": "grammaticalNote" }], "text": "they are happy to see me doing well" }]
    })
    await post.save().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router;

