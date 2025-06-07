import estudiantesModel from '../models/estudiantes.js'; // Importar la instancia del modelo
import bcrypt from 'bcrypt';

const authController = {
    registerEstudiante: async (req, res) => {
        const { nombre_completo, correo, contrasena, departamento, municipio, grado } = req.body;

        try {
            // Verificar si el estudiante ya existe
            const existingEstudiante = await estudiantesModel.findByCorreo(correo);
            if (existingEstudiante) {
                return res.status(409).json({ message: 'El correo ya está registrado' });
            }

            // Hashear la contraseña
            const saltRounds = 10;
            const contrasena_hash = await bcrypt.hash(contrasena, saltRounds);

            // Crear nuevo estudiante
            const newEstudianteData = {
                nombre_completo,
                correo,
                contrasena_hash,
                fecha_registro: new Date(),
                departamento,
                municipio,
                grado
            };

            const nuevoEstudiante = await estudiantesModel.create(newEstudianteData);

            // Devolver el estudiante creado (sin el hash de la contraseña)
            const estudianteResponse = nuevoEstudiante.toObject();
            delete estudianteResponse.contrasena_hash;

            res.status(201).json({ data: estudianteResponse, message: 'Registro exitoso' });

        } catch (error) {
            console.error('Error en el registro de estudiante:', error);
            res.status(500).json({ message: 'Error interno del servidor al registrar estudiante' });
        }
    },

    loginEstudiante: async (req, res) => {
        const { correo, contrasena } = req.body;

        try {
            // Buscar el estudiante por correo usando el método del modelo
            const estudiante = await estudiantesModel.findByCorreo(correo);

            // Si el estudiante no existe
            if (!estudiante) {
                return res.status(401).json({ message: 'Ingresa Bien el correo' });
            }

            // Verificar si el hash de la contraseña existe en el estudiante
            if (!estudiante.contrasena_hash) {
                console.warn(`Estudiante con correo ${correo} no tiene contrasena_hash.`);
                return res.status(401).json({ message: 'Credenciales inválidas' });
            }

            // Comparar la contraseña proporcionada con el hash almacenado
            const isMatch = await bcrypt.compare(contrasena, estudiante.contrasena_hash);

            // Si las contraseñas no coinciden
            if (!isMatch) {
                return res.status(401).json({ message: 'Contraseña Incorrecta' });
            }

            // Si las credenciales son válidas, devolver el objeto estudiante (sin el hash de la contraseña)
            const estudianteResponse = estudiante.toObject();
            delete estudianteResponse.contrasena_hash;

            res.status(200).json({ data: estudianteResponse });

        } catch (error) {
            console.error('Error en la autenticación:', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }
};

export default authController;
