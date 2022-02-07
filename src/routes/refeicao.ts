import { Router } from 'express';

import * as refeicaoController from '../controllers/refeicaoController';

const refeicaoRouter = Router();

refeicaoRouter.get('/refeicao', refeicaoController.listRefeicao)
refeicaoRouter.post('/refeicao', refeicaoController.createRefeicao)
refeicaoRouter.post('/refeicao/alimento/relacao', refeicaoController.adicionarAlimento)

export default refeicaoRouter;