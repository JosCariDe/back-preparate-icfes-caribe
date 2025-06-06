
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
            const nuevoEstudiante = await Estudiante.findOneAndUpdate(id, estudianteData, {new: true});
            return nuevoEstudiante;
        } catch (error) {
            console.error('Error update student with Mongoose:', error);
            throw error; 
        }
    }

    async delete(id) {
        try {
            const nuevoEstudiante = await Estudiante.findOneAndDelete(id);
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
    // You can add other Mongoose-based methods here (e.g., find, findById, update, delete)
}

export default new estudiantesModel();
