# Guion para video de sustentación — Actividad #9

Duración objetivo: 6-8 minutos. Habla con naturalidad, no leas palabra por palabra: usa esto como guía de puntos.

---

## 1. Introducción (30-40 seg)

> "Hola, mi nombre es Max Varela, estudiante de Tecnologías de la Información en Línea, quinto semestre. Este es el video de sustentación de la Actividad #9: el proyecto final de Desarrollo de Sistemas Informáticos — un sistema de gestión de incidentes tipo Help Desk, con frontend, backend y base de datos desplegados en la nube."

(Muestra tu rostro a cámara durante esta parte, como pide la guía.)

---

## 2. Arquitectura general (1 min)

> "El sistema tiene tres capas desplegadas de forma independiente en la nube:
> - El **frontend**, una SPA (Single Page Application) hecha en HTML, CSS y JavaScript puro, organizada en tres componentes: Dashboard, Formulario y Lista de tickets.
> - El **backend**, una API REST construida con Node.js y Express, que expone operaciones CRUD para los tickets.
> - La **base de datos**, en MongoDB Atlas, en la nube, sin depender de ningún servidor local.
>
> El frontend consume la API mediante peticiones HTTP asíncronas mediante `fetch`, y la API se comunica con MongoDB Atlas mediante Mongoose."

(Aquí puedes mostrar un diagrama simple: Frontend (Vercel) → API REST (Render) → MongoDB Atlas.)

---

## 3. Recorrido del código (2-3 min)

Abre tu editor de código (VS Code) y muestra:

1. **Backend** (`backend/src`):
   - `models/Ticket.js`: el esquema de Mongoose — explica los campos (`titulo`, `descripcion`, `solicitante`, `categoria`, `prioridad`, `estado`) y los enums.
   - `controllers/ticketController.js`: la lógica de cada endpoint (listar, obtener, crear, actualizar, eliminar).
   - `routes/tickets.js`: cómo las rutas conectan HTTP con los controladores.
   - `config/db.js` y `server.js`: la conexión a MongoDB vía variable de entorno `MONGODB_URI` y el arranque del servidor Express.

   > "Aquí pueden ver que separé el código en modelos, controladores y rutas, siguiendo el patrón MVC para que sea mantenible."

2. **Frontend** (`frontend/js`):
   - `config.js`: la URL de la API centralizada en una constante.
   - `api.js`: el módulo que encapsula todas las llamadas `fetch` a la API.
   - `dashboard.js`, `formulario.js`, `lista.js`: cada uno maneja su propia vista.
   - `app.js`: el router simple que cambia entre vistas.

   > "El frontend está modularizado por componente: Dashboard muestra estadísticas generales, Formulario permite crear tickets, y Lista permite verlos, cambiar su estado o eliminarlos, todo consumiendo la misma API REST."

---

## 4. Demostración en vivo (2 min)

Con el sistema ya desplegado (URLs reales, no localhost):

1. Abre la URL del frontend en Vercel/Netlify.
2. Muestra el Dashboard (aunque esté en cero al inicio).
3. Ve a "Nuevo Ticket", llena el formulario y créalo.
4. Ve a "Lista de Tickets", muestra que aparece, cambia su estado (ej. de "Abierto" a "En Progreso").
5. Vuelve al Dashboard y muestra que las estadísticas se actualizaron.
6. (Opcional) Elimina el ticket para mostrar el DELETE.

> "Como pueden ver, toda esta información se está guardando en tiempo real en MongoDB Atlas, en la nube, y el servidor que la procesa está corriendo en Render — no hay nada corriendo en mi computadora."

---

## 5. Repositorios y despliegue (1 min)

> "El código está organizado en un único repositorio de GitHub con dos carpetas, `backend` y `frontend`, siguiendo un flujo de ramas con `feature branches`, `develop` y `main`. El backend está desplegado en Render, conectado a un cluster gratuito de MongoDB Atlas, y el frontend está desplegado como sitio estático en Vercel."

Menciona en pantalla (puedes tener las pestañas abiertas):
- El repo de GitHub.
- El dashboard de Render mostrando el servicio activo.
- El dashboard de Vercel mostrando el deployment.

---

## 6. Cierre (20-30 seg)

> "Con esto concluyo la sustentación de la Actividad #9. El sistema completo — frontend, backend y base de datos — está funcionando de manera integrada y desplegado en la nube, cumpliendo con los requisitos de la actividad. Muchas gracias."

---

## URLs del proyecto desplegado

- Repositorio GitHub: https://github.com/MaxVarela240/SISTEMA-HELP-DESK
- Backend (API REST) en Render: https://helpdesk-backend-oy9a.onrender.com/api/tickets
- Frontend (SPA) en Vercel: https://sistema-help-desk-green.vercel.app
- Base de datos: MongoDB Atlas (cluster `Cluster0`)

## Checklist antes de grabar

- [ ] Backend desplegado y respondiendo en su URL pública (no localhost).
- [ ] Frontend desplegado apuntando a la URL del backend (revisar `frontend/js/config.js`).
- [ ] Al menos 1-2 tickets de prueba creados para que el Dashboard no se vea vacío.
- [ ] Mostrar tu rostro durante el video (requisito obligatorio).
- [ ] Subir el video sin restricciones de privacidad (público o "cualquiera con el enlace").
