import { Router } from 'express';

import * as refeicaoController from '../controllers/refeicaoController';

const refeicaoRouter = Router();

refeicaoRouter.get('/refeicao', refeicaoController.listRefeicao)
refeicaoRouter.post('/refeicao', refeicaoController.createRefeicao)

export default refeicaoRouter;