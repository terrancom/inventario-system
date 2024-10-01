const express = require('express');
const licenseController = require('../controllers/licenseController');
const router = express.Router();

router.get('/', licenseController.getLicenses);
router.post('/create', licenseController.createLicense);
router.post('/assign/:id', licenseController.assignLicense);

module.exports = router;