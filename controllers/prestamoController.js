const PrestamoServices = require('../services/prestamoServices');

class PrestamoController{
    static async ListarPrestamos(req,res){
        try{
            let ListPrestamos = await PrestamoServices.ListarPrestamos();
            res.json(ListPrestamos);
        }catch(error){
            res.json({error: "error en la peticion listar prestamos"});
            
        }
    }
    static async CrearPrestamo(req,res){
        try{
            let {usuario_id,libro_id,fecha_prestamo,fecha_devolucion,estado} = req.body;
            let CreaPrestamo = await PrestamoServices.CrearPrestamo(usuario_id,libro_id,fecha_prestamo,fecha_devolucion,estado);
            res.json(req.body);
        }catch(error){
            res.json({error: "error en la peticion crear prestamo"});
            
        }
    }
    static async EliminarPrestamo(req,res){
        try{
            let {id} = req.params;
            let ElimPrestamo = await PrestamoServices.EliminarPrestamo(id);
            res.json("el prestamo se ha eliminado");
        }catch(error){
            res.json({error: "error en la peticion eliminar prestamo"});
            
        }
    }
    static async ActualizarPrestamo(req,res){
        try{
            let {id} = req.params;
            let {usuario_id,libro_id,fecha_prestamo,fecha_devolucion,estado} = req.body;
            let ActPrestamo = await PrestamoServices.ActualizarPrestamo(id,usuario_id,libro_id,fecha_prestamo,fecha_devolucion,estado);
            res.json(req.body);       
            
        }catch(error){
            res.json({error:"error al actualizar prestamo"});            
            
        }
    }
    static async BuscarPrestamo(req,res){
        try{
            let {id} = req.params;
            let Prestamo = await PrestamoServices.BuscarPrestamo(id);
            res.json(Prestamo);
        }catch(error){
            res.json({error: "error en la peticion buscar prestamo"});
            
        }
    }
}
module.exports = PrestamoController;