# Sistema Help Desk

SPA de gestión de tickets de soporte que consume una API REST propia.

## Estructura

- `backend/`: API REST (Node.js + Express + MongoDB/Mongoose).
- `frontend/`: SPA (HTML/CSS/JS) con vistas de Dashboard, Formulario y Lista.

## Backend

```bash
cd backend
npm install
cp .env.example .env   # completar MONGODB_URI
npm start
```

Variables de entorno:
- `MONGODB_URI`: cadena de conexión de MongoDB Atlas.
- `PORT`: puerto del servidor (por defecto 4000).

### Endpoints

| Método | Ruta               | Descripción            |
|--------|--------------------|-------------------------|
| GET    | /api/tickets       | Listar todos los tickets |
| GET    | /api/tickets/:id   | Obtener un ticket       |
| POST   | /api/tickets       | Crear un ticket         |
| PUT    | /api/tickets/:id   | Actualizar un ticket    |
| DELETE | /api/tickets/:id   | Eliminar un ticket      |

## Frontend

Abrir `frontend/index.html` con un servidor estático, o desplegar la carpeta `frontend/` en Vercel/Netlify.

Antes de desplegar, editar `frontend/js/config.js` con la URL pública del backend desplegado en Render.

## Despliegue

1. **MongoDB Atlas**: crear un cluster gratuito M0 y obtener la cadena de conexión.
2. **Render**: desplegar la carpeta `backend/` como Web Service, configurando `MONGODB_URI`.
3. **Vercel/Netlify**: desplegar la carpeta `frontend/` como sitio estático.
