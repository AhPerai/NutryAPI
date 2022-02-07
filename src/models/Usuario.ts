import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';
import { Refeicao } from '../models/Refeicao'

export class Usuario extends Model {
    declare id_usuario: number;
    declare email: string;
    declare senha: string;
    declare nome: string;
    declare idade: number;
    declare genero: string;
}

Usuario.init( {
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
    sequelize,
    tableName: 'usuario',
    timestamps: false
})

Usuario.sync({ alter: true });