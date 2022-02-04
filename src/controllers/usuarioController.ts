import {Request, Response} from 'express';

import { Usuario } from '../models/Usuario'

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

export const random = (req: Request, res: Response) =>{
    let random: number = Math.floor( Math.random() * 10);
    res.json({number : random})
}

export const nome = (req: Request, res: Response) =>{
    let nome: string = req.params.nome;
    res.json({nome})
}

//Usuario

export const createUsuario = async (req: Request, res: Response) =>{
    let { email, senha, nome, idade, genero } = req.body;

    let newUsuario = await Usuario.create({ email, senha, nome, idade, genero });
    
    res.status(201);
    res.json({id: newUsuario.id_usuario, email, senha, nome, idade, genero })
}

export const listUsuario = async (req: Request, res: Response) =>{
    let list = await Usuario.findAll();
    res.json({ list });
}

export const getUsuario = async (req: Request, res: Response) =>{
    let { id } = req.params;

    let usuario = await Usuario.findByPk(id);
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


