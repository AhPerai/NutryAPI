import { Router } from 'express';

import * as aguaController from '../controllers/aguaController';

const aguaRouter = Router();

aguaRouter.post('/agua', aguaController.createAgua)
aguaRouter.get('/agua/:id', aguaController.getAgua)
aguaRouter.get('/agua', aguaController.listAgua)

export default aguaRouter;