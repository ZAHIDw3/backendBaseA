const {Router} = require("express")
const {getUser, getUserByID} = require("../controllers/usuarios")
const router = Router()

//http://localhost:4000/api/v1/usuarios

router.get("/", getUser)
router.get("/id/:id", getUserByID)

module.exports = router