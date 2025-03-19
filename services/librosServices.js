const {Libros}=require('../models') 

class LibrosServices{
    static async ListarLibro(){
        try{
            return await Libros.findAll();

        }catch(error){
            console.log("error en listar libros")

        }
    }
    static async CrearLibro(titulo, autor, anio_publicacion,stock){
        try{
            return await Libros.create({titulo, autor, anio_publicacion,stock});

        }catch(error){
            console.log("error al crear libro")
        }
    }
    static async EliminarLibro(id){
        try{
            return await Libros.destroy({where: {id}});

        }catch(error){
            console.log("error al eliminar libro")

        }
    }
    static async ActualizarLibro(id, titulo, autor, anio_publicacion, stock){
        try{
            return await Libros.update({titulo, autor, anio_publicacion, stock},{where: {id}});

        }catch(error){
            console.log("error al actualizar libro")

        }
    }

}
module.exports =LibrosServices;