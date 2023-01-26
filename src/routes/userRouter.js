const express = require('express');
const userRouter = express.Router();

const userController = require('../controllers/userController');

userRouter.get('/login', userController.login);
userRouter.get('/registro', userController.registro);
/* userRouter.get('/creacion', userController.creacionProducto);
userRouter.get('/edicion', userController.edicionProducto); */

module.exports = userRouter;