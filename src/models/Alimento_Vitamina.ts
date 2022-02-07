import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';
import { Vitamina } from './Vitamina';
import { Alimento } from './Alimento';

export class Alimento_Vitamina extends Model {
}

Alimento_Vitamina.init({},{
    sequelize,
    tableName: 'alimento_vitamina',
    timestamps: false
})

Vitamina.belongsToMany(Alimento, { through: Alimento_Vitamina });
Alimento.belongsToMany(Vitamina, { through: Alimento_Vitamina }); 

Alimento_Vitamina.sync({ alter: true });