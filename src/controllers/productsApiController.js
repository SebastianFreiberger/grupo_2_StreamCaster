const { response } = require("express");
let db = require("../database/models");

module.exports = {
    detail: async (req, res) => {
        let response = {       
                 
        }        
        //TODAS LAS PETICIONES LAS HACEMOS ADENTRO DEL TRY Y EL CATCH
        try {
            response.status = 200 //CONFIGURAMOS EL STATUS
            const producto = await db.Productos.findByPk(req.params.id, {include: [{association:'marcas'}]}); //NOS DEVUELVE TODO EL PRODUCTO
            response.rutaImgProd = '/images/products/' + producto.imagen  //CONFIGURAMOS LA RUTA A LA IMAGEN
            
            response = {...producto.dataValues, ...response}
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
            const listado = await db.Productos.findAll({include: [{association:'marcas'}]}); //NOS DEVUELVE TODO EL LISTADO DE PRODUCTOS
            const categorias = await db.Categorias.findAll({include: [{association:'productos'}]}); //NOS DEVUELVE TODO EL LISTADO DE CATEGORIAS
            response.count = listado.length //CUENTA LA CANTIDAD DE PRODUCTOS Q HAY
            response.countByCategory = {}
            categorias.forEach(categoria => {
                response.countByCategory[categoria.megarubro] = categoria.productos.length;
            });


            response.productos = listado.map((producto) => {
                return {
                    id: producto.id,
                    nombre: producto.nombre,
                    descripcion: producto.descripcion,
                    detail: '/api/productos/' + producto.id, //ESTA ES LA URL PARA OBTENER EL DETALLE DEL PRODUCTO
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