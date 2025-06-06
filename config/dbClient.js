import 'dotenv/config';
import { MongoClient } from "mongodb";
import mongoose from 'mongoose';

class dbClient {

    constructor() {
        this.conectarBaseDatos();
    }

    async conectarBaseDatos() {
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/caribeICFES?retryWrites=true&w=majority`;
        //this.client = new MongoClient(queryString);
        try {
            await mongoose.connect(queryString);
            console.log('Conectados al servidor de BD en Mongo ATLAS');
        }catch(e) {
            console.log('Error al conectar a la BD con mongosee');
        };
        
    }

    async conectarBD() {
        try {
            await this.client.connect();
            this.db = this.client.db('icfes');
            console.log('Conectados al servidor de BD en Mongo ATLAS')

        }catch(e) {
            console.log(e);
        }
    }

    async cerracConexion() {
        try {
            await mongoose.disconnect();
            console.log('Desconectado de la Base de datos');
        }catch (e) {
            console.log('Error al cerrar la conexion');
        }
    }
}

export default new dbClient;
