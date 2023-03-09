'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Complement extends Model {
    static associate(models) {
      // définir les associations ici, si nécessaire
    }
  }

  Complement.init({
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
    prix: {
      type: DataTypes.DECIMAL(10, 0),
      allowNull: false,
      defaultValue: 0,
      comment: "Prix"
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Photo"
    }
  }, {
    sequelize,
    modelName: 'Complement',
    tableName: 'complement',
    freezeTableName: true
  });

  return Complement;
};
