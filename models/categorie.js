'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Categorie extends Model {
    static associate(models) {
      // définir les associations ici, si nécessaire
    }
  }

  Categorie.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      comment: "ID"
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Nom"
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Description"
    },
    actif: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "Actif"
    }
  }, {
    sequelize,
    modelName: 'Categorie',
    tableName: 'categorie',
    freezeTableName: true
  });

  return Categorie;
};
