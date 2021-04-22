const express = require('express');
const router = express.Router();
const clothingCtrl = require('../controllers/clothing');

// router.get('/', clothingCtrl.index);
router.get('/', clothingCtrl.index);

module.exports = router;