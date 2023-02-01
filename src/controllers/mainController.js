const path = require('path');
const fs = require('fs');
const productsJSON = path.join(__dirname,'../database/productos.json');
const products = JSON.parse(fs.readFileSync(productsJSON, 'utf-8'));

const controller = {
    home: (req, res) => {
        return res.render('home', {products: products});
    },

    carrito: (req, res) => {
        res.render('carrito')
    },
}

module.exports = controller;