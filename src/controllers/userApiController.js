const { response } = require("express");
let db = require("../database/models");

module.exports = {
    detail: async (req, res) => {
        let response = {            
        }        
        //TODAS LAS PETICIONES LAS HACEMOS ADENTRO DEL TRY Y EL CATCH
        try {
            response.status = 200 //CONFIGURAMOS EL STATUS
            const usuario = await db.Usuarios.findByPk(req.params.id); //NOS DEVUELVE TODO EL USUARIO
            
            usuario.contrasenia = undefined //BORRAMOS CONTRASEÑA DE USUARIO
            usuario.id_rol = undefined //BORRAMOS EL ID_ROL DEL USUARIO
            response.rutaAvatar = '/images/users/' + usuario.avatar  //CONFIGURAMOS LA RUTA A LA IMAGEN
            
            response = {...usuario.dataValues, ...response}
            return res.json(response);

        } catch (error) {
            response.status = 403 //CONFIGURAMOS EL STATUS
            response.msh = error.msg //CONFIGURAMOS EL MSG DE ERROR, SI SALE MAL

            return res.json(response)//RETORNAMOS LA RESPUESTA CON EL NRO DE ERROR Y EL MSG
        }
    },

    list: async (req, res) => {
        let response = {
            
        }        
        //TODAS LAS PETICIONES LAS HACEMOS ADENTRO DEL TRY Y EL CATCH
        try {
            response.status = 200 //CONFIGURAMOS EL STATUS
            const listado = await db.Usuarios.findAll(); //NOS DEVUELVE TODO EL LISTADO DE USUARIOS

            response.count = listado.length //CUENTA LA CANTIDAD DE USUARIOS Q HAY
            response.users = listado.map((usuario) => {
                return {
                    id: usuario.id,
                    nombre: usuario.nombre,
                    email: usuario.email,
                    detail: '/api/usuarios/' + usuario.id, //ESTA ES LA URL PARA OBTENER EL DETALLE
                }                
            })
            return res.json(response.users);

        } catch (error) {
            response.status = 403 //CONFIGURAMOS EL STATUS
            response.msh = error.msg //CONFIGURAMOS EL MSG DE ERROR, SI SALE MAL

            return res.json(response)//RETORNAMOS LA RESPUESTA CON EL NRO DE ERROR Y EL MSG
        }
    }
}