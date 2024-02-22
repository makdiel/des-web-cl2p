import { db } from '../db/conn.js';

const getUsuario = async (req, res) => {
    try{
        const sql = `select * from tbl_usuarios`;
        const result = await db.query(sql);
        res.status(200).json(result)
        //res.json(result);
    }catch (err){
        res.status(500).json(err);        
    }
}

const postUsuario = async (req, res) => {
    try{
        const { nombre_usuario,
                correo_electronico,
                contrasena,
                nombre,
                apellido } = req.body;

        const params = [nombre_usuario,
                        correo_electronico,
                        contrasena,
                        nombre,
                        apellido];

        const sql = `insert into tbl_usuarios 
                        (nombre_usuario, 
                        correo_electronico, 
                        contrasena,
                        nombre, 
                        apellido)
                        values 
                        ($1, $2, $3, $4 , $5) returning *`;

        const result = await db.query(sql, params);
        res.status(200).json(result)
        //res.json(result);
    }catch (err){
        res.status(500).json(err);        
    }
}

const putUsuario = async (req, res) => {
    try{
        const { correo_electronico,
                contrasena,
                nombre,
                apellido } = req.body;

        const { nombre_usuario } = req.params;

        const params = [nombre_usuario, 
                        correo_electronico,
                        contrasena,
                        nombre,
                        apellido];

        const sql = `update tbl_usuarios
        set correo_electronico = $2,
        contrasena = $3,
        nombre = $4 ,
        apellido = $5   
        where nombre_usuario = $1
        returning *`;

        const result = await db.query(sql, params);
        res.status(200).json(result)
        //res.json(result);
    }catch (err){
        res.status(500).json(err);        
    }
}

const deleteUsuario = async (req, res) => {
    try{
        const { nombre_usuario } = req.params;
        const params = [nombre_usuario];

        const sql = `delete from tbl_usuarios
        where nombre_usuario = $1
        returning *`;

        const result = await db.query(sql, params);

        res.status(200).json(result)
        //res.json(result);
    }catch (err){
        res.status(500).json(err);        
    }
}

export { getUsuario, postUsuario, putUsuario, deleteUsuario }
