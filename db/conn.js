import pg from 'pg-promise';
import dotenv from 'dotenv';

dotenv.config();
const pgp = pg();


const user = process.env._user;
const pass = process.env._pass;
const host = process.env._host;
const database = process.env._bd;

const conectionString = `postgresql://${user}:${pass}@${host}:5432/${database}`;



//const cnstr = `postgresql://${user}:${pass}@${host}:${portDb}/${dataBase}`; 
//const cnstr = `postgresql://postgres:ServerAcceso.1@localhost:${portDb}/TiendaEnLinea`; 
const cnstr = `postgresql://postgres:ServerAcceso.1@localhost:5432/tiendaenlinea`; 

const db = pgp(conectionString);

db.connect()
    .then( ()=>{
        console.log("Conexion Exitosa");
    } )
    .catch( (err)=>{

        console.log(`Error de conexion ${err}`)
    } )

export { db }