const express = require('express');
const salesController = require('../controllers/salesController');
const router = express.router();

router.get('/', salesController.getSales);
router.post('/add', salesController.addSales);

module.exports = router;