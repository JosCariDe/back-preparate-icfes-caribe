
import Estudiante from '../schemas/estudiantes.js'; 

class estudiantesModel {
    async create(estudianteData) {
        try {
            const nuevoEstudiante = await Estudiante.create(estudianteData);
            return nuevoEstudiante;
        } catch (error) {
            console.error('Error creating student with Mongoose:', error);
            throw error; 
        }
    }

    async update(id, estudianteData) {
        try {
            // findOneAndUpdate espera un objeto de filtro como primer argumento
            const nuevoEstudiante = await Estudiante.findOneAndUpdate({ _id: id }, estudianteData, {new: true});
            return nuevoEstudiante;
        } catch (error) {
            console.error('Error update student with Mongoose:', error);
            throw error; 
        }
    }

    async delete(id) {
        try {
            // findOneAndDelete espera un objeto de filtro como primer argumento
            const nuevoEstudiante = await Estudiante.findOneAndDelete({ _id: id });
            return nuevoEstudiante;
        } catch (error) {
            console.error('Error delete student with Mongoose:', error);
            throw error; 
        }
    }

    async getAll() {
        try {
            const estudiantes = await Estudiante.find();
            return estudiantes;
        } catch (error) {
            console.error('Error getAll student with Mongoose:', error);
            throw error; 
        }
    }

    async getOne(id) {
        try {
            const nuevoEstudiante = await Estudiante.findById(id);
            return nuevoEstudiante;
        } catch (error) {
            console.error('Error get student with Mongoose:', error);
            throw error; 
        }
    }

    async findByCorreo(correo) {
        try {
            const estudiante = await Estudiante.findOne({ correo });
            return estudiante;
        } catch (error) {
            console.error('Error finding student by email with Mongoose:', error);
            throw error;
        }
    }
}

export default new estudiantesModel();
