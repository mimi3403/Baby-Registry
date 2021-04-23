const Toiletry = require('../models/toiletry')

module.exports = {
 index,
 
}


function index(req, res) {
  Toiletry.find({}, function(err, toiletry) {
    console.log(toiletry);
    res.render('toiletry/index', {title: 'Toiletry', toiletry});
  });
}