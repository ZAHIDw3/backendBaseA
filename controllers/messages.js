const { request, response } = require("express")

const rootMessage = (req=request, res=response)=>{
    const {texto1, texto2} = req.query
    //if(!texto1 || !texto2){
        //res.status(400).json({
        //msg: "No se a podido enviar el mensaje, este EndPoint ocupa los parametros "texto1" y "texto2""
        //})
    //}

    if(!texto1){
        res.status(400).json({msg: "Falta el parámetro 'texto1'"})
    }

    if(!texto2){
        res.status(400).json({msg: "Falta el parámetro 'texto2'"})
    }
    res.status(200).json({msg:texto1 +' '+ texto2})
}

const hiMessage = (req=request, res=response)=>{
    const {name} = req.params
    res.status(200).json({msg:"Hola "+name})
}

const byeMessage = (req=request, res=response)=>{
    res.status(403).json({msg:"Adios mundo"})
}

const postMessage = (req=request, res=response)=>{
    res.status(406).json({msg:"mesaje POST"})
}

const putMessage = (req=request, res=response)=>{
    res.status(407).json({msg:"mesaje PUT"})
}

const deleteMessage = (req=request, res=response)=>{
    res.status(408).json({msg:"mesaje DELETE"})
}

module.exports={
    rootMessage,
    hiMessage,
    byeMessage,
    postMessage,
    putMessage,
    deleteMessage
}

module.exports={rootMessage,hiMessage,byeMessage,postMessage,putMessage,deleteMessage}