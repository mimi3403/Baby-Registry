const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.post('/:category/:id/reviews', reviewsCtrl.create);
// router.post('/diapers/:id/reviews', reviewsCtrl.create);
// router.post('/toiletry/:id/reviews', reviewsCtrl.create);
// router.post('/babygear/:id/reviews', reviewsCtrl.create);
// router.post('/baby-must-haves/:id/reviews', reviewsCtrl.create);

module.exports = router;