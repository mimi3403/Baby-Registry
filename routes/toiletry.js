const express = require('express');
const router = express.Router();
const toiletryCtrl = require('../controllers/toiletry');

router.get('/', toiletryCtrl.index);

module.exports = router;