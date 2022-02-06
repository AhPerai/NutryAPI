import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface CategoriaInstance extends Model{
    id_categoria: number;
    nome: string;
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

Categoria.sync({ alter:true});