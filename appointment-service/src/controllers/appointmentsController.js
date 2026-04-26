const items = require('../data/data');

const isPlainObject = (value) =>
  value !== null && typeof value === 'object' && !Array.isArray(value);

const parsePositiveInt = (value) => {
  const numberValue = typeof value === 'string' && value.trim() !== '' ? Number(value) : value;
  if (!Number.isInteger(numberValue) || numberValue <= 0) return null;
  return numberValue;
};

const isValidIsoDate = (value) => {
  if (typeof value !== 'string') return false;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  );
};

const isValidTime = (value) => {
  if (typeof value !== 'string') return false;
  return /^(0?[1-9]|1[0-2]):[0-5]\d\s?(AM|PM)$/i.test(value.trim());
};

const validateAppointmentPayload = (payload, { requireAllFields }) => {
  if (!isPlainObject(payload)) {
    return { ok: false, errors: ['Request body must be a JSON object'] };
  }

  const errors = [];
  const normalized = {};

  const hasPatientId = Object.prototype.hasOwnProperty.call(payload, 'patientId');
  const hasDoctorId = Object.prototype.hasOwnProperty.call(payload, 'doctorId');
  const hasDate = Object.prototype.hasOwnProperty.call(payload, 'date');
  const hasTime = Object.prototype.hasOwnProperty.call(payload, 'time');

  if (requireAllFields) {
    if (!hasPatientId) errors.push('patientId is required');
    if (!hasDoctorId) errors.push('doctorId is required');
    if (!hasDate) errors.push('date is required');
    if (!hasTime) errors.push('time is required');
  } else {
    if (!hasPatientId && !hasDoctorId && !hasDate && !hasTime) {
      errors.push('At least one of patientId, doctorId, date, or time must be provided');
    }
  }

  if (hasPatientId) {
    const parsed = parsePositiveInt(payload.patientId);
    if (parsed === null) errors.push('patientId must be a positive integer');
    else normalized.patientId = parsed;
  }

  if (hasDoctorId) {
    const parsed = parsePositiveInt(payload.doctorId);
    if (parsed === null) errors.push('doctorId must be a positive integer');
    else normalized.doctorId = parsed;
  }

  if (hasDate) {
    if (!isValidIsoDate(payload.date)) errors.push('date must be in YYYY-MM-DD format');
    else normalized.date = payload.date;
  }

  if (hasTime) {
    if (!isValidTime(payload.time)) errors.push('time must be in h:mm AM/PM format');
    else normalized.time = payload.time.trim();
  }

  if (errors.length) return { ok: false, errors };
  return { ok: true, normalized };
};

const getAll = (req, res, next) => {
  try {
    res.status(200).json({
      service: process.env.SERVICE_NAME,
      count: items.length,
      data: items
    });
  } catch (error) {
    next(error);
  }
};
const createAppointment = (req, res, next) => {
  try {
    const validation = validateAppointmentPayload(req.body, { requireAllFields: true });
    if (!validation.ok) {
      return res.status(400).json({
        message: 'Validation error',
        errors: validation.errors
      });
    }

    const newId = items.length ? Math.max(...items.map((entry) => entry.id)) + 1 : 1;
    const newAppointment = {
      id: newId,
      patientId: validation.normalized.patientId,
      doctorId: validation.normalized.doctorId,
      date: validation.normalized.date,
      time: validation.normalized.time
    };

    items.push(newAppointment);
    return res.status(201).json(newAppointment);
  } catch (error) {
    next(error);
  }
};

const updateAppointment = (req, res, next) => {
  try {
    const id = parsePositiveInt(req.params.id);
    if (id === null) {
      return res.status(400).json({ message: 'id must be a positive integer' });
    }

    const item = items.find((entry) => entry.id === id);
    if (!item) {
      return res.status(404).json({ message: 'Appointment Service record not found' });
    }

    const validation = validateAppointmentPayload(req.body, { requireAllFields: false });
    if (!validation.ok) {
      return res.status(400).json({
        message: 'Validation error',
        errors: validation.errors
      });
    }

    const { patientId, doctorId, date, time } = validation.normalized;
    if (patientId !== undefined) item.patientId = patientId;
    if (doctorId !== undefined) item.doctorId = doctorId;
    if (date !== undefined) item.date = date;
    if (time !== undefined) item.time = time;

    return res.status(200).json(item);
  } catch (error) {
    next(error);
  }
};

const deleteAppointment = (req, res, next) => {
  try {
    const id = parsePositiveInt(req.params.id);
    if (id === null) {
      return res.status(400).json({ message: 'id must be a positive integer' });
    }

    const index = items.findIndex((entry) => entry.id === id);
    if (index === -1) {
      return res.status(404).json({ message: 'Appointment Service record not found' });
    }

    const deleted = items.splice(index, 1)[0];
    return res.status(200).json({
      message: 'Appointment deleted successfully',
      data: deleted
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll, createAppointment, updateAppointment, deleteAppointment };
