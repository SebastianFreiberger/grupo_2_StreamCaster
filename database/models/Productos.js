module.exports = function(sequelize, dataTypes){
    let alias = "Producto";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncremental: true,
        },
        nombre:  {
            type: dataTypes.STRING,
        },
        descripcion:  {
            type: dataTypes.STRING,
        },
        precio:  {
            type: dataTypes.INTEGER,
        },
        descuento:  {
            type: dataTypes.INTEGER,
        },
        destacado:  {
            type: dataTypes.STRING,
        },
        imagen:  {
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

    let Producto = sequelize.define(alias, cols, config);

    return Producto;
    }


