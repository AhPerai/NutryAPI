import {Request, Response} from 'express';

import { Alimento } from '../models/Alimento'
import { Alimento_Vitamina } from '../models/Alimento_Vitamina'
import { Vitamina } from '../models/Vitamina';

export const createAlimento = async (req: Request, res: Response) => {
    let { nome, CategoriumIdCategoria } = req.body;
    let newAlimento = await Alimento.create({ nome, CategoriumIdCategoria });

    res.status(201);
    res.json({ id: newAlimento.id_alimento, nome, CategoriumIdCategoria })
}

export const getAlimento = async (req: Request, res: Response) =>{
    let { id } = req.params;

    let alimento = await Alimento.findByPk(id, {include: Vitamina});

    if(alimento){
        res.json({ alimento })
    }else {
        res.json({ error: 'Alimento não encontrado' })
    }
}

export const listAlimento = async (req: Request, res: Response) =>{
    let list = await Alimento.findAll({include: Vitamina});
    res.json({ list });
}


export const adicionarVitamina = async (req: Request, res: Response) => {
    let { AlimentoIdAlimento,  VitaminaIdVitamina} = req.body;
    console.log(AlimentoIdAlimento);
    console.log(VitaminaIdVitamina);
    let alimento = await Alimento.findByPk(AlimentoIdAlimento);
    let vitamina = await Alimento.findByPk(VitaminaIdVitamina);

    if (alimento && vitamina) {
        let newAlimentoVitamina = await Alimento_Vitamina.create({ VitaminaIdVitamina, AlimentoIdAlimento });
        let alimento = await Alimento.findByPk(AlimentoIdAlimento, {include: Vitamina});
        res.json({ alimento });
    } else {
        res.status(400);
        res.json({ error: 'O alimento ou vitamina informado não existe' })
    }
    
}