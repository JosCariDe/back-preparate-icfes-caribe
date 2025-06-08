import mongoose from 'mongoose';

const preguntaSchema = new mongoose.Schema({
    area: { 
        type: String, 
        required: true, 
        enum: [
            'Lectura Crítica', 
            'Matemáticas', 
            'Ciencias Naturales', 
            'Ciencias Sociales y Ciudadanas', 
            'Inglés'
        ] 
    },
    tema: { type: String, required: true },
    enunciado: { type: String, required: true },
    opciones: [
        {
            letra: { type: String, uniqued:true, required: true, enum: ['A', 'B', 'C', 'D'] },
            texto: { type: String, required: true }
        }
    ],
    url_imagen: { type: String, required: false },
    explicacion_correcta: { type: String, required: true }
});

export default preguntaSchema;
