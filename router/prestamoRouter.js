const express = require('express');
const router = express.Router();
const prestamoController = require('../controllers/prestamoController');

router.get('/Prestamo', prestamoController.ListarPrestamos);
router.post('/Prestamo', prestamoController.CrearPrestamo);
router.delete('/Prestamo/:id', prestamoController.EliminarPrestamo);
router.put('/Prestamo/:id', prestamoController.ActualizarPrestamo);
router.get('/Prestamo/:id', prestamoController.BuscarPrestamo);

module.exports = router;

