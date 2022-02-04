import { Router } from 'express';

import * as usuarioController from '../controllers/usuarioController'

const usuarioRouter = Router();

usuarioRouter.get('/ping', usuarioController.ping)
usuarioRouter.get('/random', usuarioController.random)
usuarioRouter.get('/nome/:nome', usuarioController.nome)

usuarioRouter.post('/usuario', usuarioController.createUsuario)
usuarioRouter.get('/usuario', usuarioController.listUsuario)
usuarioRouter.get('/usuario/:id', usuarioController.getUsuario)
usuarioRouter.put('/usuario/:id', usuarioController.updateUsuario)
usuarioRouter.delete('/usuario/:id', usuarioController.deleteUsuario)

export default usuarioRouter;