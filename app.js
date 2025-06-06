import 'dotenv/config';
import express from 'express';
import routesEstudiantes from './routes/estudiante.js'
import bodyParser from 'body-parser';
import dbClient from './config/dbClient.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/estudiantes', routesEstudiantes);

try {
    const PORT  = process.env.PORT || 3000; 
    app.listen(PORT, ()=> console.log('Servidor activo en el puerto ' + PORT))
} catch(e) {
    console.log(e);
}

process.on('SIGINT', async() => {
    dbClient.cerracConexion();
    process.exit(0);
});