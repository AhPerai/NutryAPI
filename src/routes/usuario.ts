import { Router } from 'express';

import * as usuarioController from '../controllers/usuarioController'

const usuarioRouter = Router();

//CRUD básico
usuarioRouter.post('/usuario', usuarioController.createUsuario)
usuarioRouter.get('/usuario', usuarioController.listUsuario)
usuarioRouter.get('/usuario/:id', usuarioController.getUsuario)
usuarioRouter.put('/usuario/:id', usuarioController.updateUsuario)
usuarioRouter.delete('/usuario/:id', usuarioController.deleteUsuario)

usuarioRouter.post('/usuario/login', usuarioController.verifyLogin)
usuarioRouter.get('/usuario/refeicao/:id_usuario', usuarioController.listRefeicaoOfUsuario);
usuarioRouter.get('/usuario/refeicao/hoje/:id_usuario', usuarioController.listTodayRefeicao);

export default usuarioRouter;