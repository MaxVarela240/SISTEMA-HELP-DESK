# Help Desk API — Backend (Actividad #8)

API REST para el Sistema de Gestión de Incidentes (Help Desk), construida con **Node.js**, **Express** y **MongoDB** (Mongoose). Permite realizar las operaciones CRUD completas sobre los tickets reportados.

## Tecnologías

- Node.js + Express 4
- MongoDB / Mongoose 8
- CORS, dotenv
- `mongodb-memory-server` (solo desarrollo, cuando no se define `MONGODB_URI`)

## Estructura del proyecto

```
backend/
├── src/
│   ├── config/
│   │   └── db.js              # Conexión a MongoDB (Atlas/local o en memoria)
│   ├── models/
│   │   └── Ticket.js           # Esquema Mongoose de Ticket
│   ├── controllers/
│   │   └── ticketController.js # Lógica de negocio del CRUD
│   ├── routes/
│   │   └── tickets.js          # Definición de endpoints /api/tickets
│   └── server.js               # Punto de entrada de la app Express
├── .env.example
├── .gitignore
└── package.json
```

## Modelo de datos: Ticket

| Campo        | Tipo   | Valores permitidos                    |
|--------------|--------|----------------------------------------|
| titulo       | String | requerido                              |
| descripcion  | String | requerido                              |
| solicitante  | String | requerido                              |
| categoria    | String | `Red`, `Hardware`, `Software`          |
| prioridad    | String | `Alta`, `Media`, `Baja` (default: Media)|
| estado       | String | `Abierto`, `En Progreso`, `Cerrado` (default: Abierto) |

## Variables de entorno

Copiar `.env.example` a `.env` y completar:

```
MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/helpdesk
PORT=4000
```

Si **no** se define `MONGODB_URI` (por ejemplo, en una máquina sin MongoDB instalado), el servidor levanta automáticamente una base de datos MongoDB en memoria (`mongodb-memory-server`) para poder desarrollar y probar sin instalar nada adicional. En producción/entrega final se recomienda usar MongoDB Atlas.

## Instalación y ejecución

```bash
cd backend
npm install
npm start
```

El servidor queda escuchando en `http://localhost:4000`.

## Endpoints de la API REST

Base URL: `http://localhost:4000/api/tickets`

| Método | Endpoint            | Descripción                              |
|--------|----------------------|-------------------------------------------|
| GET    | `/api/tickets`       | Lista todos los tickets                   |
| GET    | `/api/tickets/:id`   | Obtiene un ticket específico              |
| POST   | `/api/tickets`       | Crea un nuevo ticket                      |
| PUT    | `/api/tickets/:id`   | Actualiza estado/detalles de un ticket    |
| DELETE | `/api/tickets/:id`   | Elimina un ticket                         |

### Ejemplos con cURL

```bash
# Listar tickets
curl http://localhost:4000/api/tickets

# Crear ticket
curl -X POST http://localhost:4000/api/tickets \
  -H "Content-Type: application/json" \
  -d '{"titulo":"No enciende el monitor","descripcion":"El monitor de la sala 3 no enciende","solicitante":"Maria Perez","categoria":"Hardware","prioridad":"Alta"}'

# Obtener un ticket
curl http://localhost:4000/api/tickets/<id>

# Actualizar estado
curl -X PUT http://localhost:4000/api/tickets/<id> \
  -H "Content-Type: application/json" \
  -d '{"estado":"En Progreso"}'

# Eliminar ticket
curl -X DELETE http://localhost:4000/api/tickets/<id>
```

## Control de versiones

El desarrollo de esta actividad se realizó en la rama `feature/backend-api`, posteriormente fusionada a `develop`.
