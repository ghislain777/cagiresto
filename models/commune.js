'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Commune extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        this.belongsTo(models.Ville, {foreignKey:{ name:"ville", field:"ville", allowNull:true}})    
    
    }
  }
  Commune.init(
   {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    nom: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      comment: "Nom"
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      comment: "Description"
    },
    
  },{
    sequelize,
    modelName: 'Commune',
    tableName: 'commune',
    timestamps:false
  });

  Commune.afterCreate("hookAC", async (commune, options) => {
    // on cree le prix pour la nouvelle commune.
    await    sequelize.models.Prixlivraison.create({
      montant:0,
      commune: commune.id,
      description: `prix pour les commandes de la commune:: ${commune.nom}`
    })
  })
  return Commune;
};