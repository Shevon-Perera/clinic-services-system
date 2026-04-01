const express = require('express');
const router = express.Router();
const {
	getAll,
	createAppointment,
	updateAppointment,
	deleteAppointment
} = require('../controllers/appointmentsController');

/**
 * @swagger
 * /api/appointments:
 *   get:
 *     summary: Get all appointments
 *     tags: [Appointment Service]
 *     responses:
 *       200:
 *         description: Successfully retrieved all appointments
 */
router.get('/', getAll);

/**
 * @swagger
 * /api/appointments:
 *   post:
 *     summary: Create a new appointment
 *     tags: [Appointment Service]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - patientId
 *               - doctorId
 *               - date
 *               - time
 *             properties:
 *               patientId:
 *                 type: integer
 *               doctorId:
 *                 type: integer
 *               date:
 *                 type: string
 *                 example: 2026-04-10
 *               time:
 *                 type: string
 *                 example: 09:30 AM
 *     responses:
 *       201:
 *         description: Appointment created successfully
 *       400:
 *         description: Missing required fields
 */
router.post('/', createAppointment);



/**
 * @swagger
 * /api/appointments/{id}:
 *   put:
 *     summary: Update an appointment by ID
 *     tags: [Appointment Service]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               patientId:
 *                 type: integer
 *               doctorId:
 *                 type: integer
 *               date:
 *                 type: string
 *               time:
 *                 type: string
 *     responses:
 *       200:
 *         description: Appointment updated successfully
 *       404:
 *         description: Record not found
 */
router.put('/:id', updateAppointment);

/**
 * @swagger
 * /api/appointments/{id}:
 *   delete:
 *     summary: Delete an appointment by ID
 *     tags: [Appointment Service]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Appointment deleted successfully
 *       404:
 *         description: Record not found
 */
router.delete('/:id', deleteAppointment);

module.exports = router;
