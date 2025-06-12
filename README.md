# back-app-caribe-icfes

## Descripción

Esta es una API backend para la gestión de estudiantes, preguntas y autenticación, diseñada para el proyecto SenaTecnico.

## Tecnologías Utilizadas

*   Node.js
*   Express.js
*   MongoDB (a través de Mongoose, inferido por la estructura de `schemas` y `models`)

## Configuración del Entorno

1.  **Clonar el repositorio**:
    ```bash
    git clone [URL_DEL_REPOSITORIO]
    cd back-app-caribe-icfes
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Configurar variables de entorno**:
    Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
    ```
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/nombre_de_tu_base_de_datos
    JWT_SECRET=tu_secreto_jwt_aqui
    ```
    Asegúrate de reemplazar `nombre_de_tu_base_de_datos` y `tu_secreto_jwt_aqui` con tus propios valores.

## Ejecución de la Aplicación

Para iniciar el servidor, ejecuta el siguiente comando:

```bash
npm start
```
O para desarrollo con reinicio automático:
```bash
npm run dev
```

## Estructura del Proyecto

*   `config/`: Archivos de configuración (ej. `dbClient.js` para la conexión a la base de datos).
*   `controllers/`: Lógica de negocio para manejar las solicitudes (ej. `auth.js`, `estudiantes.js`, `pregunta.js`).
*   `models/`: Definiciones de esquemas de la base de datos (ej. `estudiantes.js`, `pregunta.js`).
*   `routes/`: Definición de las rutas de la API (ej. `auth.js`, `estudiante.js`, `pregunta.js`).
*   `schemas/`: Esquemas de validación de datos (ej. `estudiantes.js`, `pregunta.js`).
*   `app.js`: Archivo principal de la aplicación.
*   `package.json`: Metadatos del proyecto y dependencias.

## Endpoints de la API

A continuación se listan algunos de los endpoints principales de la API. Para una documentación más detallada, consulta los archivos en el directorio `routes/`.

### Autenticación (`/api/auth`)
*   `POST /api/auth/register`: Registro de un nuevo usuario.
*   `POST /api/auth/login`: Inicio de sesión de un usuario.

### Estudiantes (`/api/estudiantes`)
*   `GET /api/estudiantes`: Obtener todos los estudiantes.
*   `GET /api/estudiantes/:id`: Obtener un estudiante por ID.
*   `POST /api/estudiantes`: Crear un nuevo estudiante.
*   `PUT /api/estudiantes/:id`: Actualizar un estudiante existente.
*   `DELETE /api/estudiantes/:id`: Eliminar un estudiante.

### Preguntas (`/api/preguntas`)
*   `GET /api/preguntas`: Obtener todas las preguntas.
*   `GET /api/preguntas/:id`: Obtener una pregunta por ID.
*   `POST /api/preguntas`: Crear una nueva pregunta.
*   `PUT /api/preguntas/:id`: Actualizar una pregunta existente.
*   `DELETE /api/preguntas/:id`: Eliminar una pregunta.
