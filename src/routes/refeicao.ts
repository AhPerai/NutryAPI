import { Router } from 'express';

import * as refeicaoController from '../controllers/refeicaoController';

const refeicaoRouter = Router();

refeicaoRouter.get('/refeicao/:id', refeicaoController.getRefeicao)
refeicaoRouter.get('/refeicao', refeicaoController.listRefeicao)
refeicaoRouter.get('/refeicao/vitamina/:id', refeicaoController.listVitaminasFromRefeicao)
refeicaoRouter.post('/refeicao', refeicaoController.createRefeicao)
refeicaoRouter.post('/refeicao/alimento/relacao', refeicaoController.adicionarAlimento)


export default refeicaoRouter;