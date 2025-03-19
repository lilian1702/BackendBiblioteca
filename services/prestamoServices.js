const {Prestamos,Usuarios,Libros} = require('../models/');

class PrestamoServices{

    static async ListarPrestamos(){
        try{
            return await Prestamos.findAll({include:[{model:Usuarios, as:'usuario', attributes:['id']}
                ,{model:Libros, as:'libro', attributes:['id']}],
                attributes:['id','usuario_id','libro_id','fecha_prestamo','fecha_devolucion','estado']}); 

        }catch(error){
            console.log("error en listar prestamos"+error);
        }        
    }

    static async CrearPrestamo(usuario_id,libro_id,fecha_prestamo,fecha_devolucion,estado){
        try{
            return await Prestamos.create({usuario_id,libro_id,fecha_prestamo,fecha_devolucion,estado});

        }catch(error){
            console.log("error al crear prestamo"+error);
        }
    }

    static async EliminarPrestamo(id){
        try{
            return await Prestamos.destroy({where: {id}});

        }catch(error){
            console.log("error al eliminar prestamo")

        }
    }
    static async ActualizarPrestamo(id,usuario_id,libro_id,fecha_prestamo,fecha_devolucion,estado){
        try{
            return await Prestamos.update({usuario_id,libro_id,fecha_prestamo,fecha_devolucion,estado},{where:{id}});

        }catch(error){
            console.log("error al actualizar prestamo")

        }
    }
    static async BuscarPrestamo(id) {
        try {
            return await Prestamos.findOne({
                where: { id },
                include:[{model:Usuarios, as:'usuario', attributes:['id']}
                ,{model:Libros, as:'libro', attributes:['id']}],
                attributes:['id','usuario_id','libro_id','fecha_prestamo','fecha_devolucion','estado']});
        } catch (error) {
            console.log("Error al buscar préstamo: " + error);
        }
    }
    

}
module.exports = PrestamoServices;