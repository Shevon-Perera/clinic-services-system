const express = require('express');
const router = express.Router();
const {
  getAllDoctors,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor
} = require('../controllers/doctorsController');

/**
 * @swagger
 * /api/doctors:
 *   get:
 *     summary: Get all Doctor Service records
 *     tags: [Doctor Service]
 *     responses:
 *       200:
 *         description: Successfully retrieved all Doctor Service records
 */
router.get('/', getAllDoctors);
router.post('/', createDoctor);
router.get('/:id', getDoctorById);
router.put('/:id', updateDoctor);
router.delete('/:id', deleteDoctor);

/**
 * @swagger
 * /api/doctors/{id}:
 *   get:
 *     summary: Get a Doctor Service record by ID
 *     tags: [Doctor Service]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully retrieved the Doctor Service record
 *       404:
 *         description: Record not found
 */

module.exports = router;
