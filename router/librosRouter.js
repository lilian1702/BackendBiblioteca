const express = require('express');
const router = express.Router();
const librosController = require('../controllers/librosController');


router.get('/Libros', librosController.ListarLibro);
router.post('/Libros', librosController.CrearLibro);
router.delete('/Libros/:id', librosController.EliminarLibro);
router.put('/Libros/:id', librosController.ActualizarLibro);

module.exports = router;