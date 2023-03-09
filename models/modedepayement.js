'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Modedepayement extends Model {
    static associate(models) {
      // définir les associations ici, si nécessaire
    }
  }

  Modedepayement.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      comment: "ID"
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      comment: "Nom"
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Description"
    }
  }, {
    sequelize,
    modelName: 'Modedepayement',
    tableName: 'modedepayement',
    freezeTableName: true
  });

  return Modedepayement;
};
