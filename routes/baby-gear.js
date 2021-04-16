const express = require('express');
const router = express.Router();
const babyGearCtrl = require('../controllers/baby-gear');

router.get('/', babyGearCtrl.index);

module.exports = router;