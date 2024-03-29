const { body } = require('express-validator');
const path = require('path');

module.exports = [
    body('nombre')
        .notEmpty()
        .withMessage('Tenés que escribir un nombre'),

    body('apellido')
        .notEmpty()
        .withMessage('Tenés que escribir un apellido'),

    body('email')
        .notEmpty().withMessage('Tenés que escribir un correo electrónico').bail()
        .isEmail().withMessage('Tenés que escribir un correo válido'),
        
    body('contrasenia').notEmpty().withMessage('Tienes que escribir una contraseña'),


    
/* fue a avatarValidator
    body('avatar').custom((value, { req })=>{
        let file = req.file;
        let acceptedExtensions = ['.jpg','.png','.gif','.jpeg'];
        if(!file){
            throw new Error ('Tenés que subir una imagen');
        }else{
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error ('Las extensiones permitidas son .jpg, .png y .gif')
            }
        }
        return true;
    }) */
]