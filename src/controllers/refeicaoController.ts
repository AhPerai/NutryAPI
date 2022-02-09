import { Request, Response } from 'express';

import { Refeicao } from '../models/Refeicao'
import { Alimento } from '../models/Alimento'
import { Refeicao_Alimento } from '../models/Refeicao_Alimento'
import { Vitamina } from '../models/Vitamina';
import { Alimento_Vitamina } from '../models/Alimento_Vitamina';

export const getRefeicao = async (req: Request, res: Response) => {
    let { id } = req.params;
    console.log(id);
    let refeicao = await Refeicao.findByPk(id, { include: Alimento });

    if (refeicao) {
        res.json({ refeicao })
    } else {
        res.json({ error: 'Refeição não encontrada' })
    }
}

export const createRefeicao = async (req: Request, res: Response) => {
    let { data, UsuarioIdUsuario } = req.body;
    let newRefeicao = await Refeicao.create({ data, UsuarioIdUsuario });

    res.status(201);
    res.json({ id: newRefeicao.id_refeicao, data, UsuarioIdUsuario })
}

export const listRefeicao = async (req: Request, res: Response) => {
    let list = await Refeicao.findAll({ include: Alimento });
    res.json({ list });
}

export const adicionarAlimento = async (req: Request, res: Response) => {
    let { RefeicaoIdRefeicao, AlimentoIdAlimento } = req.body;
    console.log(RefeicaoIdRefeicao);
    console.log(AlimentoIdAlimento);
    let refeicao = await Refeicao.findByPk(RefeicaoIdRefeicao);
    let alimento = await Alimento.findByPk(AlimentoIdAlimento);

    if (refeicao && alimento) {
        let newRefeicaoAlimento = await Refeicao_Alimento.create({ AlimentoIdAlimento, RefeicaoIdRefeicao });
        let refeicao = await Refeicao.findByPk(RefeicaoIdRefeicao, { include: Alimento });
        res.json({ refeicao });
    } else {
        res.status(400);
        res.json({ error: 'A refeição ou alimento informado não existe' })
    }

}

export const listAlimentoFromRefeicao = async (req: Request, res: Response) =>{
    let { id } = req.params;

    let list = await Alimento.findAll({
        include: [{
            model: Refeicao,
            required: true,
            attributes: [],
            where: {id_refeicao: id},
        }],
    });
    res.json({ list });
}

export const listVitaminasFromRefeicao = async (req: Request, res: Response) => {
    let { id } = req.params;

    let list = await Vitamina.findAll({
        include: [{
            model: Alimento,
            required: true,
            attributes: [],
            include: [{
                model: Refeicao,
                required: true,
                attributes: [],
                where: {id_refeicao: id}
            }],
        }],
    });
    res.json({ list });
}
