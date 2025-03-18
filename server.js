const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();



app.use(express.json());

const usuarioRouter = require('./router/usuarioRouter');
const librosRouter = require('./router/librosRouter');
app.use('/api',usuarioRouter);
app.use('/api',librosRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("corriendo en el servidor");
});