class Libros{
    static async ListarLibro(){
        try{
            return await Biblioteca.findAll();

        }catch(error){
            console.log("error en listar libros")

        }
    }
    static async CrearLibro(titulo, autor, anio_publicacion,stock){
        try{
            return await Biblioteca.create({titulo, autor, anio_publicacion,stock});

        }catch(error){
            console.log("error al crear libro")
        }
    }
    static async EliminarLibro(id){
        try{
            return await Biblioteca.destroy({
                where: {id:id}});

        }catch(error){
            console.log("error al eliminar libro")

        }
    }
    static async ActualizarLibro(id, titulo, autor, anio_publicacion, stock){
        try{
            return await Biblioteca.update({titulo, autor, anio_publicacion, stock},{
                where: {id:id}});

        }catch(error){
            console.log("error al actualizar libro")

        }
    }

}
module.exports = Libros;