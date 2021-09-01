//const { createNewJoke } = require('../controllers/jokes.controller')
//const { findOneAndDelete } = require('../models/index')
const Joke = require('../models/index')   //importa el modelo 

module.exports = {
    findAll: async () => {
        const findJokes = await Joke.find({})
        return findJokes
    },
    findOneJoke: async (_id) => {
        try {
            const findOne = await Joke.find({ _id })
            return findOne
        } catch (err) {
            console.log('error')
        }
    },

    create: async body => {
        console.log("******** servicio create **********")
        console.log(body)
        const newJoke = new Joke(body)
        return await newJoke.save()
    },

    deletJoke: async id => {
        try {
            await Joke.findByIdAndDelete(id)

        }
        catch (err) {
            console.log('error')
        }


    },
    updateJokServ: async (id, body) => {
        try {
            const jokeUp = await Joke.findByIdAndUpdate(id, body, { new: true })
            console.log(jokeUp)
            return jokeUp
        }
        catch (err) {
            console.log('error')
        }

    }
}