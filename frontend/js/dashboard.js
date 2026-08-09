const DashboardView = {
  async render() {
    const container = document.getElementById('view-dashboard');
    container.innerHTML = '<p>Cargando estadísticas...</p>';
    try {
      const tickets = await TicketAPI.listar();
      const total = tickets.length;
      const abiertos = tickets.filter((t) => t.estado === 'Abierto').length;
      const enProceso = tickets.filter((t) => t.estado === 'En Progreso').length;
      const cerrados = tickets.filter((t) => t.estado === 'Cerrado').length;

      container.innerHTML = `
        <h2>Resumen general</h2>
        <div class="cards-grid">
          <div class="stat-card total"><div class="value">${total}</div><div class="label">Total de tickets</div></div>
          <div class="stat-card abierto"><div class="value">${abiertos}</div><div class="label">Abiertos</div></div>
          <div class="stat-card proceso"><div class="value">${enProceso}</div><div class="label">En progreso</div></div>
          <div class="stat-card cerrado"><div class="value">${cerrados}</div><div class="label">Cerrados</div></div>
        </div>
        <div class="card">
          <h3>Últimos tickets</h3>
          ${this.renderUltimos(tickets.slice(0, 5))}
        </div>
      `;
    } catch (err) {
      container.innerHTML = `<div class="empty-state">Error al cargar el dashboard: ${err.message}</div>`;
    }
  },

  renderUltimos(tickets) {
    if (!tickets.length) return '<p class="empty-state">Aún no hay tickets registrados.</p>';
    return `
      <table>
        <thead><tr><th>Título</th><th>Solicitante</th><th>Prioridad</th><th>Estado</th></tr></thead>
        <tbody>
          ${tickets
            .map(
              (t) => `
            <tr>
              <td>${t.titulo}</td>
              <td>${t.solicitante}</td>
              <td>${t.prioridad}</td>
              <td><span class="badge ${t.estado.toLowerCase().replace(' ', '-')}">${t.estado}</span></td>
            </tr>`
            )
            .join('')}
        </tbody>
      </table>
    `;
  },
};
