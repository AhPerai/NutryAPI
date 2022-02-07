import { Router } from 'express';

import * as alimentoVitaminaController from '../controllers/alimentoVitaminaController';

const alimentoVitaminaRouter = Router();

alimentoVitaminaRouter.get('/alimentoVitamina', alimentoVitaminaController.listRelacao)

export default alimentoVitaminaRouter;