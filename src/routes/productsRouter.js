const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const multer = require('multer');
const path = require('path');

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

router.get('/creacion', productsController.creacionProducto); // Ruta hacia el formulario de creación de produtos

router.post('/creacion', uploadFile.single("imagen") , productsController.creacionPost); //Crea registro de un producto en el JSON

router.get('/edicion/:id', productsController.edicionProducto); //Ruta hacia la edicion del producto

router.put('/edicion/:id', productsController.editPost); //Edita datos del producto por id

router.delete('/delete/:id', productsController.deletePost); //Elimina un producto por id

module.exports = router;