import { Request, Response } from 'express';

import { Refeicao } from '../models/Refeicao'
import { Refeicao_Alimento } from '../models/Refeicao_Alimento'

export const createRefeicao = async (req: Request, res: Response) => {
    let { data, UsuarioIdUsuario } = req.body;
    let newRefeicao = await Refeicao.create({ data, UsuarioIdUsuario });

    res.status(201);
    res.json({ id: newRefeicao.id_refeicao, data, UsuarioIdUsuario })
}

export const listRefeicao = async (req: Request, res: Response) => {
    let list = await Refeicao.findAll();
    res.json({ list });
}

export const addAlimento = async (req: Request, res: Response) => {
    let { id_refeicao, id_alimento } = req.body;
    let refeicao = await Refeicao.findByPk(id_refeicao);
    let alimento = await Refeicao.findByPk(id_alimento);

    if (refeicao && alimento) {
        refeicao.add
    } else {
        res.status(400);
        res.json({ error: 'A refeição ou alimento informado não existe' })
    }
    res.json({ list });
}
