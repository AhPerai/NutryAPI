import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface RefeicaoInstance extends Model{
    id_refeicao: number;
    data: Date;
}

export const Refeicao = sequelize.define<RefeicaoInstance>('Refeicao', {
    id_refeicao: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    data:{
        type: DataTypes.DATE
    }
}, { 
    tableName: 'refeicao',
    timestamps: false
})

Refeicao.sync();
