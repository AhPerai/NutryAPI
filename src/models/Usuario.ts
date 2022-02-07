import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';
import { Refeicao } from '../models/Refeicao'

export interface UsuarioInstance extends Model {
    id_usuario: number;
    email: string;
    senha: string;
    nome: string;
    idade: number;
    genero: string;
}

export const Usuario = sequelize.define<UsuarioInstance>('Usuario', {
    id_usuario: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    email:{
        type: DataTypes.STRING
    },
    senha:{
        type: DataTypes.STRING
    },
    nome: {
        type: DataTypes.STRING
    },
    idade: {
        type: DataTypes.INTEGER
    },
    genero:{
        type: DataTypes.STRING
    }
}, {
    tableName: 'usuario',
    timestamps: false
});

Usuario.sync({ alter:true});