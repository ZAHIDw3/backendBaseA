const {Router} = require("express")
const router= Router()
const {
    rootMessage,
    hiMessage,
    byeMessage
} = require('../controllers/messages.js')

router.get('/',rootMessage)

router.get('/h1',hiMessage)

router.get('/bye',byeMessage)

module.exports = router