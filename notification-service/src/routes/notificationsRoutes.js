const express = require('express');
const router = express.Router();
const { getAll, getById } = require('../controllers/notificationsController');

/**
 * @swagger
 * /api/notifications:
 *   get:
 *     summary: Get all Notification Service records
 *     tags: [Notification Service]
 *     responses:
 *       200:
 *         description: Successfully retrieved all Notification Service records
 */
router.get('/', getAll);

/**
 * @swagger
 * /api/notifications/{id}:
 *   get:
 *     summary: Get a Notification Service record by ID
 *     tags: [Notification Service]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully retrieved the Notification Service record
 *       404:
 *         description: Record not found
 */
router.get('/:id', getById);

module.exports = router;
