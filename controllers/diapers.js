const Diaper = require('../models/diaper')

module.exports = {
 index,
 
}


function index(req, res) {
  Diaper.find({}, function(err, diaper) {
    console.log(diaper);
    res.render('diapers/index', {title: 'Diapers', diaper});
  });
}