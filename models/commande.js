'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Commande extends Model {
        static associate(models) {
            this.belongsTo(models.Client, {
                foreignKey: { name: 'client', field: "client", allowNull: true }
            })
            models.Client.hasMany(this, {
                foreignKey: { name: "client", field: "client", allowNull: true }
            })

            this.belongsTo(models.Adresse, {
                foreignKey: { name: 'adresse', field: "adresse", allowNull: true }
            })
            models.Adresse.hasMany(this, {
                foreignKey: { name: "adresse", field: "adresse", allowNull: true }
            })
            this.belongsTo(models.Modedepayement, {
                foreignKey: { name: 'modedepayement', field: "modedepayement", allowNull: true }
            })
            models.Modedepayement.hasMany(this, {
                foreignKey: { name: "modedepayement", field: "modedepayement", allowNull: true }
            })

            // définir les associations ici, si nécessaire
        }
    }

    Commande.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: "ID"
        },
        datelivraison: {
            type: DataTypes.DATE,
            allowNull: true,
            comment: "Date de livraison"
        },
        prixtotal: {
            type: DataTypes.DECIMAL(10, 0),
            allowNull: false,
            defaultValue: 0,
            comment: "Prix total"
        },
        prixrepa: {
            type: DataTypes.DECIMAL(10, 0),
            allowNull: false,
            defaultValue: 0,
            comment: "Prix des repas"
        },
        prixlivraison: {
            type: DataTypes.DECIMAL(10, 0),
            allowNull: false,
            defaultValue: 0,
            comment: "Prix de livraison"
        },
        statut: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "En attente",
            comment: "Statut de la commande"
        },
        noteclient: {
            type: DataTypes.STRING,
            allowNull: true,
            comment: "Note du client"
        }
    }, {
        sequelize,
        modelName: 'Commande',
        tableName: 'commande',
        freezeTableName: true
    });

    return Commande;
};
