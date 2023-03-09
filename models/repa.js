'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Repa extends Model {
    static associate(models) {
      // définir les associations ici, si nécessaire
      this.belongsTo(models.Categorie, {
        foreignKey: { name: 'categorie', field: "categorie", allowNull: true }
      })
      models.Categorie.hasMany(this, {
        foreignKey: { name: "categorie", field: "categorie", allowNull: true }
      })
    }
  }

  Repa.init({
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
      type: DataTypes.FLOAT,
      allowNull: false,
      comment: "Prix"
    },
    prixreduit: {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "Prix réduit"
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Photo"
    },
    photo1: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Photo 1"
    },
    photo2: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Photo 2"
    },
    photo3: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Photo 3"
    },
    actif: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "Actif"
    },
    composition: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Composition"
    },
  }, {
    sequelize,
    modelName: 'Repa',
    tableName: 'repa',
    freezeTableName: true
  });

  return Repa;
};
