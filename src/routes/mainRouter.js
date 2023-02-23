const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', mainController.home);
router.get('/carrito', authMiddleware, mainController.carrito);
router.get('/PageNotFound', mainController.errorNotFound);
/* router.get('/detalle', mainController.detalle); */
/* router.get('/listador', mainController.listador); */
/* router.get('/registro', mainController.registro); */

module.exports = router;

