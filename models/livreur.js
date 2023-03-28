'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Livreur extends Model {
    static associate(models) {
      //Livreur.belongsTo(models.Quartier, { foreignKey: { name: 'quartier', allowNull: false } });
      this.belongsTo(models.Quartier, {
        foreignKey: { name: 'quartier', field: "quartier", allowNull: true }
      });
      models.Quartier.hasMany(this, {
        foreignKey: { name: "quartier", field: "quartier", allowNull: true }
      });
    }
  }

  Livreur.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      comment: "ID"
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Photo",
      defaultValue:"photolivreur/avatar_livreur.png"
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Nom"
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Prénom"
    },
    telephone: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      comment: "Téléphone"
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
      comment: "Email"
    },
    motdepasse: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Mot de passe"
    },
    token: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "token"
      },
    // position: {
    //   type: DataTypes.GEOMETRY("POINT"),
    //   allowNull: true,
    //   comment: "Position"
    // },
    dateposition: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Date de position"
    },
    actif: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "Actif"
    },
    libre: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        comment: "Libre?"
      }
  }, {
    sequelize,
    modelName: 'Livreur',
    tableName: 'livreur',
    freezeTableName: true,
    timestamps:false
  });

  return Livreur;
};
