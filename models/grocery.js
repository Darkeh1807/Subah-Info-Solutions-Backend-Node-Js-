const mongoose = require("mongoose")
const grocerySchema = mongoose.model('grocery', {
    image: String,
    title: String,
    pieces: Number,
    price: Number
})

module.exports = grocerySchema;