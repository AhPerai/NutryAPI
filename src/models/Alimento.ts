import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface AlimentoInstance extends Model{
    id_alimento: number;
    nome: string;
}

export const Alimento = sequelize.define<AlimentoInstance>('Refeicao', {
    id_alimento: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome:{
        type: DataTypes.STRING
    }
}, { 
    tableName: 'refeicao',
    timestamps: false
})

Alimento.sync();