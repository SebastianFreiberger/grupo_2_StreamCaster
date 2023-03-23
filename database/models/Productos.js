module.exports = function(sequelize, dataTypes){
    let alias = "Producto";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey = true,
            autoIncremental: true,
        },
        nombre:  {
            type: DataTypes.STRING,
        },
        descripcion:  {
            type: DataTypes.STRING,
        },
        precio:  {
            type: DataTypes.INTEGER,
        },
        descuento:  {
            type: DataTypes.INTEGER,
        },
        destacado:  {
            type: DataTypes.STRING,
        },
        imagen:  {
            type: DataTypes.STRING,
        },
        id_marca: {
            type: DataTypes.STRING,
        },
        pesoKg: {
            type: DataTypes.INTEGER,
        },
    }

    let config = {
        tableName = "productos",
        timestamps: false
    }

    let Producto = sequelize.define(alias, cols, config);

    }


    return Producto;
}