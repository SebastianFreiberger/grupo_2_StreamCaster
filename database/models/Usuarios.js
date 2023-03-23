module.exports = function(sequelize, dataTypes){
    let alias = "Usuario";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey = true,
            autoIncremental: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        apellido: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypess.STRING
        },
        contrasenia: {
            type: DataTypes.STRING
        },
        avatar: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        },
        tipo: {
            type: DataTypes.STRING
        },

    }

    let config = {
        tableName = "usuarios",
        timestamps: false
    }

    let Usuario = sequelize.define(alias, cols, config);
 

    return Producto;
}