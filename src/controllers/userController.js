const userController = {

    login: (req, res) => {
        res.render('login')
    },

    creacionProducto: (req, res) => {
        res.render('creacion-de-producto')
    },

    edicionProducto: (req, res) => {
        res.render('edicion-de-producto')
    },
}

module.exports = userController;