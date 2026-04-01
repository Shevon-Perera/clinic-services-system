const express = require('express');
const router = express.Router();
const {
  getAllDoctors,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor
} = require('../controllers/doctorController');

/**
 * @swagger
 * tags:
 *   name: Doctors
 *   description: Doctor management APIs
 */

/**
 * @swagger
 * /api/doctors:
 *   get:
 *     summary: Get all doctors
 *     tags: [Doctors]
 *     responses:
 *       200:
 *         description: List of doctors
 *   post:
 *     summary: Create a new doctor
 *     tags: [Doctors]
 *     responses:
 *       201:
 *         description: Doctor created successfully
 */

/**
 * @swagger
 * /api/doctors/{id}:
 *   get:
 *     summary: Get doctor by ID
 *     tags: [Doctors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Doctor found
 *   put:
 *     summary: Update doctor by ID
 *     tags: [Doctors]
 *   delete:
 *     summary: Delete doctor by ID
 *     tags: [Doctors]
 */

router.get('/', getAllDoctors);
router.get('/:id', getDoctorById);
router.post('/', createDoctor);
router.put('/:id', updateDoctor);
router.delete('/:id', deleteDoctor);

module.exports = router;
