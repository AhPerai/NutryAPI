import {Request, Response} from 'express';

import { Categoria } from '../models/Categoria'
import { Alimento } from '../models/Alimento'


export const getCategoria = async (req: Request, res: Response) => {
    let { id } = req.params;
    let categoria = await Categoria.findByPk(id);

    if (categoria) {
        res.json({ categoria })
    } else {
        res.json({ error: 'Categoria não encontrada' })
    }
}

export const listCategoria = async (req: Request, res: Response) =>{
    let list = await Categoria.findAll();
    res.json({ list });
}

export const listAlimentoFromCategoria = async (req: Request, res: Response) => {
    let { id_categoria } = req.params;
    console.log(id_categoria)

    let list = await Alimento.findAll({
        where: { CategoriumIdCategoria: id_categoria },
    });
    res.json({ list });
}