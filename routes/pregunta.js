import { Router } from 'express';
import { 
    getPreguntas, 
    getPreguntaById, 
    createPregunta, 
    updatePregunta, 
    deletePregunta 
} from '../controllers/pregunta.js';

const router = Router();

router.get('/', getPreguntas);
router.get('/:id', getPreguntaById);
router.post('/', createPregunta);
router.put('/:id', updatePregunta);
router.delete('/:id', deletePregunta);

export default router;
