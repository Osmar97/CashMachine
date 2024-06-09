const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const cashRegisterController = require('../controllers/cashRegisterController');

router.post('/add', auth, cashRegisterController.addEntry);
router.get('/summary', auth, cashRegisterController.getSummary);

module.exports = router;
