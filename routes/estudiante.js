import express from 'express';
const route = express.Router();
import estudiantesController from '../controllers/estudiantes.js'

route.post('/', estudiantesController.create);
route.get('/:id', estudiantesController.getOne);
route.get('/', estudiantesController.getAll);
route.put('/:id', estudiantesController.update);
route.delete('/:id', estudiantesController.delete);

export default route;

