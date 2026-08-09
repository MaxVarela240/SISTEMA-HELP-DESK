const ListaView = {
  async render() {
    const container = document.getElementById('view-lista');
    container.innerHTML = '<p>Cargando tickets...</p>';
    try {
      const tickets = await TicketAPI.listar();
      if (!tickets.length) {
        container.innerHTML = '<div class="empty-state">No hay tickets registrados todavía.</div>';
        return;
      }
      container.innerHTML = `
        <h2>Lista de tickets</h2>
        <table>
          <thead>
            <tr><th>Título</th><th>Solicitante</th><th>Descripción</th><th>Categoría</th><th>Prioridad</th><th>Estado</th><th>Acciones</th></tr>
          </thead>
          <tbody>
            ${tickets.map((t) => this.renderFila(t)).join('')}
          </tbody>
        </table>
      `;
      this.bindEventos();
    } catch (err) {
      container.innerHTML = `<div class="empty-state">Error al cargar los tickets: ${err.message}</div>`;
    }
  },

  renderFila(t) {
    return `
      <tr data-id="${t._id}">
        <td>${t.titulo}</td>
        <td>${t.solicitante}</td>
        <td>${t.descripcion}</td>
        <td>${t.categoria}</td>
        <td>${t.prioridad}</td>
        <td><span class="badge ${t.estado.toLowerCase().replace(' ', '-')}">${t.estado}</span></td>
        <td class="actions-cell">
          <select class="estado-select">
            <option value="Abierto" ${t.estado === 'Abierto' ? 'selected' : ''}>Abierto</option>
            <option value="En Progreso" ${t.estado === 'En Progreso' ? 'selected' : ''}>En Progreso</option>
            <option value="Cerrado" ${t.estado === 'Cerrado' ? 'selected' : ''}>Cerrado</option>
          </select>
          <button class="btn-delete">Eliminar</button>
        </td>
      </tr>
    `;
  },

  bindEventos() {
    document.querySelectorAll('.estado-select').forEach((select) => {
      select.addEventListener('change', async (e) => {
        const id = e.target.closest('tr').dataset.id;
        try {
          await TicketAPI.actualizar(id, { estado: e.target.value });
          mostrarToast('Estado actualizado');
        } catch (err) {
          mostrarToast(`Error: ${err.message}`);
        }
      });
    });

    document.querySelectorAll('.btn-delete').forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const fila = e.target.closest('tr');
        const id = fila.dataset.id;
        if (!confirm('¿Eliminar este ticket?')) return;
        try {
          await TicketAPI.eliminar(id);
          fila.remove();
          mostrarToast('Ticket eliminado');
        } catch (err) {
          mostrarToast(`Error: ${err.message}`);
        }
      });
    });
  },
};
