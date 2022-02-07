import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export class Categoria extends Model{
    declare id_categoria: number;
    declare nome: string;
}

Categoria.init({
    id_categoria: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome:{
        type: DataTypes.STRING
    }
},{ 
    sequelize,
    tableName: 'categoria',
    timestamps: false
})

Categoria.sync({ alter: true });