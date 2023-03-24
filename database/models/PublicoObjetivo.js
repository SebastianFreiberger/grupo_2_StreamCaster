module.exports = function (sequelize, dataTypes) {
    let alias = "PublicoObjetivo";

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
        tableName: "publicoObjetivo",
        timestamps: false
    }

    let PublicoObjetivo = sequelize.define(alias, cols, config);

    PublicoObjetivo.associate = function (models) {

        PublicoObjetivo.belongsToMany(models.Productos, {
            as: "productos",
            through: "prod_publico",
            foreignKey: "id_publicoObjetivo",
            otherKey: "id_producto",
            timestamps: false
        });
    }


    return PublicoObjetivo;
}