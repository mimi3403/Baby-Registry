const express = require('express');
const router = express.Router();
const clothingCtrl = require('../controllers/clothing');

router.get('/clothing', clothingCtrl.index);

module.exports = router;