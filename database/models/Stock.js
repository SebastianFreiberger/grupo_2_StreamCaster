module.exports = function (sequelize, dataTypes) {
    let alias = "Stock";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncremental: true
        },
        id_deposito: {
            type: dataTypes.INTEGER
        },
        id_producto: {
            type: dataTypes.INTEGER
        },
        cantidad: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: "stock",
        timestamps: false
    }

    let Stock = sequelize.define(alias, cols, config);

    Stock.associate = function (models) {

        Stock.belongsTo(models.Productos, {
            as: "productos",
            foreignKey: "id_producto"
        });
        Stock.hasMany(models.Depositos, {
            as: "depositos",
            foreignKey: "id_deposito"
        })
    }


    return Stock;
}