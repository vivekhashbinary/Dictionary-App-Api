var Dictionary = require("oxford-dictionary");


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
        // stringify JSON object to see full structure in console log
        let results = {
            "definitions": response.results[0].lexicalEntries[0].entries[0].senses[0].definitions,
            "examples": response.results[0].lexicalEntries[0].entries[0].senses[0].examples
        }
        res.send(JSON.stringify(results))
    }).catch((err) => {
        res.send(err)
    })
}

export function testFunction(req, res, next) {
    console.log(req.params.name)
    res.send("hello")
}

