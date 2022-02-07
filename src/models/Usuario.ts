import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';
import { Refeicao } from '../models/Refeicao'

export class UsuarioInstance extends Model {
    declare id_usuario: number;
    declare email: string;
    declare senha: string;
    declare nome: string;
    declare idade: number;
    declare genero: string;
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

Usuario.sync();