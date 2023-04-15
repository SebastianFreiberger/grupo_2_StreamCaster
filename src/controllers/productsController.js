const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
// const productsJSON = path.join(__dirname, '../database/productos.json');
// const products = JSON.parse(fs.readFileSync(productsJSON, 'utf-8'));

let db = require("../../database/models");
const { log } = require('console');
const { where } = require('sequelize');
// const marcas = db.Marcas.findAll()

const productsController = {
    creacionProducto: (req, res) => {
        db.Marcas.findAll()
            .then(function (marcas) {
                res.render('creacion-de-producto', { marcas: marcas })
            })

    },

    creacionPost: (req, res) => {
        const productoValido = validationResult(req);
        const imagenValida = validationResult(req);
        if (productoValido.errors.length > 0) {
            db.Marcas.findAll()
                .then(function (marcas) {
                    return res.render('creacion-de-producto',
                        {
                            marcas: marcas,
                            errores: productoValido.mapped(),
                            dataValida: req.body
                        })
                })
                console.log("me quedé en el if de creacionPost");
        }

        else if (imagenValida.errors.length > 0) {
            db.Marcas.findAll()
                .then(function (marcas) {
                    return res.render('creacion-de-producto',
                        {
                            marcas: marcas,
                            errores: imagenValida.mapped(),
                            dataValida: req.body
                        })
                })
                console.log("me quedé en el else if de creacionPost");

        }

        else {
            console.log("llegué al create");

            db.Productos.create({
                nombre: req.body.nombre,
                caract: req.body.caract,
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

    detalle: async (req, res) => {
        let detalleProducto = await db.Productos.findByPk(req.params.id,{
            include:[{association: "marcas"}]
        })        
        if (detalleProducto) {
            return res.render('detalleProducto', { product: detalleProducto });
        } else {
            return res.send("Producto no encontrado");
        }
    },    

    edicionProducto: async (req, res) => {
        let productoExistente = await db.Productos.findByPk(req.params.id, {
            include: [{association: "marcas"}]
        })              
        let marcas = await db.Marcas.findAll()
            if(productoExistente && marcas) {                
                res.render("edicion-de-producto", { 
                    product: productoExistente, 
                    marcas: marcas,
                    oldData: req.body                      
                });                
            };
        },

    editPost: async (req, res) => {
        const productoValido = validationResult(req); 
        let productoExistente = await db.Productos.findByPk(req.params.id, {
            include: [{association: "marcas"}]
        })
        if (productoValido.errors.length > 0) {            
            db.Marcas.findAll()
                .then(function (marcas) {
                    //console.log(productoValido.errors);
                    return res.render('edicion-de-producto',                    
                        {
                            product: productoExistente,
                            marcas: marcas,
                            errores: productoValido.mapped(),
                            oldData: req.body
                        })
                })                
            } else {                    
                db.Productos.update({
                    nombre: req.body.nombre,
                    caract: req.body.caract,
                    descripcion: req.body.descripcion,
                    precio: req.body.precio,
                    descuento: req.body.descuento,
                    destacado: false,
                    //imagen: req.file.filename,
                    id_marca: req.body.marcas,
                    pesoKg: req.body.pesoKg            
                    }, {where: {id: req.params.id}})                    
                    .then(() => { 
                        return res.redirect('/products/listador')
                    }
                )
            }
        },
       /*  fs.writeFileSync(productsJSON, JSON.stringify(products, null, 2))
        return res.redirect('/products/listador'); */

    // deletePost: (req, res) => {
    //     let productFiltrados = products.filter(product => product.id != req.params.id);
    //     fs.writeFileSync(productsJSON, JSON.stringify(productFiltrados, null, 2))
    //     return res.render("listadorProductos", { products: productFiltrados })
    // }
    

    deleteGet: async (req, res) => {
        try {
            let productoExistente = await db.Productos.findByPk(req.params.id)
            res.render("listadorProductos", { products: productoExistente })
        }
        catch (e) {
            console.log(e)
        }
    },

    deletePost: (req, res) => {
        db.Productos.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/products/listador');
    }
    
    //edicionProducto CON PROMISE.ALL
/*     edicionProducto: async (req, res) => {
        let productoExistente = await db.Productos.findByPk(req.params.id);                      
        let marcas = await db.Marcas.findAll();
        Promise.all([productoExistente, marcas])
            .then(function([productoExistente, marcas]){
                res.render("edicion-de-producto", {product: productoExistente, marcas: marcas});        
        })
    }, */

    //edicionPost CON PROMISE.ALL
    /* editPost: (req, res) => {                  
        db.Productos.update({
            nombre: req.body.nombre,
            caract: req.body.caract,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            descuento: req.body.descuento,
            destacado: false,
            //imagen: req.file.filename,
            id_marca: req.body.marcas,
            pesoKg: req.body.pesoKg            
            },{
                where: {
                    id: req.params.id
                }
            });
            res.redirect("/products/detalle/" + req.params.id) */
       /*  fs.writeFileSync(productsJSON, JSON.stringify(products, null, 2))
        return res.redirect('/products/listador'); 
    },*/
}

module.exports = productsController;