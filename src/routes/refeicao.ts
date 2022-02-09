import { Router } from 'express';

import * as refeicaoController from '../controllers/refeicaoController';

const refeicaoRouter = Router();

refeicaoRouter.post('/refeicao', refeicaoController.createRefeicao)
refeicaoRouter.get('/refeicao/:id', refeicaoController.getRefeicao)
refeicaoRouter.get('/refeicao', refeicaoController.listRefeicao)


refeicaoRouter.post('/refeicao/alimento/relacao', refeicaoController.adicionarAlimento)

refeicaoRouter.get('/refeicao/alimento/:id', refeicaoController.listAlimentoFromRefeicao)
refeicaoRouter.get('/refeicao/vitamina/:id', refeicaoController.listVitaminasFromRefeicao)


export default refeicaoRouter;