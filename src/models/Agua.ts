import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';
import { Usuario } from '../models/Usuario'
const Sequelize = require('sequelize');

export class Agua extends Model {
    declare id_agua: number;
    declare data: Date;
    declare quantidade: number;
}

Agua.init({
    id_agua: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    data: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    quantidade:{
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    tableName: 'agua',
    timestamps: false
})

Usuario.hasMany(Agua);
Agua.belongsTo(Usuario);

Agua.sync({ alter: true });