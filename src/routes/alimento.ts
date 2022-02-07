import { Router } from 'express';

import * as alimentoController from '../controllers/alimentoController';

const alimentoRouter = Router();

alimentoRouter.get('/alimento/:id', alimentoController.getAlimento)
alimentoRouter.get('/alimento', alimentoController.listAlimento)
alimentoRouter.post('/alimento', alimentoController.createAlimento)
alimentoRouter.post('/alimento/vitamina/relacao', alimentoController.adicionarVitamina)

export default alimentoRouter;