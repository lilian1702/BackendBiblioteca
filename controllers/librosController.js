const Libros = require('../services/librosServices');

class LibrosController{
    static async ListarLibro(req,res){
        try{
            let ListLibro = await Libros.ListarLibro();
            res.json(ListLibro);
        }catch(error){
            res.json({error: "error en la peticion listar libro"});
            
        }
    }
    static async CrearLibro(req,res){
        try{
            let {titulo, autor, anio_publicacion, stock} = req.body;
            let CreaLibro = await Libros.CrearLibro(titulo, autor, anio_publicacion, stock);
            res.json(CreaLibro);
        }catch(error){
            res.json({error: "error en la peticion crear libro"});
            
        }
    }
    static async EliminarLibro(req,res){
        try{
            let {id} = req.params;
            let ElimLibro = await Libros.EliminarLibro(id);
            res.json("el libro se ha eliminado");
        }catch(error){
            res.json({error: "error en la peticion eliminar libro"});
            
        }
    }
    static async ActualizarLibro(req,res){
        try{
            let {id} = req.params;
            let {titulo, autor, anio_publicacion, stock} = req.body;
            let ActLibro = await Libros.ActualizarLibro(id, titulo, autor, anio_publicacion, stock);
            res.json(req.body);       
            
        }catch(error){
            res.json({error:"error al actualizar libro"});            
            
        }
    }
    static async BuscarLibro(req,res){
        try{
            let {id} = req.params;
            let BusLibro = await Libros.BuscarLibro(id);
            res.json(BusLibro);
        }catch(error){
            res.json({error: "error en la peticion buscar libro"});
            
        }
    }
}
module.exports = LibrosController;