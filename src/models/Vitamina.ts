import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export class Vitamina extends Model {
    declare id_vitamina: number;
    declare nome: string;
}

Vitamina.init({
    id_vitamina: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome:{
        type: DataTypes.STRING
    }
},{ 
    sequelize,
    tableName: 'vitamina',
    timestamps: false
})

Vitamina.sync({ alter: true });