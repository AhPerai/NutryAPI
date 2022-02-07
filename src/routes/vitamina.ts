import { Router } from 'express';

import * as vitaminaController from '../controllers/vitaminaController';

const vitaminaRouter = Router();

vitaminaRouter.get('/vitamina', vitaminaController.listVitamina)
vitaminaRouter.get('/vitamina/:id', vitaminaController.getVitamina)

export default vitaminaRouter;