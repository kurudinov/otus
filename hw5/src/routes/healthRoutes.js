// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const healthController = require('../controllers/healthController');

router.get('/', healthController.getStatus);

module.exports = router;