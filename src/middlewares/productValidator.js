const fs = require('fs');
const {body} = require('express-validator');
const path = require('path');


module.exports = [
    body('nombre')
        .isLength({min: 5, max: 30})
        .withMessage('El campo deber tener entre 5 y 30 caracteres'),
    // marca
    body('marcas')
    .notEmpty()
    .withMessage('Debe seleccionar 1 opcion'),
    // peso
    body('pesoKg')
    .isFloat({min:0.01, max:999999.99})
        .withMessage('El peso debe estar entre 0.01 y 999999.99'),
    // precio
    body('precio')
        .isFloat({min:0.01, max:999999.99})
        .withMessage('El precio debe estar entre 0.01 y 999999.99'),
    // descuento
    body('descuento')
        .isInt({min:0, max:100})
        .withMessage('El descuento debe estar entre 0 y 100'),
    // caract
    body('caract')
        .isLength({min: 10, max: 250})
        .withMessage('El campo deber tener entre 25 y 250 caracteres'),
    // descripcion
    body('descripcion')
        .isLength({min: 10, max: 350})
        .withMessage('El campo deber tener entre 25 y 350 caracteres'),
    //imagen
    body('imagen').custom((value, {req}) => {
            let file = req.file;
            // console.log(file);
            let acceptedExtensions = ['.jpg','.png','.gif','.jpeg'];
            if(!file){
                console.log("estoy en el if");
                throw new Error ('Tenés que subir una imagen');
            }else{
                let fileExtension = path.extname(file.originalname);
                console.log("estoy en el else");

                if(!acceptedExtensions.includes(fileExtension)){
                    throw new Error ('Las extensiones permitidas son .jpg, .png y .gif')
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