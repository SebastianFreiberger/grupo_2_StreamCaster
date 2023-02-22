const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');
const validations = require('../middlewares/userRegMiddleware');
const { body } = require('express-validator');
const multer = require('multer');
const path = require('path');

const multerDiskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/images/users"));
    },
    filename: (req, file, cb) => {
        let imageName = Date.now() + path.extname(file.originalname)
        cb(null, imageName)
    }
})

const uploadFile = multer({storage: multerDiskStorage})

/* const validations = [
    body('nombre').notEmpty().withMessage('Tenés que escribir un nombre'),
    body('apellido').notEmpty().withMessage('Tenés que escribir un apellido'),
    body('email')
        .notEmpty().withMessage('Tenés que escribir un correo electrónico').bail()
        .isEmail().withMessage('Tenés que escribir un correo válido'),
    body('contrasenia').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('avatar').custom((value, { req })=>{
        let file = req.file;
        let acceptedExtensions = ['.jpg','.png','.gif'];
        if(!file){
            throw new Error ('Tenés que subir una imagen');
        }else{
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error ('Las extensiones permitidas son .jpg, .png y .gif')
            }
        }
        return true;
    })
] */

userRouter.get('/login', userController.login);
userRouter.post('/login', userController.loginProcess);
userRouter.get('/profile', userController.profile);
userRouter.get('/registro', userController.registro);
userRouter.post('/registro',uploadFile.single("avatar"), validations, userController.registroPost);
/* userRouter.put('/registro', userController.registroPut); */

module.exports = userRouter;