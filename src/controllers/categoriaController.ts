import {Request, Response} from 'express';

import { Categoria } from '../models/Categoria'

export const listCategoria = async (req: Request, res: Response) =>{
    let list = await Categoria.findAll();
    res.json({ list });
}