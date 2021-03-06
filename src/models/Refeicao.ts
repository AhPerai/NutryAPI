import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';
import { Usuario } from '../models/Usuario'
const Sequelize = require('sequelize');

export class Refeicao extends Model {
    declare id_refeicao: number;
    declare data: Date;
}

Refeicao.init({
    id_refeicao: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    data: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
}, {
    sequelize,
    tableName: 'refeicao',
    timestamps: false
})

Usuario.hasMany(Refeicao);
Refeicao.belongsTo(Usuario);

Refeicao.sync({ alter: true });
