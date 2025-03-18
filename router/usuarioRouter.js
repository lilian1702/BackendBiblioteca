const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/Usuario', usuarioController.ListarUsuario);
router.post('/Usuario', usuarioController.CrearUsuario);
router.delete('/Usuario/:id', usuarioController.EliminarUsuario);
router.put('/Usuario/:id', usuarioController.ActualizarUsuario);



module.exports = router;