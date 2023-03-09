'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ville extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        this.belongsTo(models.Pay, {foreignKey:{ name:"pay", field:"pay", allowNull:true}})
        Ville.hasMany(models.Commune, {foreignKey:{ name:"ville", field:"ville", allowNull:false}})
    }
  }
  Ville.init({
    id: {
          type:DataTypes.INTEGER,
          autoIncrement:true, 
          primaryKey: true
        },

    nom: {
          type:DataTypes.STRING,
          allowNull:false,
          defaultValue: "",
          comment: "Nom"
        },
        description: {
              type:DataTypes.STRING,
              allowNull:false,
              defaultValue: "",
              comment: "Description"
            },



  }, {
    sequelize,
    modelName: 'Ville',
    tableName:'ville'
  });
  return Ville;
};