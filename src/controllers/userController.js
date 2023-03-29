const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator')
const usuariosJSON = path.join(__dirname, '../database/usuarios.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosJSON, 'utf-8'));

let db = require("../../database/models");

const userController = {
    // GET    
    login: (req, res) => {
        res.render('login')
    },

    getData: function () {
        //return db.Usuarios.findOne({ where: { email: req.body.email } })
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
    loginProcess: async (req, res) => {
        let userToLogin = await db.Usuarios.findOne({ where: { email: req.body.email } })//userController.findByField('email', req.body.email);
        
        if (userToLogin) {
            let isOkThePassword = bcryptjs.compareSync(req.body.contrasenia, userToLogin.contrasenia);
            // if (userToLogin.contrasenia == req.body.contrasenia) {
            if (isOkThePassword) {
                delete userToLogin.contrasenia;
                req.session.userLogged = userToLogin;
                if (req.body.remember_user) {
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
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    },

    // GET    
    registro: (req, res) => {
        res.render('registro')
    },

    // POST



    registroPost: async (req, res) => {
        const resultValidation = validationResult(req);        
        let emailExistente = await db.Usuarios.findOne({ where: { email: req.body.email } });
        
        if (resultValidation.errors.length > 0) {
            return res.render('registro', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }
        
        else if (emailExistente){
            return res.render('registro', {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    },
                },
                oldData: req.body
            });

            // let id = usuarios[usuarios.length - 1].id + 1;
            // let userNuevo = {
            //     id, ...req.body,
            //     contrasenia: bcryptjs.hashSync(req.body.contrasenia, 10),
            // };
            // userNuevo.avatar = req.file.filename;
            // usuarios.push(userNuevo)
            // fs.writeFileSync(usuariosJSON, JSON.stringify(usuarios, null, 2))
            
        }
        else {
            db.Usuarios.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                contrasenia: bcryptjs.hashSync(req.body.contrasenia, 10),
                avatar: req.file.filename,
                createdAt: req.body.createdAt,
                updatedAt: req.body.updatedAt,
                id_rol: 1
            })
        return res.redirect('login')
        }
    },
    // registroPut: () => { },
    // loginPost: () => { },

    profile: (req, res) => {
        return res.render('userProfile', {
            user: req.session.userLogged
        });
    },
}

module.exports = userController;