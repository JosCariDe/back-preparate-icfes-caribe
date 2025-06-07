import { Router } from 'express';
import authController from '../controllers/auth.js';

const router = Router();

router.post('/register', authController.registerEstudiante);
router.post('/login', authController.loginEstudiante);

export default router;
