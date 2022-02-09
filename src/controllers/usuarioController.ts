import {Request, Response} from 'express';
import { Refeicao } from '../models/Refeicao';

import { Usuario } from '../models/Usuario'

//Usuario

export const createUsuario = async (req: Request, res: Response) =>{
    let { email, senha, nome, idade, genero } = req.body;

    let newUsuario = await Usuario.create({ email, senha, nome, idade, genero });
    
    res.status(201);
    res.json({id: newUsuario.id_usuario, email, senha, nome, idade, genero })
}

export const listUsuario = async (req: Request, res: Response) =>{
    let list = await Usuario.findAll({include: Refeicao});
    res.json({ list });
}

export const getUsuario = async (req: Request, res: Response) =>{
    let { id } = req.params;
    let usuario = await Usuario.findByPk(id, {include: Refeicao});

    if(usuario){
        res.json({ usuario })
    }else {
        res.json({ error: 'Usuário não encontrado' })
    }
}

export const updateUsuario = async (req: Request, res: Response) =>{
    let { id } = req.params;
    let { email, senha, nome, idade, genero } = req.body;

    let usuario = await Usuario.findByPk(id);
    if(usuario){
        usuario.email  = email;
        usuario.senha  = senha;
        usuario.nome   = nome;
        usuario.idade  = idade;
        usuario.genero = genero;
        await usuario.save();

        res.json({ usuario });

    }else{
        res.json({ error: 'Usuário não encontrado' })
    }
}

export const deleteUsuario = async (req: Request, res: Response) =>{
    let { id } = req.params;
    await Usuario.destroy({ where: { id_usuario: id } });
    res.json({});
}

export const verifyLogin = async (req: Request, res:Response)=>{
    let { email, senha } = req.body;

    let usuario =  await Usuario.findOne({
        where : {
            email: email
        }
    });
    if(usuario){
        if(usuario.senha == senha){
            res.json({ usuario })
        }else{
            res.status(400);
            res.json({ error: 'Login inválido' })
        }
    }else {
        res.status(400);
        res.json({ error: 'Login inválido' })
    }
}

export const listRefeicaoOfUsuario = async (req: Request, res: Response) =>{
    let { id_usuario } = req.params;
    console.log(id_usuario)

    let list = await Refeicao.findAll({
        where : { UsuarioIdUsuario: id_usuario },
    });
    res.json({ list });
}

