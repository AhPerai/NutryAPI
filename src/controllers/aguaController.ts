import { Request, Response } from 'express';

import { Agua } from '../models/Agua'

const sequelize = require('sequelize');
const Op = sequelize.Op;


export const createAgua = async (req: Request, res: Response) => {
    let { UsuarioIdUsuario, quantidade } = req.body;
    let newAgua = await Agua.create({ UsuarioIdUsuario, quantidade });

    res.status(201);
    res.json({ id_agua: newAgua.id_agua, data: newAgua.data, quantidade: newAgua.quantidade, UsuarioIdUsuario })
}

export const getAgua = async (req: Request, res: Response) => {
    let { id } = req.params;
    
    let agua = await Agua.findByPk(id);

    if (agua) {
        res.json(agua)
    } else {
        res.json({ error: 'Consumo de água não encontrado' })
    }
}

export const listAgua = async (req: Request, res: Response) => {
    let list = await Agua.findAll();
    res.json(list);
}

