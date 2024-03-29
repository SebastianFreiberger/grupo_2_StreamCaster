const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const multer = require('multer');
const path = require('path');

const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const productValidator = require('../middlewares/productValidator');
const multerValidator = require('../middlewares/multerMiddleware');
const imageValidator = require('../middlewares/imageValidator');


router.get('/listador', productsController.listador); // Ruta hacia el listado de produtos


router.get('/detalle/:id', productsController.detalle); // Ruta hacia el detalle de produto

router.get('/creacion', authMiddleware, productsController.creacionProducto); // Ruta hacia el formulario de creación de produtos

router.post('/creacion', multerValidator.single("imagen"), productValidator, imageValidator, productsController.creacionPost); //Crea registro de un producto en la database

router.get('/edicion/:id', productsController.edicionProducto); //Ruta hacia la edicion del producto

router.put('/edicion/:id', multerValidator.single("imagen"), productValidator, productsController.editPost); //Edita datos del producto por id

/* router.get('/delete/:id', productsController.deleteGet); */ //Elimina un producto por id

router.post('/delete/:id', productsController.deletePost); //Elimina un producto por id

module.exports = router;