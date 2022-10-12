const { request, response } = require("express");

const getUser = (req=request,res=response)=>{
    console.log("Función getUser")
    res.json({msg:"Función getUser"})
}

module.exports={getUser}