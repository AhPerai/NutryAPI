import {Request, Response} from 'express';

import { Refeicao_Alimento } from '../models/Refeicao_Alimento'

export const listRelacao = async (req: Request, res: Response) =>{
    let list = await Refeicao_Alimento.findAll();
    res.json(list);
}