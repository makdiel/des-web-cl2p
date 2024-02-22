import {db} from '../db/conn.js';

const getUsuario = async(req, res)=>{

    const sql = `select * from TBLUsuario`;

    const result = await db.query(sql);
   
    res.json(result);

}

const postUsuario = async (req, res)=>{
    const { nombre_categoria } = req.body;
    const params =  [nombre_categoria];

    const sql = `insert into TBLUsuario 
    (nombre_categoria)
    values 
    ($1) returning *`;

    const result = await db.query(sql, params);
    res.json(result);

}

const putUsuario = async (req, res)=>{

    const { nombre_categoria  } = req.body;
    const {id} = req.params;
    
    const params =  [nombre_categoria, id];

    const sql = `update TBLUsuario
    set nombre_categoria = $1   
    where id = $2
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

const deleteUsuario = async (req, res)=>{

    const {id} = req.params;
    const params = [ id];

    const sql = `delete from TBLUsuario
    where id = $2
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);
}

export {getUsuario, postUsuario, putUsuario, deleteUsuario}
