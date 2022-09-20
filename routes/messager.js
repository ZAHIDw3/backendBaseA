const {Router} = require("express")
const router= Router()

router.get('/',(req, res)=>{res.send('Hola buen dia')})

module.exports = router