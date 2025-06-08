import 'dotenv/config';
import express from 'express';
import routesEstudiantes from './routes/estudiante.js';
import authRoutes from './routes/auth.js'; // Importar las rutas de autenticación
import routesPregunta from './routes/pregunta.js'; // Importar las rutas de preguntas
import bodyParser from 'body-parser';
import dbClient from './config/dbClient.js';
import cors from 'cors'; // Importar el paquete cors

const app = express();

// Configuración de CORS
app.use(cors({
  origin: '*', // Permite cualquier origen (¡NO RECOMENDADO PARA PRODUCCIÓN!)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/estudiantes', routesEstudiantes);
app.use('/auth', authRoutes); 
app.use('/preguntas', routesPregunta); 

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
