import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface AlimentoInstance extends Model{
    id_alimento: number;
    nome: string;
}

export const Alimento = sequelize.define<AlimentoInstance>('Alimento', {
    id_alimento: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome:{
        type: DataTypes.STRING
    }
}, { 
    tableName: 'alimento',
    timestamps: false
})

Alimento.sync({ alter: true });