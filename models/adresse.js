'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Adresse extends Model {
        static associate(models) {
            // définir les associations ici, si nécessaire
            this.belongsTo(models.Client, {
                foreignKey: { name: 'client', field: "client", allowNull: true }
            })
            models.Client.hasMany(this, {
                foreignKey: { name: "client", field: "client", allowNull: true }
            })

            this.belongsTo(models.Quartier, {
                foreignKey: { name: 'quartier', field: "quartier", allowNull: true }
            })
            models.Quartier.hasMany(this, {
                foreignKey: { name: "quartier", field: "quartier", allowNull: true }
            })
        }
    }

    Adresse.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: "ID"
        },
        ligne1: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: "Ligne 1"
        },
        ligne2: {
            type: DataTypes.STRING,
            allowNull: true,
            comment: "Ligne 2"
        }
    }, {
        sequelize,
        modelName: 'Adresse',
        tableName: 'adresse',
        freezeTableName: true
    });

    return Adresse;
};
