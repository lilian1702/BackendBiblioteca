import {Prestamos} from '../models';

class PrestamoServices{

    static async ListarPrestamos(){
        try{
            return await Prestamos.findAll(); 

        }catch(error){
            console.log("error en listar prestamos")
        }        
    }

    static async CrearPrestamo(usuario_id, libro_id, fecha_prestamo, fecha_devolucion,estado){
        try{
            return await Prestamos.create({usuario_id, libro_id, fecha_prestamo, fecha_devolucion,estado});

        }catch(error){
            console.log("error al crear prestamo")
        }
    }
    static async EliminarPrestamo(id){
        try{
            return await Prestamos.destroy({where: {id}});

        }catch(error){
            console.log("error al eliminar prestamo")

        }
    }
    static async ActualizarPrestamo(id, usuario_id, libro_id, fecha_prestamo, fecha_devolucion,estado){
        try{
            return await Prestamos.update({usuario_id, libro_id, fecha_prestamo, fecha_devolucion,estado},{where: {id}});

        }catch(error){
            console.log("error al actualizar prestamo")

        }
    }

}
module.exports = PrestamoServices;