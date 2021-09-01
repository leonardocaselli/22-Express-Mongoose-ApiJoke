//const jokesServices = require('../services/jokes.services')
const jokeServices = require('../services/jokes.services') //importa del servicio 



module.exports = {

    findAll: async (req, res) => {
        const listJokes = await jokeServices.findAll()
        res.send(listJokes)
    },
    findOneJoke: async ({ params: { _id } }, res) => {
        const findOneJokeForId = await jokeServices.findOneJoke(_id)
        res.send(findOneJokeForId)
    },

    createNewJoke: async ({ body }, res) => {
        const joke = await jokeServices.create(body)
        res.send({ joke })

    },
    deletJokeForId: async ({ params: { id } }, res) => {
        await jokeServices.deletJoke(id)
        res.send(" borrado ")
    },
    /*
    // updateJoke: async ({ params: { id } }, res) => {
    updateJoke: async (req, res) => {
        const { id } = req.params   //req.params.id se destructura id
        const body = req.body       //req.body se copia el valor a body 
        await jokesServices.updateJokServ(id,body)
        res.send(jokeServices.findOneJokeForId(id))
    }
    */
    updateJoke: async ({ params: { id }, body }, res) => {
        const joke = jokeServices.updateJokServ(id, body)
        res.send({ joke })
    }
}