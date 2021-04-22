const Clothing = require('../models/clothing')

module.exports = {
 index,
//  listClothing,
}

// function index(req, res) {
//   res.render('clothing/index');
// }

function index(req, res) {
  Clothing.find({}, function(err, clothing) {
    console.log(clothing);
    res.render('clothing/index', {title: 'Clothing', clothing});
  });
}