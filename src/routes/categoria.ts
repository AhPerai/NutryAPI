import { Router } from 'express';

import * as categoriaController from '../controllers/categoriaController';

const categoriaRouter = Router();

categoriaRouter.get('/categoria/:id', categoriaController.getCategoria)
categoriaRouter.get('/categoria', categoriaController.listCategoria)
categoriaRouter.get('/categoria/alimento/:id_categoria', categoriaController.listAlimentoFromCategoria);

export default categoriaRouter;