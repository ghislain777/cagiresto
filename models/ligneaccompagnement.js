'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Ligneaccompagnement extends Model {
        static associate(models) {
            // define association here
            this.belongsTo(models.Accompagnement, {
                foreignKey: { name: 'accompagnement', field: "accompagnement", allowNull: true }
            })
            models.Accompagnement.hasMany(this, {
                foreignKey: { name: "accompagnement", field: "accompagnement", allowNull: true }
            })

            this.belongsTo(models.Lignecommande, {
                foreignKey: { name: 'lignecommande', field: "lignecommande", allowNull: true }
            })
            models.Lignecommande.hasMany(this, {
                foreignKey: { name: "lignecommande", field: "lignecommande", allowNull: true }
            })
        }
    }

    Ligneaccompagnement.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                comment: 'ID',
            },
            prix: {
                type: DataTypes.INTEGER,
                allowNull: false,
                comment: 'Prix',
            },
            quantite: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 1,
                comment: 'Quantité',
            },
            prixtotal: {
                type: DataTypes.INTEGER,
                allowNull: false,
                comment: 'Prix Total',
            },
        },
        {
            sequelize,
            modelName: 'Ligneaccompagnement',
            tableName: 'ligneaccompagnement',
            freezeTableName: true,
        }
    );

    return Ligneaccompagnement;
};