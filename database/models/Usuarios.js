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

    let Usuarios = sequelize.define(alias, cols, config);

    Usuarios.associate = function(models){
        Usuarios.belongsTo(models.Roles, {
            as: "roles",
            foreignKey: "id_rol"
        });
        Usuarios.hasMany(models.Facturas, {
            as: "facturas",
            foreignKey: "id_usuario"
        });
    }
 
    return Usuarios;
}