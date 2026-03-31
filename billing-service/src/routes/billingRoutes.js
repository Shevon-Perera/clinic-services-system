const express = require('express');
const router = express.Router();
const { getAll, getById } = require('../controllers/billingController');

/**
 * @swagger
 * /api/billing:
 *   get:
 *     summary: Get all Billing Service records
 *     tags: [Billing Service]
 *     responses:
 *       200:
 *         description: Successfully retrieved all Billing Service records
 */
router.get('/', getAll);

/**
 * @swagger
 * /api/billing/{id}:
 *   get:
 *     summary: Get a Billing Service record by ID
 *     tags: [Billing Service]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully retrieved the Billing Service record
 *       404:
 *         description: Record not found
 */
router.get('/:id', getById);

module.exports = router;
