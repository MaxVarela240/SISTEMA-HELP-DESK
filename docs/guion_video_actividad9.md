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

## Cómo leer cada sección de aquí en adelante

Cada parte del guion tiene dos bloques, siempre en el mismo orden:

- **🎬 QUÉ HACER** → son instrucciones para ti, el operador (dónde hacer clic, qué mostrar en pantalla). **Esto NO se dice en voz alta**, es solo tu guía visual mientras grabas.
- **🗣️ QUÉ DECIR** → es el texto entre comillas que sí hablas frente a la cámara, con tus propias palabras (no hace falta memorizarlo exacto, solo la idea).

---

## 1. Introducción (30-40 seg)

**🎬 QUÉ HACER:**
- Cámara/rostro visible en pantalla completa (sin compartir aún ninguna ventana de código o navegador).

**🗣️ QUÉ DECIR:**
> "Hola, mi nombre es Max Varela, estudiante de Tecnologías de la Información en Línea, quinto semestre. Este es el video de sustentación de la Actividad #9: el proyecto final de Desarrollo de Sistemas Informáticos — un sistema de gestión de incidentes tipo Help Desk, con frontend, backend y base de datos desplegados en la nube."

---

## 2. Arquitectura general (1 min)

**🎬 QUÉ HACER:**
- Puedes seguir con tu rostro en pantalla completa, o si tienes un diagrama simple dibujado (Frontend en Vercel → API REST en Render → MongoDB Atlas), muéstralo ahora. No es obligatorio, es opcional.

**🗣️ QUÉ DECIR:**
> "El sistema tiene tres capas desplegadas de forma independiente en la nube: el frontend, una SPA hecha en HTML, CSS y JavaScript puro, organizada en tres componentes — Dashboard, Formulario y Lista de tickets; el backend, una API REST construida con Node.js y Express, que expone operaciones CRUD para los tickets; y la base de datos, en MongoDB Atlas, en la nube, sin depender de ningún servidor local. El frontend consume la API mediante peticiones HTTP asíncronas con fetch, y la API se comunica con MongoDB Atlas mediante Mongoose."

---

## 3. Recorrido del código (2-3 min)

**🎬 QUÉ HACER:**
- Cambia a la ventana de **VS Code**.
- Abre y muestra brevemente, en este orden: `backend/src/models/Ticket.js` → `backend/src/controllers/ticketController.js` → `backend/src/routes/tickets.js` → `backend/src/server.js`.
- Luego cambia a: `frontend/js/config.js` → `frontend/js/api.js` → `frontend/js/dashboard.js` (o cualquiera de las vistas) → `frontend/js/app.js`.
- No necesitas leer el código línea por línea, solo señala con el cursor las partes que menciones al hablar.

**🗣️ QUÉ DECIR (mientras muestras el backend):**
> "Aquí pueden ver que separé el código en modelos, controladores y rutas, siguiendo el patrón MVC para que sea mantenible. En el modelo defino los campos del ticket: título, descripción, solicitante, categoría, prioridad y estado. El controlador tiene la lógica de cada operación: listar, crear, actualizar y eliminar. Y las rutas conectan cada endpoint HTTP con su función correspondiente. El servidor se conecta a MongoDB usando una variable de entorno."

**🗣️ QUÉ DECIR (mientras muestras el frontend):**
> "El frontend está modularizado por componente: Dashboard muestra estadísticas generales, Formulario permite crear tickets, y Lista permite verlos, cambiar su estado o eliminarlos, todo consumiendo la misma API REST a través de este módulo centralizado que encapsula las llamadas fetch."

---

## 4. Demostración en vivo (2 min)

**🎬 QUÉ HACER:**
1. Cambia a la **pestaña 1** del navegador (`https://sistema-help-desk-green.vercel.app`). Debe abrir en Dashboard.
2. Clic en **"Nuevo Ticket"** (menú azul, arriba).
3. Llena el formulario mientras hablas:
   - Título: `Impresora sin conexión en oficina 2`
   - Solicitante: tu nombre
   - Descripción: cualquier frase corta
   - Categoría: "Hardware"
   - Prioridad: "Alta"
4. Clic en **"Crear ticket"** (te lleva automáticamente a la Lista).
5. Señala con el mouse la fila del ticket recién creado.
6. Clic en el desplegable de **Estado** de esa fila → cámbialo a **"En Progreso"**. Espera el mensaje de confirmación abajo a la derecha.
7. Clic en **"Dashboard"** (arriba) para volver. Señala que las tarjetas cambiaron de número.
8. *(Opcional, si te sobra tiempo)* Vuelve a Lista, clic en **"Eliminar"** en el ticket de prueba, confirma en el diálogo.

**🗣️ QUÉ DECIR (al llegar al Dashboard, paso 1):**
> "Aquí vemos el resumen en tiempo real; actualmente hay algunos tickets ya cargados de pruebas anteriores."

**🗣️ QUÉ DECIR (al crear el ticket, pasos 2-4):**
> Puedes narrar en voz alta lo que vas escribiendo, por ejemplo: "Voy a crear un nuevo ticket: título 'impresora sin conexión', categoría hardware, prioridad alta, y lo envío."

**🗣️ QUÉ DECIR (al verlo en la lista, paso 5):**
> "Este ticket ya está guardado en MongoDB Atlas, en la nube."

**🗣️ QUÉ DECIR (al cambiar el estado y volver al Dashboard, pasos 6-7):**
> "Como pueden ver, toda esta información se está guardando en tiempo real en MongoDB Atlas, y el servidor que la procesa está corriendo en Render — no hay nada corriendo en mi computadora."

---

## 5. Repositorios y despliegue (1 min)

**🎬 QUÉ HACER:**
1. Cambia a la **pestaña 2** (GitHub): muestra la lista de archivos y, si quieres, entra a "commits" para mostrar el historial.
2. Cambia a la **pestaña 3** (Render): muestra que el servicio `helpdesk-backend` dice **"Live"** en verde.
3. Cambia a la **pestaña 4** (Vercel): muestra que el proyecto tiene un deployment marcado como **"Ready"**.

**🗣️ QUÉ DECIR (puedes hablar mientras cambias entre las 3 pestañas):**
> "El código está organizado en un único repositorio de GitHub con dos carpetas, backend y frontend, siguiendo un flujo de ramas con feature branches, develop y main. El backend está desplegado en Render, conectado a un cluster gratuito de MongoDB Atlas, y el frontend está desplegado como sitio estático en Vercel."

---

## 6. Cierre (20-30 seg)

**🎬 QUÉ HACER:**
- Vuelve a mostrar tu rostro en pantalla completa (cierra o minimiza las ventanas de código/navegador).

**🗣️ QUÉ DECIR:**
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
