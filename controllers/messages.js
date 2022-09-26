const { request, response } = require("express")

const rootMessage = (req, res)=>{
    res.send('Hola buen dia')
}

const hiMessage = (req=request, res=response)=>{
    res.json({msg:"Hola mundo"})
}

const byeMessage = (req, res)=>{
    res.send('Adios mundo')
}

const postMessage = (req, res)=>{
    res.send('mesaje POST')
}

const putMessage = (req, res)=>{
    res.send('mesaje PUT')
}

const deleteMessage = (req, res)=>{
    res.send('mesaje DELETE')
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