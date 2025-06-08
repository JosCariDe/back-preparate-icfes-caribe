import mongoose from 'mongoose';
import preguntaSchema from '../schemas/pregunta.js';

const Pregunta = mongoose.model('Pregunta', preguntaSchema);

export default Pregunta;
