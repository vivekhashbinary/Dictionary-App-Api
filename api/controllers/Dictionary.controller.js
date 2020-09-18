var Dictionary = require("oxford-dictionary");
import { json } from 'body-parser';
import Meaning from '../models/meaning.model'

//function to fetch new word from oxfordAPI
export function getDefinition(req, res) {
    let word = req.params.word
    var config = {
        app_id: process.env.OXFORD_APP_ID,
        app_key: process.env.OXFORD_APP_KEY,
        source_lang: "en-us"
    };

    var dict = new Dictionary(config);

    var lookup = dict.find(word);

    lookup.then((response) => {
        let results = {
            "definitions": response.results[0].lexicalEntries[0].entries[0].senses[0].definitions,
            "examples": response.results[0].lexicalEntries[0].entries[0].senses[0].examples,
            "word": word
        }
        res.send(results)
    }).catch((err) => {
        res.send(err)
    })
}

//function to post details of word to mongoDB
export const postWord = async (req, res) => {
    let body = req.body;
    let post = new Meaning(body)
    await post.save().then(data => {
        console.log(data)
        res.json(data)
    }).catch(err => {
        console.log(err)
        res.json(err)
    })
}

//function to get all words from mongoDB
export const getAllWords = async (req, res) => {
    try {
        const words = await Meaning.find();
        console.log(words.length);
        res.json(words);
    } catch(e) {
        console.log("Error", e);
        res.json(e);
    }
}

