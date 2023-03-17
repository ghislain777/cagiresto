'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Lignecommande extends Model {
        static associate(models) {

            this.belongsTo(models.Commande, {
                foreignKey: { name: 'commande', field: "commande", allowNull: true }
            })
            models.Commande.hasMany(this, {
                foreignKey: { name: "commande", field: "commande", allowNull: true }
            })

            this.belongsTo(models.Repa, {
                foreignKey: { name: 'repa', field: "repa", allowNull: false }
            })
            models.Repa.hasMany(this, {
                foreignKey: { name: "repa", field: "repa", allowNull: false }
            })
        }
    }

    Lignecommande.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: "ID"
        },
        prixunitaire: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "Prix unitaire"
        },
        prixtotal: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "Prix total"
        },
        quantite: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "Quantité"
        }
    }, {
        sequelize,
        modelName: 'Lignecommande',
        tableName: 'lignecommande',
        freezeTableName: true
    });

    return Lignecommande;
};
