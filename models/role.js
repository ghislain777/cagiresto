'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     Role.hasMany(models.Utilisateur, {foreignKey:{ name:"role", field:"role", allowNull:true}})
     Role.hasMany(models.Privilege, {foreignKey:{ name:"role", field:"role", allowNull:true}})
     
    }
  }
  Role.init({
    id: {
          type:DataTypes.INTEGER,
          autoIncrement:true, 
          primaryKey: true,
          comment:"ID"
        },
    nom: {
      type:DataTypes.STRING,
      allowNull:false,
      comment:"Nom"
    },
    description: {
      type:DataTypes.STRING,
      allowNull:false,
      comment:'Description'
    },
  }, {
    sequelize,
    modelName: 'Role',
    tableName:"role",
    freezeTableName:true
  });
  return Role;
};