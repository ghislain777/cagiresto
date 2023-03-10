'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
class Accompagnement extends Model {
static associate(models) {
// define association here
}
}

Accompagnement.init(
{
id: {
type: DataTypes.INTEGER,
autoIncrement: true,
primaryKey: true,
comment: 'ID',
},
nom: {
type: DataTypes.STRING,
allowNull: false,
comment: 'Nom',
},
photo: {
type: DataTypes.STRING,
allowNull: false,
comment: 'Photo',
},
photo1: {
type: DataTypes.STRING,
allowNull: true,
comment: 'Photo 1',
},
photo2: {
type: DataTypes.STRING,
allowNull: true,
comment: 'Photo 2',
},
photo3: {
type: DataTypes.STRING,
allowNull: true,
comment: 'Photo 3',
},
prix: {
type: DataTypes.INTEGER,
allowNull: false,
defaultValue: 0,
comment: 'Prix',
},
actif: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    comment: 'Actif',
    },
},
{
sequelize,
modelName: 'Accompagnement',
tableName: 'accompagnement',
freezeTableName: true,
}
);

return Accompagnement;
};