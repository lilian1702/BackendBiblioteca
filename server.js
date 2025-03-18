//archivos de ejecución 
const express = require('express');
const app = express();
//dotenv 
const dotenv = require('dotenv');
dotenv.config();
//json para los post
app.use(express.json());

//rutas
const usuarioRouter = require('./router/usuarioRouter');
const librosRouter = require('./router/librosRouter');
app.use('/api',usuarioRouter);
app.use('/api',librosRouter);


//servidor
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("corriendo en el servidor "+PORT);
});