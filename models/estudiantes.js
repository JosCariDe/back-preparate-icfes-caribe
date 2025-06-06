
import dbClient from '../config/dbClient.js';


class estudiantesModel {

    async create(estudiante) {
        const colEstudiantes = dbClient.db.collection('estudiantes');
        return await colEstudiantes.insertOne(estudiante);
    }

}

export default new estudiantesModel;
