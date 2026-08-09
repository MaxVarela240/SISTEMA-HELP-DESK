const TicketAPI = {
  async listar() {
    const res = await fetch(`${API_BASE_URL}/tickets`);
    if (!res.ok) throw new Error('No se pudo obtener la lista de tickets');
    return res.json();
  },

  async crear(datos) {
    const res = await fetch(`${API_BASE_URL}/tickets`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos),
    });
    if (!res.ok) throw new Error('No se pudo crear el ticket');
    return res.json();
  },

  async actualizar(id, cambios) {
    const res = await fetch(`${API_BASE_URL}/tickets/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cambios),
    });
    if (!res.ok) throw new Error('No se pudo actualizar el ticket');
    return res.json();
  },

  async eliminar(id) {
    const res = await fetch(`${API_BASE_URL}/tickets/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('No se pudo eliminar el ticket');
    return res.json();
  },
};

function mostrarToast(mensaje) {
  const toast = document.getElementById('toast');
  toast.textContent = mensaje;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}
