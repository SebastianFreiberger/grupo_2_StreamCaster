module.exports = function (sequelize, dataTypes) {
    let alias = "Categorias";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncremental: true
        },
        megaRubro: {
            type: dataTypes.STRING
        },
        detalle: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "categorias",
        timestamps: false
    }

    let Categorias = sequelize.define(alias, cols, config);

    Categorias.associate = function (models) {

        Categorias.belongsToMany(models.Productos, {
            as: "productos",
            through: "cat_prod",
            foreignKey: "id_categoria",
            otherKey: "id_producto",
            timestamps: false
        })
    }


    return Categorias;
}