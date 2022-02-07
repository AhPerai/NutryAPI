import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export class CategoriaInstance extends Model{
    declare id_categoria: number;
    declare nome: string;
}

export const Categoria = sequelize.define<CategoriaInstance>('Categoria', {
    id_categoria: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome:{
        type: DataTypes.STRING
    }
}, { 
    tableName: 'categoria',
    timestamps: false
})

Categoria.sync();