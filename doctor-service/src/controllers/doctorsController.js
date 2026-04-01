const items = require('../data/data');

const getAll = (req, res) => {
  res.status(200).json({
    service: process.env.SERVICE_NAME,
    count: items.length,
    data: items
  });
};

const getById = (req, res) => {
  const item = items.find((entry) => entry.id === Number(req.params.id));

  if (!item) {
    return res.status(404).json({ message: 'Doctor Service record not found' });
  }

  res.status(200).json(item);
};

module.exports = { getAll, getById };
