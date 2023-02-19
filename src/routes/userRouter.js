const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');
const {body} = require('express-validator');
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


userRouter.get('/login', userController.login);
userRouter.post('/login', userController.loginProcess);
userRouter.get('/profile', userController.profile);
userRouter.get('/registro', userController.registro);
userRouter.post('/registro',uploadFile.single("avatar"), userController.registroPost);
/* userRouter.put('/registro', userController.registroPut); */

module.exports = userRouter;