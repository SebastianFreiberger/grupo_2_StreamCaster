const { body } = require('express-validator');
const path = require('path');

module.exports = [
    body('nombre')
        .notEmpty()
        .withMessage('Tenés que escribir un nombre'),

    body('apellido')
        .notEmpty()
        .withMessage('Tenés que escribir un apellido'),
]