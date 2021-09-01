const Mongoose = require('mongoose')

const jokeSchema = new Mongoose.Schema({

    setup: { type: String },
    punchine: { type: String },
},
    { timestamps: true })

module.exports = Mongoose.model('jokes', jokeSchema) //pasa jokeSchema a jokes