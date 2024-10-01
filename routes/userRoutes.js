const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/', userController.getUsers);
router.post('/create', userController.createUsers);
router.post('/delete/:id', userController.deleteUser);
router.post('/assign-license/:userId', userController.assignLicense);

module.exports = router;