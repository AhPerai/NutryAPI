import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';
import { Categoria } from './Categoria';

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

Categoria.hasMany(Alimento);
Alimento.belongsTo(Categoria);

Alimento.sync({ alter: true });