import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export class Alimento extends Model {
    declare id_alimento: number;
    declare nome: string;
}

Alimento.init({
    id_alimento: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    tableName: 'alimento',
    timestamps: false
})

Alimento.sync({ alter: true });