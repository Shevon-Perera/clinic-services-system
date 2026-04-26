const items = require('../data/data');

const parsePositiveInt = (value) => {
  const numberValue = typeof value === 'string' && value.trim() !== '' ? Number(value) : value;
  if (!Number.isInteger(numberValue) || numberValue <= 0) return null;
  return numberValue;
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

const getById = (req, res, next) => {
  try {
    const id = parsePositiveInt(req.params.id);
    if (id === null) {
      return res.status(400).json({ message: 'id must be a positive integer' });
    }

    const item = items.find((entry) => entry.id === id);
    if (!item) {
      return res.status(404).json({ message: 'Patient Service record not found' });
    }

    res.status(200).json(item);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll, getById };
