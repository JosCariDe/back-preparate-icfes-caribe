import estudiantesModel from '../models/estudiantes.js'

class estudianteController {

    constructor() {
         
    }

    async create(req, res) {
        try {
            const data = await estudiantesModel.create(req.body);
            res.status(201).json({message: 'Estudiante Creado Exitosamente', data: data});
        }catch (e) {
            console.log('Error al crear estudiante: ', e);
            res.status(500).send({message:'Error interno Del servidor al crear estudiante', error: e});
        }
    }
    
    async update(req, res) {
        try {
            const { id } = req.params; // Obtener el ID de los parámetros de la URL
            const data = await estudiantesModel.update(id, req.body); // Pasar ID y datos
            if (!data) {
                return res.status(404).json({ message: 'Estudiante no encontrado para actualizar' });
            }
            res.status(200).json({ message: 'Estudiante Actualizado Exitosamente', data: data });
        } catch (e) {
            console.error('Error al actualizar estudiante: ', e);
            res.status(500).send({ message: 'Error interno Del servidor al actualizar estudiante', error: e });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params; // Obtener el ID de los parámetros de la URL
            const data = await estudiantesModel.delete(id); // Pasar el ID
            if (!data) {
                return res.status(404).json({ message: 'Estudiante no encontrado para eliminar' });
            }
            res.status(200).json({
                message: 'Estudiante Eliminado Exitosamente',
                data: data
            });
        } catch (e) {
            console.error('Error al Eliminar estudiante: ', e);
            res.status(500).send({ message: 'Error interno Del servidor al Eliminar estudiante', error: e });
        }
    }

    async getAll(req, res) {
        try {
            const data = await estudiantesModel.getAll(); // No necesita req.body
            res.status(200).json({ message: 'Estudiantes Encontrados Exitosamente', data: data });
        } catch (e) {
            console.error('Error al buscar estudiante: ', e);
            res.status(500).send({ message: 'Error interno Del servidor al buscar TODOS los estudiante', error: e });
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params; // Obtener el ID de los parámetros de la URL
            const data = await estudiantesModel.getOne(id); // Pasar el ID
            if (!data) {
                return res.status(404).json({ message: 'Estudiante no encontrado' });
            }
            res.status(200).json({ message: 'Estudiante Encontrado Exitosamente', data: data });
        } catch (e) {
            console.error('Error al buscar estudiante: ', e);
            res.status(500).send({ message: 'Error interno Del servidor al buscar estudiante', error: e });
        }
    }
}

export default new estudianteController;
