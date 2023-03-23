module.exports = function(sequelize, dataTypes){
    let alias = "Usuarios";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncremental: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        contrasenia: {
            type: dataTypes.STRING
        },
        // avatar: {
        //     type: dataTypes.STRING
        // },
        create_at: {
            type: dataTypes.DATE
        },
        update_at: {
            type: dataTypes.DATE
        },
        id_rol: {
            type: dataTypes.STRING
        },

    }

    let config = {
        tableName: "usuarios",
        timestamps: false
    }

    let Usuario = sequelize.define(alias, cols, config);
 

    return Usuario;
}