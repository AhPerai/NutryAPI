import { Router } from 'express';

import * as categoriaController from '../controllers/categoriaController';

const categoriaRouter = Router();

categoriaRouter.get('/categoria', categoriaController.listCategoria)

export default categoriaRouter;