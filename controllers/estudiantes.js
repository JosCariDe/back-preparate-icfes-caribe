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
            const data = await estudiantesModel.update(req.body);
            res.status(201).json({message: 'Estudiante Actualizado Exitosamente', data: data});
        }catch (e) {
            console.log('Error al actualizar estudiante: ', e);
            res.status(500).send({message:'Error interno Del servidor al actualizar estudiante', error: e});
        }
    }

    async delete(req, res) {
        try {

        }catch (e) {
            console.log('Error en ' + e);
        }
    }

    async getAll(req, res) {
        try {
            const data = await estudiantesModel.getAll(req.body);
            res.status(201).json({message: 'Estudiantes Encontrados Exitosamente', data: data});
        }catch (e) {
            console.log('Error al buscar estudiante: ', e);
            res.status(500).send({message:'Error interno Del servidor al buscar TODOS los estudiante', error: e});
        }
    }

    async getOne(req, res) {
        try {
            const data = await estudiantesModel.getOne(req.body);
            res.status(201).json({message: 'Estudiante Encontrado Exitosamente', data: data});
        }catch (e) {
            console.log('Error al buscar estudiante: ', e);
            res.status(500).send({message:'Error interno Del servidor al buscar estudiante', error: e});
        }
    }
}

export default new estudianteController;