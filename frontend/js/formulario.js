const FormularioView = {
  render() {
    const container = document.getElementById('view-formulario');
    container.innerHTML = `
      <div class="card">
        <h2>Crear nuevo ticket</h2>
        <form id="ticket-form">
          <div class="form-group">
            <label for="titulo">Título</label>
            <input type="text" id="titulo" required maxlength="120" />
          </div>
          <div class="form-group">
            <label for="solicitante">Solicitante</label>
            <input type="text" id="solicitante" required maxlength="80" />
          </div>
          <div class="form-group">
            <label for="descripcion">Descripción</label>
            <textarea id="descripcion" required maxlength="1000"></textarea>
          </div>
          <div class="form-group">
            <label for="categoria">Categoría</label>
            <select id="categoria">
              <option value="Red">Red</option>
              <option value="Hardware">Hardware</option>
              <option value="Software" selected>Software</option>
            </select>
          </div>
          <div class="form-group">
            <label for="prioridad">Prioridad</label>
            <select id="prioridad">
              <option value="Baja">Baja</option>
              <option value="Media" selected>Media</option>
              <option value="Alta">Alta</option>
            </select>
          </div>
          <button type="submit" class="primary">Crear ticket</button>
        </form>
      </div>
    `;

    document.getElementById('ticket-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const datos = {
        titulo: document.getElementById('titulo').value.trim(),
        solicitante: document.getElementById('solicitante').value.trim(),
        descripcion: document.getElementById('descripcion').value.trim(),
        categoria: document.getElementById('categoria').value,
        prioridad: document.getElementById('prioridad').value,
      };
      try {
        await TicketAPI.crear(datos);
        mostrarToast('Ticket creado correctamente');
        e.target.reset();
        cambiarVista('lista');
      } catch (err) {
        mostrarToast(`Error: ${err.message}`);
      }
    });
  },
};
