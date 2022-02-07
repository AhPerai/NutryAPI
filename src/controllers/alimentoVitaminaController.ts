import {Request, Response} from 'express';

import { Alimento_Vitamina } from '../models/Alimento_Vitamina'

export const listRelacao = async (req: Request, res: Response) =>{
    let list = await Alimento_Vitamina.findAll();
    res.json({ list });
}