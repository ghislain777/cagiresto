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
            // définir les associations ici, si nécessaire
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
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            comment: "Prix unitaire"
        },
        prixtotal: {
            type: DataTypes.DECIMAL(10, 2),
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
