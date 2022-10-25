const {Router} = require("express")
const {getUser, getUserByID, deleteUserByID, addUser} = require("../controllers/usuarios")
const router = Router()

//http://localhost:4000/api/v1/usuarios

//GET
router.get("/", getUser)
router.get("/id/:id", getUserByID)

//DELETE
router.delete("/",deleteUserByID)

//POST
router.post("/",addUser)

module.exports = router