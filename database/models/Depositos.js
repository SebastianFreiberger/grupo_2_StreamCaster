module.exports = function (sequelize, dataTypes) {
    let alias = "Depositos";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncremental: true,
        },
        nombre: {
            type: dataTypes.STRING,
        },
        ubicacion: {
            type: dataTypes.STRING,
        },
        provincia: {
            type: dataTypes.INTEGER,
        }
    }

    let config = {
        tableName: "depositos",
        timestamps: false
    };

    let Depositos = sequelize.define(alias, cols, config);

    Depositos.associate = function (models) {
        Depositos.belongsTo(models.Stock, {
            as: "stock",
            foreignKey: "id_deposito",
        })
    };

    return Depositos;
}


