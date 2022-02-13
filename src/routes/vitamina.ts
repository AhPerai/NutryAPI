import { Router } from 'express';

import * as vitaminaController from '../controllers/vitaminaController';

const vitaminaRouter = Router();

vitaminaRouter.get('/vitamina/:id', vitaminaController.getVitamina)
vitaminaRouter.get('/vitamina', vitaminaController.listVitamina)

vitaminaRouter.get('/vitamina/alimento/:id',vitaminaController.getAlimentosFromVitamina)

export default vitaminaRouter;