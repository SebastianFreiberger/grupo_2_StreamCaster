const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const multer = require('multer');
const path = require('path');

const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const productValidator = require('../middlewares/productValidator');
const multerValidator = require('../middlewares/multerMiddleware');

const multerDiskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/images/products"));
    },
    filename: (req, file, cb) => {
        let imageName = Date.now() + path.extname(file.originalname)
        cb(null, imageName)
    }
})

const uploadFile = multer({storage: multerDiskStorage})

router.get('/listador', productsController.listador); // Ruta hacia el listado de produtos


router.get('/detalle/:id', productsController.detalle); // Ruta hacia el detalle de produto

router.get('/creacion', authMiddleware, productsController.creacionProducto); // Ruta hacia el formulario de creación de produtos

router.post('/creacion', authMiddleware, multerValidator.single("imagen"), productValidator, productsController.creacionPost); //Crea registro de un producto en el JSON

router.get('/edicion/:id', productsController.edicionProducto); //Ruta hacia la edicion del producto

router.put('/edicion/:id', productsController.editPost); //Edita datos del producto por id

router.delete('/delete/:id', productsController.deletePost); //Elimina un producto por id

module.exports = router;