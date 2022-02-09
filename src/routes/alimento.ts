import { Router } from 'express';

import * as alimentoController from '../controllers/alimentoController';

const alimentoRouter = Router();

alimentoRouter.post('/alimento', alimentoController.createAlimento)

alimentoRouter.get('/alimento/:id', alimentoController.getAlimento)
alimentoRouter.get('/alimento', alimentoController.listAlimento)

alimentoRouter.post('/alimento/vitamina/relacao', alimentoController.adicionarVitamina)

alimentoRouter.get('/alimento/vitamina/:id', alimentoController.listVitaminaFromAlimento)

export default alimentoRouter;