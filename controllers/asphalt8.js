const { request, response } = require("express");
const pool=require("../db/connection");
const modeloVeiculos = require("../models/asphalt8");

const getVeiculos = async(req=request,res=response)=>{
    
    let conn;

    try{
        conn = await pool.getConnection()
        const vehiculos = await conn.query(modeloVeiculos.queryGetVeiculos,(error)=>{throw new error})
        if(!vehiculos){
            res.status(404).json({msg:"No se encontraron registros"})
            return
        }
        res.json({vehiculos})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}


const getVeiculosByID = async (req=request,res=response)=>{
    const {id}=req.params
    let conn;

    try{
        conn = await pool.getConnection()
        const [vehiculo] = await conn.query(modeloVeiculos.queryVeiculosByID,[id],(error)=>{throw new error})
        if(!vehiculo){
            res.status(404).json({msg:`No se encontró registro con el ID=${id}`})
            return
        }
        res.json({vehiculo})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}


const deleteVeiculoByID = async (req=request,res=response)=>{
    const {id}=req.query
    let conn;

    try{
        conn = await pool.getConnection()
        const {affectedRows} = await conn.query(modeloVeiculos.queryDeleteVeiculoByID,[id],(error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo eliminar el registro con el ID=${id}`})
            return
        }
        res.json({msg:`El vehiculo con el ID=${id} se elimino correctamente`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}


const addVeiculo = async (req=request,res=response)=>{
    const {
        Marca,
        Nombre,
        Tipo,
        Color,
        Clase,
        RangoInicial,
        RangoMax,
        Aceleracion,
        VelocidadMax,
        Manejo,
        Nitro,
        Precio,
        Activo
    }=req.body

    if(
        !Marca||
        !Nombre||
        !Tipo||
        !Color||
        !Clase||
        !RangoInicial||
        !RangoMax||
        !Aceleracion||
        !VelocidadMax||
        !Manejo||
        !Nitro||
        !Precio||
        !Activo
    ){
        res.status(400).json({msg:"Falta información del veiculo."})
        return
    }
    let conn;
    try{
        conn = await pool.getConnection()
        const [user]=await conn.query(modeloVeiculos.queryVeiculoExists,[Nombre])
        if(user){
            res.status(403).json({msg:`El veiculo '${Nombre}' ya se encuentra registrado.`})
            return
        }

        const {affectedRows} = await conn.query(modeloVeiculos.queryAddVeiculo,[
            Marca,
            Nombre,
            Tipo,
            Color,
            Clase,
            RangoInicial,
            RangoMax,
            Aceleracion,
            VelocidadMax,
            Manejo,
            Nitro,
            Precio,
            Activo
        ],(error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo agregar el registro del veiculo ${Nombre}`})
            return
        }
        res.json({msg:`El veiculo ${Nombre} se agregó correctamente`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}


const updateVeiculo = async (req=request,res=response)=>{
    const {
        Nombre,
        Color,
        Clase,
        RangoInicial,
        RangoMax,
        Aceleracion,
        VelocidadMax,
        Manejo,
        Nitro,
        Precio,
        Activo
    }=req.body

    if(
        !Nombre
    ){
        res.status(400).json({msg:"Falta información del vehiculo."})
        return
    }

    let conn;

    try{
        conn = await pool.getConnection()
        const [user]=await conn.query(modeloVeiculos.queryGetVeiculoInfo,[Nombre])

        if(!user){
            res.status(403).json({msg:`El vehiculo '${Nombre}' no se encuentra registrado.`})
            return
        }
        const {affectedRows} = await conn.query(modeloVeiculos.queryUpdateByVeiculo,[
            Color||user.Color,
            Clase||user.Clase,
            RangoInicial||user.RangoInicial,
            RangoMax||user.RangoMax,
            Aceleracion||user.Aceleracion,
            VelocidadMax||user.VelocidadMax,
            Manejo||user.Manejo,
            Nitro||user.Nitro,
            Precio||user.Precio,
            Activo||user.Activo,
            Nombre
        ],(error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo actualizar el registro del vehiculo ${Nombre}`})
            return
        }
        res.json({msg:`El vehiculo ${Nombre} se actualizo correctamente`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}


module.exports={getVeiculos,getVeiculosByID,deleteVeiculoByID,addVeiculo,updateVeiculo} 