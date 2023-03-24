module.exports = function (sequelize, dataTypes) {
    let alias = "Productos";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncremental: true,
        },
        nombre: {
            type: dataTypes.STRING,
        },
        descripcion: {
            type: dataTypes.STRING,
        },
        precio: {
            type: dataTypes.INTEGER,
        },
        descuento: {
            type: dataTypes.INTEGER,
        },
        destacado: {
            type: dataTypes.STRING,
        },
        imagen: {
            type: dataTypes.STRING,
        },
        id_marca: {
            type: dataTypes.STRING,
        },
        pesoKg: {
            type: dataTypes.INTEGER,
        },
    }

    let config = {
        tableName: "productos",
        timestamps: false
    }

    let Productos = sequelize.define(alias, cols, config);

    Productos.associate = function (models) {

        Productos.belongsToMany(models.Facturas, {
            as: "facturas",
            through: "factura_producto",
            foreignKey: "id_producto",
            otherKey: "id_factura",
            timestamps: false
        });
        Productos.belongsToMany(models.Categorias, {
            as: "categorias",
            through: "cat_prod",
            foreignKey: "id_producto",
            otherKey: "id_categoria",
            timestamps: false
        });
        Productos.belongsToMany(models.PublicoObjetivo, {
            as: "PublicoObjetivo",
            through: "prod_publico",
            foreignKey: "id_producto",
            otherKey: "id_publicoObjetivo",
            timestamps: false
        });
        Productos.belongsTo(models.Marcas, {
            as: "marcas",
            foreignKey: "id_marca"
        });
        Productos.belongsTo(models.Stock, {
            as: "stock",
            foreignKey: "id_producto"
        });


    }
    return Productos;
}


