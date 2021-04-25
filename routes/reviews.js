const express = require('express');
const reviews = require('../controllers/reviews');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.post('/:category/:id/reviews', reviewsCtrl.create);
router.delete('/:category/:id/reviews', reviewsCtrl.delete);
router.get('/:category/:id/:itemId/reviews/edit', reviewsCtrl.edit);
router.put('/:category/:id/:itemId/reviews', reviewsCtrl.update);


module.exports = router;