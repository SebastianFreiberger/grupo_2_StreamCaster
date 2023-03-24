module.exports = function (sequelize, dataTypes) {
    let alias = "Facturas";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncremental: true
        },
        fecha: {
            type: dataTypes.DATE
        },
        provincia: {
            type: dataTypes.STRING
        },
        direccionEnvio: {
            type: dataTypes.INTEGER
        },
        montoTotal: {
            type: dataTypes.INTEGER
        },

        id_usuario: {
            type: dataTypes.INTEGER
        },

    }

    let config = {
        tableName: "facturas",
        timestamps: false
    }

    let Facturas = sequelize.define(alias, cols, config);

    Facturas.associate = function (models) {
        Facturas.belongsTo(models.Usuarios, {
            as: "usuarios",
            foreignKey: "id_usuario"
        });
        Facturas.belongsToMany(models.Productos, {
            as: "productos",
            through: "factura_producto",
            foreignKey: "id_factura",
            otherKey: "id_producto",
            timestamps: false
    })
    }


return Facturas;
}