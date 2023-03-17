'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    static associate(models) {
      //Client.belongsTo(models.Quartier, { foreignKey: { name: 'quartier', allowNull: false } });
             this.belongsTo(models.Quartier, {
                      foreignKey: { name: 'quartier', field:"quartier", allowNull: true }
                  })
                  models.Quartier.hasMany(this, {
                      foreignKey: { name: "quartier", field: "quartier", allowNull: true }
                  })
    }
  }

  Client.init({
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
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Mail"
    },
    actif: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "Actif"
    },
    motdepasse: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Mot de passe"
    },
    token: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Token"
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Photo"
    }
  }, {
    sequelize,
    modelName: 'Client',
    tableName: 'client',
    freezeTableName: true
  });

  return Client;
};
