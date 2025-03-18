import {Prestamos} from '../models';

class PrestamosServices{

    static async listarUsuarios(){
        try{
            return await Usuario.findAll({include: [{ model: Roles},{ model: Empresa}]});
        }catch(e){
            console.log("error en la consulta")
        }    
    }

}