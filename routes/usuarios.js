const {Router} = require("express")
const {getUser} = require("../controllers/usuarios")
const router = Router()

//http://localhost:4000/api/v1/usuarios

router.get("/", getUser)

module.exports = router