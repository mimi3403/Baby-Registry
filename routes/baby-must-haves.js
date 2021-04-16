const express = require('express');
const router = express.Router();
const babyMustHavesCtrl = require('../controllers/baby-must-haves');

router.get('/', babyMustHavesCtrl.index);

module.exports = router;