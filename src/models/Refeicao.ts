import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';
import { Usuario } from '../models/Usuario'

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

Usuario.hasMany(Refeicao);
Refeicao.belongsTo(Usuario);

Refeicao.sync({ alter: true });
