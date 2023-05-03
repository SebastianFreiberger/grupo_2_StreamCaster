const path = require('path');
let db = require("../database/models");
const fs = require('fs');
//const productsJSON = path.join(__dirname,'../databaseJSON/productos.json');
//const products = JSON.parse(fs.readFileSync(productsJSON, 'utf-8'));

const controller = {
    home: (req, res) => {
        db.Productos.findAll()
        .then(function (products) {
            return res.render('home', { products: products });
        })        
    },

    errorNotFound: (req, res) => {
        return res.render('error404');
    },

    carrito: (req, res) => {
        res.render('carrito')
    },
}

module.exports = controller;