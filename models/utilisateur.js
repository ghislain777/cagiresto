'use strict';

const {
  Model
} = require('sequelize');
// const { defaultValueSchemable } = require('sequelize/types/utils');
module.exports = (sequelize, DataTypes) => {
  class Utilisateur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Role, {foreignKey:{ name:"role", field:"role", allowNull:false}})
      
    }
  }
  Utilisateur.init({

    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      comment:"ID"
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
      comment:'Nom'
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: false,
      comment:"Téléphone"
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    motdepasse: {
      type: DataTypes.STRING,
      allowNull: false
    },
    actif: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    photo: {
      type:DataTypes.STRING,
      allowNull:false,
      defaultValue: ""
    },
    token: {
          type:DataTypes.STRING,
          allowNull:false,
          defaultValue: ""
        },
  }, {
    sequelize,
    modelName: 'Utilisateur',
    tableName:"utilisateur",
  });
  return Utilisateur;
};