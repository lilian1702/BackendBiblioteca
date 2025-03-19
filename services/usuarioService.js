const {Usuarios}=require('../models')

class UsuarioService{
    static async CrearUsuario(nombre, correo, telefono){
        try{
            return await Usuarios.create({nombre,correo,telefono});

        }catch(error){
            console.log("error al crear usuario")

        }
    }

    static async ListarUsuario(){
        try{
            return await Usuarios.findAll();

        }catch(error){
            console.log("error en listar usuarios")

        }
    }
    static async EliminarUsuario(id){
        try{
            return await Usuarios.destroy({where: {id}});

        }catch(error){
            console.log("error al eliminar usuario")

        }
    }
    static async ActualizarUsuario(id, nombre, correo, telefono){
        try{
            return await Usuarios.update({nombre,correo,telefono},{where: {id}});

        }catch(error){
            console.log("error al actualizar usuario")

        }
    }
    static async BuscarUsuario(id){
        try{
            return await Usuarios.findOne({where: {id}});

        }catch(error){
            console.log("error al buscar usuario")

        }
    }

}
module.exports = UsuarioService;