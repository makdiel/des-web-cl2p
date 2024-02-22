import { Express } from "express";  
const usuario = Express();
import { postUsuario, getUsuario, putUsuario, deleteUsuario } from "../controllers/controllerUser"

usuario.use(Express.json());

usuario.post('', postUsuario);

usuario.get('', getUsuario);

usuario.put('/:nombre_usuario', putUsuario);

usuario.delete('/:nombre_usuario', deleteUsuario);

export {
    usuario
}