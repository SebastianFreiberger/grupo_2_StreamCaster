const path = require('path');
const fs = require('fs');
const productsJSON = path.join(__dirname,'../database/productos.json');
const products = JSON.parse(fs.readFileSync(productsJSON, 'utf-8'));


const productsController = {
    creacionProducto: (req, res) => {
        res.render('creacion-de-producto')
    },

    creacionPost: (req, res) => {
        let id = products[products.length-1].id + 1
        let productNuevo = {id, ...req.body}
        productNuevo.imagen = req.file.filename;
        products.push(productNuevo)
        fs.writeFileSync(productsJSON, JSON.stringify(products, null, 2))
        return res.redirect('/products/listador')
    },
    
    listador: (req, res) => {
        return res.render('listadorProductos', {products: products});
    },

    detalle: (req, res) => {
        res.render('detalleProducto')
        let product = products.find(row => row.id == req.params.id);
        if(product){
            return res.render('detalleProducto', {product: product});
        } else {
            return res.send("Producto no encontrado");
        }
    },

    edicionProducto: (req, res) => {
        res.render('edicion-de-producto')
    },

    editPost: (req, res) => {

    },

    deletePost: (req, res) => {

    },
}

module.exports = productsController;