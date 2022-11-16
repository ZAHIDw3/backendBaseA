const {Router} = require("express")
const { getVeiculos, getVeiculosByID, deleteVeiculoByID, addVeiculo, updateVeiculo } = require("../controllers/asphalt8")
const router = Router()

//http://localhost:4000/api/v1/asphalt8

//GET
router.get("/", getVeiculos)
router.get("/id/:id", getVeiculosByID) //id/1

//DELETE
router.delete("/", deleteVeiculoByID)  //?id=1

//POST
router.post("/",addVeiculo)

//PUT
router.put("/",updateVeiculo)


module.exports = router