const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const productsJSON = path.join(__dirname, '../database/productos.json');
const products = JSON.parse(fs.readFileSync(productsJSON, 'utf-8'));

let db = require("../../database/models");


const productsController = {
    creacionProducto: (req, res) => {
        db.Marcas.findAll()
        .then (function(marcas){
            res.render('creacion-de-producto', {marcas: marcas})
        })

    },

    creacionPost: async (req, res) => {
        const productoValido = validationResult(req)
        let productoExistente = await db.Productos.findOne({ where: { nombre: req.body.nombre } });

        if (productoValido.errors.length > 0) {
             db.Marcas.findAll()
         .then (function(marcas){
            return res.render('creacion-de-producto', {marcas: marcas},
            {
                errores: productoValido.mapped(),
                // oldData: req.body
            })
        })
        }

        else if (productoExistente){
            db.Marcas.findAll()
        .then (function(marcas){
            return res.render('creacion-de-producto', {marcas: marcas},
            {
                errors: {
                    nombre: {
                        msg: 'Este producto ya existe'
                    },
                },
                // oldData: req.body
            })
        });
        }



        // let id = products[products.length-1].id + 1
        // let productNuevo = {id, ...req.body}
        // productNuevo.imagen = req.file.filename;
        // products.push(productNuevo)
        // fs.writeFileSync(productsJSON, JSON.stringify(products, null, 2))
        
        else {
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
            return res.redirect('/products/listador')
        }
    },

    listador: (req, res) => {
        return res.render('listadorProductos', { products: products });
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

    edicionProducto: (req, res) => {
        let product = products.find(row => row.id == req.params.id)
        if (product) return res.render("edicion-de-producto", { product: product });
        else return res.send("Producto no encontrado");
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