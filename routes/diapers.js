const express = require('express');
const router = express.Router();
const diapersCtrl = require('../controllers/diapers');

router.get('/', diapersCtrl.index);

module.exports = router;