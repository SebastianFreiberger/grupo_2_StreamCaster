const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.home);
router.get('/carrito', mainController.carrito);
router.get('/detalle', mainController.detalle);
router.get('/listador', mainController.listador);
/* router.get('/login', mainController.login); */
router.get('/registro', mainController.registro);
/* router.get('/creacion', mainController.creacionProducto); */

module.exports = router;

