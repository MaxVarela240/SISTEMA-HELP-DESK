const Ticket = require('../models/Ticket');

// GET /api/tickets - listar todos los incidentes
exports.listarTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find().sort({ createdAt: -1 });
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/tickets/:id - buscar un ticket específico
exports.obtenerTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ error: 'Ticket no encontrado' });
    res.json(ticket);
  } catch (err) {
    res.status(400).json({ error: 'ID de ticket inválido' });
  }
};

// POST /api/tickets - registrar un nuevo incidente
exports.crearTicket = async (req, res) => {
  try {
    const { titulo, descripcion, solicitante, categoria, prioridad } = req.body;
    const ticket = await Ticket.create({ titulo, descripcion, solicitante, categoria, prioridad });
    res.status(201).json(ticket);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT /api/tickets/:id - actualizar estado o detalles de un ticket
exports.actualizarTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!ticket) return res.status(404).json({ error: 'Ticket no encontrado' });
    res.json(ticket);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE /api/tickets/:id - eliminar un registro
exports.eliminarTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);
    if (!ticket) return res.status(404).json({ error: 'Ticket no encontrado' });
    res.json({ mensaje: 'Ticket eliminado correctamente' });
  } catch (err) {
    res.status(400).json({ error: 'ID de ticket inválido' });
  }
};
