const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const { validationResult } = require ('express-validator')
const usuariosJSON = path.join(__dirname, '../database/usuarios.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosJSON, 'utf-8'));



const userController = {
    // GET    
    login: (req, res) => {
        res.render('login')
    },

    getData: function () {
		return JSON.parse(fs.readFileSync(usuariosJSON, 'utf-8'));
	},

    findAll: function () {
		return this.getData();
	},

    findByField: function (field, text) {
		let allUsers = this.findAll();
		let userFound = allUsers.find(oneUser => oneUser[field] === text);
		return userFound;
	},

    //POST LOGIN
    loginProcess: (req, res) => {
		let userToLogin = userController.findByField('email', req.body.email);
        // let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
		if(userToLogin){
            if (userToLogin.contrasenia == req.body.contrasenia) {
                delete userToLogin.contrasenia;
                req.session.userLogged = userToLogin;
                if(req.body.remember_user) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
                }
                return res.redirect('profile');
            }
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'Contraseña incorrecta'
                    }
                }
            });
        }

        return res.render('login', {
            errors: {
                email: {
                    msg: 'Credenciales incorrectas'
                }
            }
        });
        //res.send("credencial invalida");

        // delete userToLogin.contrasenia;
				//req.session.userLogged = userToLogin;

				/*if(req.body.remember_user) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				}*/            
            
            
    },
    
    // GET    
    registro: (req, res) => {
        res.render('registro')
    },

    registroPost: (req, res) => {
        const resultValidation= validationResult(req);
        if(resultValidation.errors.length > 0){
            return res.render ('registro', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }else{         
        let id = usuarios[usuarios.length - 1].id + 1
        let userNuevo = { id, ...req.body }
        userNuevo.avatar = req.file.filename;
        usuarios.push(userNuevo)
        fs.writeFileSync(usuariosJSON, JSON.stringify(usuarios, null, 2))
        return res.redirect('/')
        }
    },
    // registroPut: () => { },
    // loginPost: () => { },

    profile: (req, res) => {
        res.render('userProfile')
    },

}

module.exports = userController;