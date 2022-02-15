import { Request, Response } from 'express';
import { Agua } from '../models/Agua';
// import { sequelize } from '../instances/pg';
import { Refeicao } from '../models/Refeicao';

import { Usuario } from '../models/Usuario'

const sequelize = require('sequelize');
const Op = sequelize.Op;

//Usuario

export const createUsuario = async (req: Request, res: Response) => {
    let { email, senha, nome, idade, genero } = req.body;

    let newUsuario = await Usuario.create({ email, senha, nome, idade, genero });

    res.status(201);
    res.json({ id: newUsuario.id_usuario, email, senha, nome, idade, genero })
}

export const listUsuario = async (req: Request, res: Response) => {
    let list = await Usuario.findAll({ include: Refeicao });
    res.json(list);
}

export const getUsuario = async (req: Request, res: Response) => {
    let { id } = req.params;
    let usuario = await Usuario.findByPk(id, { include: Refeicao });

    if (usuario) {
        res.json(usuario)
    } else {
        res.json({ error: 'Usuário não encontrado' })
    }
}


export const getUsuarioByEmail = async (req: Request, res: Response) => {
    let { email } = req.params;
    console.log(email)
    let usuario = await Usuario.findOne({
        where: {
            email: email
        },
        
    }
    )

    if (usuario) {
        res.json(usuario)
        console.log(usuario)
    } else {
        res.json({ error: 'Usuário não encontrado' })
    }
}

export const updateUsuario = async (req: Request, res: Response) => {
    let { id } = req.params;
    let { email, senha, nome, idade, genero } = req.body;

    let usuario = await Usuario.findByPk(id);
    if (usuario) {
        usuario.email = email;
        usuario.senha = senha;
        usuario.nome = nome;
        usuario.idade = idade;
        usuario.genero = genero;
        await usuario.save();

        res.json(usuario);

    } else {
        res.json({ error: 'Usuário não encontrado' })
    }
}

export const deleteUsuario = async (req: Request, res: Response) => {
    let { id } = req.params;
    await Usuario.destroy({ where: { id_usuario: id } });
    res.json({});
}

export const verifyLogin = async (req: Request, res: Response) => {
    let { email, senha } = req.body;
    console.log(email);
    console.log(senha);
    let usuario = await Usuario.findOne({
        where: {
            email: email
        },
        include: Refeicao
    });
    if (usuario) {
        if (usuario.senha == senha) {
            res.json(usuario)
            console.log(usuario);
            
        } else {
            res.status(400);
            res.json({ error: 'Login inválido' })
        }
    } else {
        res.status(400);
        res.json({ error: 'Login inválido' })
    }
}

//Funções relacionadas a busca de consumo de refeições 

export const listRefeicaoOfUsuario = async (req: Request, res: Response) => {
    let { id_usuario } = req.params;

    let list = await Refeicao.findAll({
        where: { UsuarioIdUsuario: id_usuario },
    });
    res.json(list);
}

export const listTodayRefeicao = async (req: Request, res: Response) => {
    let { id_usuario } = req.params;
    const TODAY_START = new Date().setHours(0, 0, 0, 0);
    const NOW = new Date();
    let list = await Refeicao.findAll({

        where: {
            UsuarioIdUsuario: id_usuario,
            data: {
                [Op.gt]: TODAY_START,
                [Op.lt]: NOW
            },
        },
    });
    res.json(list);
}

//Funções relacionadas a busca de consumo de água 

export const listAguaOfUsuario = async (req: Request, res: Response) => {
    let { id_usuario } = req.params;

    let list = await Agua.findAll({
        where: { UsuarioIdUsuario: id_usuario },
    });
    res.json(list);
}

export const listTodayAgua = async (req: Request, res: Response) => {
    let { id_usuario } = req.params;
    const TODAY_START = new Date().setHours(0, 0, 0, 0);
    const NOW = new Date();
    let list = await Agua.findAll({

        where: {
            UsuarioIdUsuario: id_usuario,
            data: {
                [Op.gt]: TODAY_START,
                [Op.lt]: NOW
            },
        },
    });
    res.json(list);
}

