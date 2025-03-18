const usuarios = require('../services/usuarioService');

class UsuarioController{
    static async ListarUsuario(req,res){
        try{
            let ListUsuario = await usuarios.ListarUsuario();
            res.json(ListUsuario);
        }catch(error){
            res.json({error: "error en la peticion listar usuario"});
            
        }
    }
    static async CrearUsuario(req,res){
        try{
            let {nombre, correo, telefono} = req.body;
            let CreaUsuario = await usuarios.CrearUsuario(nombre, correo, telefono);
            res.json(CreaUsuario);
        }catch(error){
            res.json({error: "error en la peticion crear usuario"});
            
        }
    }
    static async EliminarUsuario(req,res){
        try{
            let {id} = req.params;
            let ElimUsuario = await usuarios.EliminarUsuario(id);
            res.json("el usuario se ha eliminado");
        }catch(error){
            res.json({error: "error en la peticion eliminar usuario"});
            
        }
    }
    static async ActualizarUsuario(req,res){
        try{
            let {id} = req.params;
            let {nombre, correo, telefono} = req.body;
            let ActUsuario = await usuarios.ActualizarUsuario(id, nombre, correo, telefono);
            res.json(req.body);       
            
        }catch(error){
            res.json({error:"error al actualizar usuario"});            
            
        }
    }
}
module.exports = UsuarioController;
    
