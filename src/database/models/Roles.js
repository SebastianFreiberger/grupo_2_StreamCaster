module.exports = function(sequelize, dataTypes){
    let alias = "Roles";

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
        tableName: "roles",
        timestamps: false
    }

    let Roles = sequelize.define(alias, cols, config);

    Roles.associate = function(models){
        Roles.hasMany(models.Usuarios, {
            as: "usuarios",
            foreignKey: "id_rol"
        });
    }
 
    return Roles;
}