const { Router } = require('express')
const jokeControllers = require('../controllers/jokes.controller')
const router = Router()

router.get("/", jokeControllers.findAll)  //envia informacion jokes.controller
router.get("/:_id", jokeControllers.findOneJoke)  // : es para reconocer que viene un dato id no es parte de la ruta  

router.get("/random", (req, res) => {
    res.json({ mensage: "desde random " })

})

router.post("/new", jokeControllers.createNewJoke)
router.put("/updata/:id", jokeControllers.updateJoke)
router.delete("/delet/:id", jokeControllers.deletJokeForId)
module.exports = router