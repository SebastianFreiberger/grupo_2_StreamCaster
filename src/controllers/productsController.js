const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
// const productsJSON = path.join(__dirname, '../database/productos.json');
// const products = JSON.parse(fs.readFileSync(productsJSON, 'utf-8'));

let db = require("../../database/models");
const { log } = require('console');
// const marcas = db.Marcas.findAll()


const productsController = {
    creacionProducto: (req, res) => {
        db.Marcas.findAll()
            .then(function (marcas) {
                res.render('creacion-de-producto', { marcas: marcas })
            })

    },

    creacionPost: (req, res) => {
        console.log("entré al controlador");
        const productoValido = validationResult(req);
        console.log(productoValido);
        if (productoValido.errors.length > 0) {
            console.log("estoy en el if de errors");
            db.Marcas.findAll()
                .then(function (marcas) {
                    console.log("encontré las marcas");
                    return res.render('creacion-de-producto',
                        {
                            marcas: marcas,
                            errores: productoValido.mapped(),
                            oldData: req.body
                        })
                })
        }

        else {
            console.log("else de creacion");

            db.Productos.create({
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                precio: req.body.precio,
                descuento: req.body.descuento,
                destacado: false,
                imagen: req.file.filename,
                id_marca: req.body.marcas,
                pesoKg: req.body.pesoKg

            })
                .then(() => { return res.redirect('/products/listador') })
        }
    },

    listador: (req, res) => {
        db.Productos.findAll()
            .then(function (products) {
                return res.render('listadorProductos', { products: products });
            })
    },

    detalle: (req, res) => {
        /* res.render('detalleProducto') */
        let product = products.find(row => row.id == req.params.id);
        if (product) {
            return res.render('detalleProducto', { product: product });
        } else {
            return res.send("Producto no encontrado");
        }
    },

    edicionProducto: async (req, res) => {
        let productoExistente = await db.Productos.findByPk(req.params.id, {
            include: [{association: "marcas"}]
        })
        //console.log(productoExistente);
        let marcas = await db.Marcas.findAll()
        //console.log(marcas);

            if(productoExistente && marcas) {
                //res.send("hay una marca y un producto")
                res.render("edicion-de-producto", { 
                    product: productoExistente, 
                    marcas: marcas,                      
                });                
            };
        },

    editPost: (req, res) => {
        products.forEach(row => {
            if (row.id == req.params.id) {
                row.nombre = req.body.nombre
                row.caract = req.body.caract
                row.marca = req.body.marca
                row.precio = req.body.precio
                row.precio = req.body.descuento
                row.descripcion = req.body.descripcion
                row.imagen = req.body.imagen
            }
        })
        fs.writeFileSync(productsJSON, JSON.stringify(products, null, 2))
        return res.redirect('/products/listador');
    },

    deletePost: (req, res) => {
        let productFiltrados = products.filter(product => product.id != req.params.id);
        fs.writeFileSync(productsJSON, JSON.stringify(productFiltrados, null, 2))
        return res.render("listadorProductos", { products: productFiltrados })
    }
}

module.exports = productsController;