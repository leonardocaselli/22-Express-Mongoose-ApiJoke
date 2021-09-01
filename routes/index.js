const { Router } = require('express')

const router = Router()

router.use('/jokes', require('./jokes'))


/*
router.use('/jokes', require('./joker'))                           //get
router.use('/jokes/_id', require('./jokes/_id'))                   //get
router.use('/jokes/random', require('./jokes/random'))             //get
router.use('/jokes/new', require('./joker/new'))                   //post
router.use('/jokes/update/_id', require('./joker/update/_id'))     //put
router.use('/jokes/delet/_id', require('./joker/delet/_id'))       //delet
*/
module.exports = router