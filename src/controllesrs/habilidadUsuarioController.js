const { request , response}= require(`express`);
const HabilidadUsuario = require (`../models/habilidad_usuario`);

const crear_habilidad_usuario=async(req=request, res=response)=>{
    try{
        const data = req.body;
        const nuevaRelacion =await HanbilidadUsuario.create(data);
        res.status(201).send({data: nuevaRelacion});
    } catch (error){
        console.error(error);
        res.status(500).send({msg: `Error,Error`, data: undefined});
    }
};

module.exports ={
    crear_habilidad_usuario
}