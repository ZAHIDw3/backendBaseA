const express = require('express')
const messages = require('./routes/messager')
const cors = require("cors")

class Server{
    constructor(){
        this.app = express()
        this.paths ={
            messages:"/api/vi/messages"   
        }
        this.middlewares()
        this.routes()
    }

    routes(){      
        //this.app.get('/',(req, res)=>{
            //res.send('Hola mundo')
       // })
       this.app.use(this.paths.messages, messages)
    }

    middlewares(){
        this.app.use(cors()) //Permite solicitudes de origen cruzado
        this.app.use(express.json()) //Habilita la lectura de contendi en formato JSON
    }

    listen(){
        this.app.listen(process.env.PORT,()=> {
            console.log("Backend en ejecución en el puerto", process.env.PORT)
        })
    }
}

module.exports=Server