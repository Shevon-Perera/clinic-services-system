const items = require('../data/data');

const getAll = (req, res) => {
  res.status(200).json({
    service: process.env.SERVICE_NAME,
    count: items.length,
    data: items
  });
};



const createAppointment = (req, res) => {
  const { patientId, doctorId, date, time } = req.body;

  if (!patientId || !doctorId || !date || !time) {
    return res.status(400).json({
      message: 'patientId, doctorId, date, and time are required'
    });
  }

  const newId = items.length ? Math.max(...items.map((entry) => entry.id)) + 1 : 1;
  const newAppointment = {
    id: newId,
    patientId: Number(patientId),
    doctorId: Number(doctorId),
    date,
    time
  };

  items.push(newAppointment);
  return res.status(201).json(newAppointment);
};

const updateAppointment = (req, res) => {
  const id = Number(req.params.id);
  const item = items.find((entry) => entry.id === id);

  if (!item) {
    return res.status(404).json({ message: 'Appointment Service record not found' });
  }

  const { patientId, doctorId, date, time } = req.body;

  item.patientId = patientId !== undefined ? Number(patientId) : item.patientId;
  item.doctorId = doctorId !== undefined ? Number(doctorId) : item.doctorId;
  item.date = date !== undefined ? date : item.date;
  item.time = time !== undefined ? time : item.time;

  return res.status(200).json(item);
};

const deleteAppointment = (req, res) => {
  const id = Number(req.params.id);
  const index = items.findIndex((entry) => entry.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Appointment Service record not found' });
  }

  const deleted = items.splice(index, 1)[0];
  return res.status(200).json({
    message: 'Appointment deleted successfully',
    data: deleted
  });
};

module.exports = { getAll, createAppointment, updateAppointment, deleteAppointment };
