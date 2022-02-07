import { Router } from 'express';

import * as refeicaoAlimentoController from '../controllers/refeicaoAlimentoController';

const refeicaoAlimentoRouter = Router();

refeicaoAlimentoRouter.get('/refeicaoAlimento', refeicaoAlimentoController.listRelacao)

export default refeicaoAlimentoRouter;