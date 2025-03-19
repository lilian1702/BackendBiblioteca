//archivos de ejecución 
const express = require('express');
const app = express();
//dotenv 
const dotenv = require('dotenv');
dotenv.config();
//json para los post
app.use(express.json());
//cors
const cors = require('cors');
app.use(cors({ 
    origin:"*",
    methods:["GET","POST","PUT","DELETE"],
    allowedHeaders:["Content-Type","Authorization"]
}));

//rutas
const usuarioRouter = require('./router/usuarioRouter');
const librosRouter = require('./router/librosRouter');
const prestamoRouter = require('./router/prestamoRouter');
app.use('/api',usuarioRouter);
app.use('/api',librosRouter);
app.use('/api',prestamoRouter);


//servidor
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("corriendo en el servidor "+PORT);
});