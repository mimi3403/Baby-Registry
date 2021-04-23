const express = require('express');
const router = express.Router();
const babyGearCtrl = require('../controllers/baby-gears');

router.get('/', babyGearCtrl.index);

module.exports = router;