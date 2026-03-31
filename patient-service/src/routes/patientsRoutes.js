const express = require('express');
const router = express.Router();
const { getAll, getById } = require('../controllers/patientsController');

/**
 * @swagger
 * /api/patients:
 *   get:
 *     summary: Get all Patient Service records
 *     tags: [Patient Service]
 *     responses:
 *       200:
 *         description: Successfully retrieved all Patient Service records
 */
router.get('/', getAll);

/**
 * @swagger
 * /api/patients/{id}:
 *   get:
 *     summary: Get a Patient Service record by ID
 *     tags: [Patient Service]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully retrieved the Patient Service record
 *       404:
 *         description: Record not found
 */
router.get('/:id', getById);

module.exports = router;
