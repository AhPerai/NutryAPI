import { Router } from 'express';

import * as alimentoController from '../controllers/alimentoController';

const alimentoRouter = Router();

alimentoRouter.get('/alimento', alimentoController.listAlimento)

export default alimentoRouter;