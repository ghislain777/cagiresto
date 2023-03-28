'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Prixlivraison extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Commune, {
                foreignKey: { name: 'commune', field: "commune", allowNull: true }
            })
            models.Commune.hasMany(this, {
                foreignKey: { name: "commune", field: "commune", allowNull: true }
            })

        }
    }
    Prixlivraison.init({

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        montant: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            comment: "Montant"
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "",
            comment: "Description"
        },

    }, {
        sequelize,
        modelName: 'Prixlivraison',
        tableName: 'prixlivraison', 
        timestamps:false
    });
   
    return Prixlivraison;
};