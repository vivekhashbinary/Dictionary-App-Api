import mongoose from "mongoose";

const MeaningSchema = mongoose.Schema({
    word: {
        type: String,
        required: true
    },
    definitions: {
        type: Array
    },
    examples: {
        type: Array
    }
})

module.exports = mongoose.model('Meaning', MeaningSchema);