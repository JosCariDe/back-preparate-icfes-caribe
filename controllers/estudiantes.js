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
            res.status(500).send({message:'Errir interno Del servidor al crear estudiante', error: e});
        }
    }
    
    async update(req, res) {
        try {

        }catch (e) {
            console.log('Error en ' + e);
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
            
        }catch (e) {
            console.log('Error en ' + e);
        }
    }

    async getOne(req, res) {
        try {

        }catch (e) {
            console.log('Error en ' + e);
        }
    }
}

export default new estudianteController;