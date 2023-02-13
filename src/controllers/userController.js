const path = require('path');
const fs = require('fs');
const usuariosJSON = path.join(__dirname, '../database/usuarios.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosJSON, 'utf-8'));



const userController = {
    // GET
    login: (req, res) => {
        res.render('login')
    },
    // GET    
    registro: (req, res) => {
        res.render('registro')
    },

    registroPost: (req, res) => {
        let id = usuarios[usuarios.length - 1].id + 1
        let userNuevo = { id, ...req.body }
        // userNuevo.avatar = req.file.filename;
        usuarios.push(userNuevo)
        fs.writeFileSync(usuariosJSON, JSON.stringify(usuarios, null, 2))
        return res.redirect('/')
    },
    // registroPut: () => { },
    // loginPost: () => { },

}

module.exports = userController;