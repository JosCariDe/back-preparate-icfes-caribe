import Pregunta from '../models/pregunta.js';

// Obtener todas las preguntas
export const getPreguntas = async (req, res) => {
    try {
        const preguntas = await Pregunta.find();
        res.status(200).json({
            message: 'Preguntas obtenidas correctamente',
            data: preguntas
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener una pregunta por ID
export const getPreguntaById = async (req, res) => {
    try {
        const pregunta = await Pregunta.findById(req.params.id);
        if (!pregunta) {
            return res.status(404).json({ message: 'Pregunta no encontrada' });
        }
        res.status(200).json({
            message: 'Pregunta obtenida correctamente',
            data: pregunta
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear una nueva pregunta
export const createPregunta = async (req, res) => {
    const { area, tema, enunciado, opciones, url_imagen, explicacion_correcta } = req.body;
    const newPregunta = new Pregunta({
        area,
        tema,
        enunciado,
        opciones,
        url_imagen,
        explicacion_correcta
    });

    try {
        const savedPregunta = await newPregunta.save();
        res.status(201).json({
            message: 'Pregunta creada correctamente',
            data: savedPregunta
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar una pregunta por ID
export const updatePregunta = async (req, res) => {
    try {
        const updatedPregunta = await Pregunta.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedPregunta) {
            return res.status(404).json({ message: 'Pregunta no encontrada' });
        }
        res.status(200).json({
            message: 'Pregunta actualizada correctamente',
            data: updatedPregunta
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar una pregunta por ID
export const deletePregunta = async (req, res) => {
    try {
        const deletedPregunta = await Pregunta.findByIdAndDelete(req.params.id);
        if (!deletedPregunta) {
            return res.status(404).json({ message: 'Pregunta no encontrada' });
        }
        res.status(200).json({ message: 'Pregunta eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
