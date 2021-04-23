const BabyMustHave = require('../models/baby-must-have')

module.exports = {
 index,
 
}


function index(req, res) {
  BabyMustHave.find({}, function(err, babyMustHave) {
    console.log(babyMustHave);
    res.render('baby-must-haves/index', {title: 'Baby-Must-Haves', babyMustHave});
  });
}