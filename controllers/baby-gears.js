const BabyGear = require('../models/baby-gear')

module.exports = {
 index,
 
}


function index(req, res) {
  BabyGear.find({}, function(err, babyGear) {
    console.log(babyGear);
    res.render('baby-gear/index', {title: 'Baby-Gear', babyGear});
  });
}