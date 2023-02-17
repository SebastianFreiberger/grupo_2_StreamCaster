const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');
const multer = require('multer');
const path = require('path');

const multerDiskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/images/user"));
    },
    filename: (req, file, cb) => {
        let imageName = Date.now() + path.extname(file.originalname)
        cb(null, imageName)
    }
})




userRouter.get('/login', userController.login);
userRouter.post('/login', userController.loginProcess);
userRouter.get('/profile', userController.profile);
userRouter.get('/registro', userController.registro);
userRouter.post('/registro', userController.registroPost);
/* userRouter.put('/registro', userController.registroPut); */

module.exports = userRouter;