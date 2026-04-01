const doctors = require('../data/data');

const getAllDoctors = (req, res) => {
  res.status(200).json(doctors);
};

const getDoctorById = (req, res) => {
  const doctor = doctors.find(d => d.id === parseInt(req.params.id));
  if (!doctor) {
    return res.status(404).json({ message: 'Doctor not found' });
  }
  res.status(200).json(doctor);
};

const createDoctor = (req, res) => {
  const { name, specialty, availability } = req.body;
  const newDoctor = {
    id: doctors.length ? doctors[doctors.length - 1].id + 1 : 1,
    name,
    specialty,
    availability
  };
  doctors.push(newDoctor);
  res.status(201).json(newDoctor);
};

const updateDoctor = (req, res) => {
  const doctor = doctors.find(d => d.id === parseInt(req.params.id));
  if (!doctor) {
    return res.status(404).json({ message: 'Doctor not found' });
  }

  const { name, specialty, availability } = req.body;
  doctor.name = name ?? doctor.name;
  doctor.specialty = specialty ?? doctor.specialty;
  doctor.availability = availability ?? doctor.availability;

  res.status(200).json(doctor);
};

const deleteDoctor = (req, res) => {
  const index = doctors.findIndex(d => d.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: 'Doctor not found' });
  }

  const deleted = doctors.splice(index, 1);
  res.status(200).json({ message: 'Doctor deleted successfully', deleted });
};

module.exports = {
  getAllDoctors,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor
};
