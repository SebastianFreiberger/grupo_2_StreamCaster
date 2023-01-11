const controller = {
    home: (req, res) => {
        res.render('home')
    },

    detalle: (req, res) => {
        res.render('detalleProducto')
    },

    listador: (req, res) => {
        res.render('listadorProductos')
    },

    carrito: (req, res) => {
        res.render('carrito')
    },

    login: (req, res) => {
        res.render('login')
    },

    registro: (req, res) => {
        res.render('registro')
    },
/* 
    creacionProducto: (req, res) => {
        res.render('creacion-de-producto')
    }, */
}

module.exports = controller;