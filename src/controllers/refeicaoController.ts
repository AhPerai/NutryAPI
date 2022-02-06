import {Request, Response} from 'express';

import { Refeicao } from '../models/Refeicao'

export const createRefeicao = async (req: Request, res: Response) =>{
    let { data, UsuarioIdUsuario } = req.body;
    let newRefeicao = await Refeicao.create({ data, UsuarioIdUsuario });
    
    res.status(201);
    res.json({id: newRefeicao.id_refeicao, data, UsuarioIdUsuario })
}

export const listRefeicao = async (req: Request, res: Response) =>{
    let list = await Refeicao.findAll();
    res.json({ list });
}
