module.exports = function (sequelize, dataTypes) {
    let alias = "Marcas";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncremental: true
        },
        nombre: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "marcas",
        timestamps: false
    }

    let Marcas = sequelize.define(alias, cols, config);

    Marcas.associate = function (models) {

        Marcas.hasMany(models.Productos, {
            as: "productos",
            foreignKey: "id_marca"
        })
    }


    return Marcas;
}