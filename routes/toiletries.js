const express = require('express');
const router = express.Router();
const toiletryCtrl = require('../controllers/toiletries');

router.get('/', toiletryCtrl.index);

module.exports = router;