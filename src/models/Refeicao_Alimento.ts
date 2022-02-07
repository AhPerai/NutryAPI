import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';
import { Alimento } from './Alimento';
import { Refeicao } from './Refeicao';

export const Refeicao_Alimento = sequelize.define('Refeicao_Alimento', {}, {
    tableName: 'refeicao_alimento',
    timestamps: false
});

Alimento.belongsToMany(Refeicao, { through: Refeicao_Alimento });
Refeicao.belongsToMany(Alimento, { through: Refeicao_Alimento }); 

Refeicao_Alimento.sync({ alter: true });