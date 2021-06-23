const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Weapon extends Model {}

Weapon.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        mainEffect: {
            type: DataTypes.STRING,
            allowNull: false
        },
        majorEffect: {
            type: DataTypes.STRING,
        },
        minorEffect: {
            type: DataTypes.STRING,
        },
        itemType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        capsValue: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'weapon'
    }
);

module.exports = Weapon;