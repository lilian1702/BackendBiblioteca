class Usuarios{
    static async CrearUsuario(nombre, correo, telefono){
        try{
            return await Biblioteca.create({nombre,correo,telefono});

        }catch(error){
            console.log("error al crear usuario")

        }
    }

    static async ListarUsuario(){
        try{
            return await Biblioteca.findAll();

        }catch(error){
            console.log("error en listar usuarios")

        }
    }
    static async EliminarUsuario(id){
        try{
            return await Biblioteca.destroy({
                where: {id:id}});

        }catch(error){
            console.log("error al eliminar usuario")

        }
    }
    static async ActualizarUsuario(id, nombre, correo, telefono){
        try{
            return await Biblioteca.update({nombre,correo,telefono},{
                where: {id:id}});

        }catch(error){
            console.log("error al actualizar usuario")

        }
    }


}
module.exports = Usuarios;