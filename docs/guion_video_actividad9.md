# Guion para video de sustentación — Actividad #9

Duración objetivo: 6-8 minutos. Habla con naturalidad, no leas palabra por palabra: usa esto como guía de puntos.

---

## 0. Instrucciones técnicas: cómo grabar, paso a paso

### A. Prepara las pestañas y ventanas ANTES de grabar

Abre esto con anticipación, en este orden, para no perder tiempo buscando durante la grabación:

1. **VS Code** (o el editor que uses) con la carpeta del proyecto abierta: `C:\Users\USUARIO\Desktop\SISTEMA-HELP-DESK`. Ten listos en pestañas:
   - `backend/src/models/Ticket.js`
   - `backend/src/controllers/ticketController.js`
   - `backend/src/routes/tickets.js`
   - `backend/src/server.js`
   - `frontend/js/config.js`
   - `frontend/js/api.js`
   - `frontend/js/app.js`
2. **Navegador, pestaña 1**: `https://sistema-help-desk-green.vercel.app` (el frontend en producción).
3. **Navegador, pestaña 2**: `https://github.com/MaxVarela240/SISTEMA-HELP-DESK` (el repositorio).
4. **Navegador, pestaña 3**: `https://dashboard.render.com` → entra al servicio `helpdesk-backend` (para mostrar que está "Live").
5. **Navegador, pestaña 4**: `https://vercel.com/dashboard` → entra al proyecto `sistema-help-desk` (para mostrar el deployment).
6. Cierra cualquier notificación, chat o ventana que no quieras que se vea en pantalla.

### B. Cómo grabar pantalla + tu rostro en Windows (gratis, sin instalar nada)

**Opción recomendada — Xbox Game Bar (ya viene instalado en Windows 11):**

1. Presiona **`Windows + G`** para abrir la Game Bar.
2. Conecta tu cámara web: en la Game Bar busca el widget de **Cámara** (ícono de cámara). Si no aparece, ábrelo desde el buscador de Windows escribiendo "Cámara" para confirmar que tu webcam funciona, luego vuelve a la Game Bar.
3. En el widget **Captura** (ícono de círculo rojo), asegúrate de que el micrófono esté activado (ícono de micrófono encendido).
4. Activa el widget de cámara para que tu rostro aparezca en una ventana flotante superpuesta — esto es lo que exige la guía ("mostrando su rostro").
5. Haz clic en **Iniciar grabación** (círculo rojo) o presiona **`Windows + Alt + R`**.
6. Sigue el guion de abajo (secciones 1 a 6).
7. Para terminar, presiona **`Windows + Alt + R`** de nuevo, o usa la barra de captura.
8. El video se guarda automáticamente en: `C:\Users\<tu_usuario>\Videos\Captures`.

**Si tu rostro no aparece superpuesto con Game Bar** (a veces el widget de cámara no se combina bien con la grabación de pantalla completa), alternativa simple:
- Graba tu presentación inicial y de cierre (secciones 1 y 6 del guion) con la app **Cámara** de Windows, mostrando tu rostro hablando a cámara.
- Graba la demostración técnica (secciones 2 a 5) con Game Bar mostrando solo pantalla.
- Une ambos videos con el editor de **Clipchamp** (viene preinstalado en Windows 11: búscalo en el menú inicio) arrastrando los clips en orden y exportando como un solo archivo.

### C. Cómo subir el video sin restricciones

**YouTube (recomendado, más simple):**
1. Ve a https://studio.youtube.com y haz clic en el ícono de **subir video** (cámara con un +) arriba a la derecha.
2. Arrastra tu archivo de video.
3. En "Detalles", pon un título como "Actividad 9 - Sustentación - Max Varela".
4. En **Visibilidad**, elige **"Público"** o **"No listado"** (No listado = solo quien tenga el link lo ve, cumple con "sin restricciones de privacidad" porque cualquiera con el enlace puede verlo sin iniciar sesión).
5. Copia el enlace que te da al finalizar.

**Google Drive (alternativa):**
1. Sube el archivo a tu Drive.
2. Clic derecho → **Compartir** → cambia el acceso a **"Cualquier persona con el enlace"** (no dejarlo en "Restringido").
3. Copia el enlace.

Pega ese enlace en el documento `Varela_Max_Actividad9.docx`, reemplazando el texto resaltado en amarillo.

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

Cambia a la **pestaña 1** que dejaste lista (`https://sistema-help-desk-green.vercel.app`). Sigue estos clics exactos:

1. La página abre en **Dashboard**. Señala con el mouse las 4 tarjetas (Total, Abiertos, En progreso, Cerrados) y di: "aquí vemos el resumen en tiempo real, actualmente hay algunos tickets ya cargados de pruebas anteriores."
2. Clic en el botón **"Nuevo Ticket"** (arriba, en el menú azul).
3. Llena el formulario en vivo, hablando mientras escribes:
   - Título: `Impresora sin conexión en oficina 2`
   - Solicitante: tu nombre
   - Descripción: cualquier frase corta
   - Categoría: elige "Hardware"
   - Prioridad: elige "Alta"
4. Clic en **"Crear ticket"**. El sistema te lleva automáticamente a la Lista.
5. En **"Lista de Tickets"**, señala la fila que acabas de crear. Di: "este ticket ya está guardado en MongoDB Atlas, en la nube."
6. En esa misma fila, clic en el desplegable de **Estado** y cámbialo de "Abierto" a **"En Progreso"**. Espera el mensaje de confirmación (toast) que aparece abajo a la derecha.
7. Clic en el botón **"Dashboard"** (arriba) para volver. Señala que las tarjetas de "Abiertos" y "En progreso" cambiaron su número.
8. (Opcional, si te sobra tiempo) Vuelve a Lista y haz clic en **"Eliminar"** en el ticket de prueba, confirma en el diálogo, para mostrar también el borrado.

> "Como pueden ver, toda esta información se está guardando en tiempo real en MongoDB Atlas, en la nube, y el servidor que la procesa está corriendo en Render — no hay nada corriendo en mi computadora."

---

## 5. Repositorios y despliegue (1 min)

> "El código está organizado en un único repositorio de GitHub con dos carpetas, `backend` y `frontend`, siguiendo un flujo de ramas con `feature branches`, `develop` y `main`. El backend está desplegado en Render, conectado a un cluster gratuito de MongoDB Atlas, y el frontend está desplegado como sitio estático en Vercel."

Ve cambiando de pestaña mientras hablas:
1. **Pestaña 2** (GitHub): muestra la lista de archivos, y si quieres, clic en "commits" para mostrar el historial con los mensajes `feat(backend)...`, `feat(frontend)...`.
2. **Pestaña 3** (Render): muestra que el servicio `helpdesk-backend` dice **"Live"** en verde.
3. **Pestaña 4** (Vercel): muestra que el proyecto `sistema-help-desk` tiene un deployment marcado como **"Ready"** / con el check verde.

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
