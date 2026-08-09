const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true, trim: true },
    descripcion: { type: String, required: true, trim: true },
    solicitante: { type: String, required: true, trim: true },
    categoria: {
      type: String,
      enum: ['Red', 'Hardware', 'Software'],
      required: true,
    },
    prioridad: {
      type: String,
      enum: ['Baja', 'Media', 'Alta'],
      default: 'Media',
    },
    estado: {
      type: String,
      enum: ['Abierto', 'En Progreso', 'Cerrado'],
      default: 'Abierto',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Ticket', ticketSchema);
