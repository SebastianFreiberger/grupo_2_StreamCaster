const fs = require('fs');
const { body } = require('express-validator');
const path = require('path');


module.exports = [
    body('imagen').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];
        //console.log(acceptedExtensions);
        if (!file) {
            throw new Error('Tenés que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error('Las extensiones permitidas son .jpg, .jpeg .png y .gif')
            }
        }
        return true;
        // const extencionError = "La imagen tiene que tener formato .jpg, .jpeg, .png, .gif y tamaño máximo 10 mb"
        // if(!file) {
        //     throw new Error(extencionError)
        // } else if (file.size > (1024 * 1024 * 10)) {
        //     fs.unlink(file.path, (er) => {
        //         console.log(er);
        //     })
        //     throw new Error(extencionError)
        // }
        // return true;
    })
];

