import mongoose from 'mongoose';

// Esquema para Simulacro
const simulacroSchema = new mongoose.Schema({
    estado: { type: String, required: false, enum: ['completado', 'pendiente', 'en progreso'] },
    lista_id_preguntas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pregunta' }],
    lista_opciones_correctas: [{ type: String }],
    lista_opciones_escogidas: [{ type: String }],
}); // Mongoose creará automáticamente un _id

// Esquema para Foro
const foroSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    creador: { type: String, required: false },
    fecha: { type: Date, required: false }
});

// Esquema para ClaseICFES
const claseIcfesSchema = new mongoose.Schema({
    nombre_clase: { type: String, required: true },
    profesor: { type: String, required: false },
    foros: [foroSchema], // Array de subdocumentos Foro
    simulacros: [simulacroSchema] // Array de subdocumentos Simulacro
});

// Esquema principal para Estudiante
const estudianteSchema = new mongoose.Schema({
    nombre_completo: { type: String, required: true },
    correo: { type: String, required: true, unique: true }, // Correo como único
    contrasena_hash: { type: String, required: true },
    fecha_registro: { type: Date, required: false },
    departamento: { type: String, required: false },
    municipio: { type: String, required: false },
    grado: { type: String, required: false },
    clasesICFES: [claseIcfesSchema] // Array de subdocumentos ClaseICFES
});

const Estudiante = mongoose.model('estudiantes', estudianteSchema);

export default Estudiante;
