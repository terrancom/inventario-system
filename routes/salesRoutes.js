const express = require('express');
const salesController = require('../controllers/salesController');
const router = express.Router();

router.get('/', salesController.getSales);
router.post('/add', salesController.addSale);

module.exports = router;