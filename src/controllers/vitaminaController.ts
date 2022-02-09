import {Request, Response} from 'express';

import { Vitamina } from '../models/Vitamina'

export const listVitamina = async (req: Request, res: Response) =>{
    let list = await Vitamina.findAll();
    res.json({ list });
}

export const getVitamina = async (req: Request, res: Response) =>{
    let { id } = req.params;

    let vitamina = await Vitamina.findByPk(id);

    if(vitamina){
        res.json({ vitamina })
    }else {
        res.json({ error: 'Vitamina não encontrada' })
    }
}