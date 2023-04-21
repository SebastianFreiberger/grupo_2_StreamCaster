const express = require('express');
const userRouter = express.Router();
const userApiController = require('../controllers/userApiController');

userRouter.get('/', userApiController.list);
userRouter.get('/:id', userApiController.detail);



module.exports = userRouter;