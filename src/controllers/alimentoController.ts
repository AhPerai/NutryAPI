import {Request, Response} from 'express';

import { Alimento } from '../models/Alimento'

export const listAlimento = async (req: Request, res: Response) =>{
    let list = await Alimento.findAll();
    res.json({ list });
}