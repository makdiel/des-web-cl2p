import { Express } from "express";
const app = Express();
// Middleware 
app.use(Express.json());

//
app.listen(4000, ()=>{
    console.log("Esuchando en el puerto 4000");
});