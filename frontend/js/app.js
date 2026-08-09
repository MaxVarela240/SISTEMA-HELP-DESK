const vistas = {
  dashboard: DashboardView,
  formulario: FormularioView,
  lista: ListaView,
};

function cambiarVista(nombre) {
  document.querySelectorAll('.view').forEach((v) => v.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach((b) => b.classList.remove('active'));

  document.getElementById(`view-${nombre}`).classList.add('active');
  document.querySelector(`.nav-btn[data-view="${nombre}"]`).classList.add('active');

  vistas[nombre].render();
}

document.querySelectorAll('.nav-btn').forEach((btn) => {
  btn.addEventListener('click', () => cambiarVista(btn.dataset.view));
});

cambiarVista('dashboard');
