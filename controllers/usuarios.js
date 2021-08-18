const{ request, response } = require("express");

const usuariosGet = (req = request, res = response) =>{
    res.json({msg:"Hola,estas usando GET"});
};

const usuariosPost = (req = request, res = response) => {
    const { nombre, apellido, email, edad = 0 } = req.body;
     res.status(201).json({msg:'Hola, estas usando POST', edad});
};

const usuariosPut = (req = request, res = response) => {
    const { id } = req.params;
      res.status(400).json({msg:'Hola, estas usando PUT', id});
};

const usuariosDelete = (req = request, res = response) => {
    const data = req.query;
      res.status(500).json({msg:'Hola, estas usando DELETE', data});
};
module.exports = {usuariosGet, usuariosPost, usuariosPut, usuariosDelete};