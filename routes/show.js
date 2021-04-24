const express = require('express');
const router = express.Router();
const showCtrl = require('../controllers/show');

router.get('/:category/:id', showCtrl.show);

module.exports = router;