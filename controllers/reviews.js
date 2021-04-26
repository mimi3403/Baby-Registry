const Clothing = require('../models/clothing')
const Diaper = require('../models/diaper')
const BabyGear = require('../models/baby-gear')
const BabyMustHave = require('../models/baby-must-have')
const Toiletry = require('../models/toiletry')

module.exports = {
 create,
 delete: deleteReview,
 edit,
 update,
}


function create(req, res) {
  // Clothing.find({}, function(err, clothing) {
  //   console.log(clothing);
  //   res.render('clothing/index', {title: 'Clothing', clothing});
  // });
  // console.log(req.params, 'is the params for review controller');
  if(req.params.category === 'clothing') {
    Clothing.findById(req.params.id, function(err, item) {
      item.reviews.push(req.body);
      item.save(function(){
        res.redirect(`/${req.params.category}`);
      })
    })
  };
  if(req.params.category === 'babygear') {
    BabyGear.findById(req.params.id, function(err, item) {
      item.reviews.push(req.body);
      item.save(function(){
        res.redirect(`/${req.params.category}`);
      })
    })
  };
  if(req.params.category === 'baby-must-haves') {
    BabyMustHave.findById(req.params.id, function(err, item) {
      item.reviews.push(req.body);
      item.save(function(){
        res.redirect(`/${req.params.category}`);
      })
    })
  };
  if(req.params.category === 'diapers') {
    Diaper.findById(req.params.id, function(err, item) {
      item.reviews.push(req.body);
      item.save(function(){
        res.redirect(`/${req.params.category}`);
      })
    })
  }
  if(req.params.category === 'toiletry') {
    Toiletry.findById(req.params.id, function(err, item) {
      item.reviews.push(req.body);
      item.save(function(){
        res.redirect(`/${req.params.category}`);
      })
    })
  }
}

function deleteReview(req, res) {
  if(req.params.category === 'clothing') {
     Clothing.findById(req.params.id, function(err, item) {
      item.reviews.splice(req.body.reviews, 1)
      item.save(function(){
        res.redirect(`/${req.params.category}`);
      })
    })
  }
  if(req.params.category === 'diapers') {
     Diaper.findById(req.params.id, function(err, item) {
     item.reviews.splice(req.body.reviews, 1)
     item.save(function(){
       res.redirect(`/${req.params.category}`);
     })
   })
  }

  if(req.params.category === 'babygear') {
    BabyGear.findById(req.params.id, function(err, item) {
     item.reviews.splice(req.body.reviews, 1)
     item.save(function(){
       res.redirect(`/${req.params.category}`);
     })
   })
  }

  if(req.params.category === 'baby-must-haves') {
    BabyMustHave.findById(req.params.id, function(err, item) {
     item.reviews.splice(req.body.reviews, 1)
     item.save(function(){
       res.redirect(`/${req.params.category}`);
     })
   })
  }

  if(req.params.category === 'toiletry') {
    Toiletry.findById(req.params.id, function(err, item) {
     item.reviews.splice(req.body.reviews, 1)
     item.save(function(){
       res.redirect(`/${req.params.category}`);
     })
   })
  }
}
 
function edit(req, res) {
  if(req.params.category === 'clothing'){
  Clothing.findById(req.params.id, function(err, item) {
    const review = item.reviews.find(review => review.id === req.params.itemId)
    res.render('edit', {
          item,
          category: req.params.category,
          id:req.params.id,
          review,
    })
  })
}
if(req.params.category === 'diapers') {
  Diaper.findById(req.params.id, function(err, item) {
    const review = item.reviews.find(review => review.id === req.params.itemId)
    res.render('edit', {
          item,
          category: req.params.category,
          id:req.params.id,
          review,
    })
  })
}
if(req.params.category === 'babygear') {
  BabyGear.findById(req.params.id, function(err, item) {
    const review = item.reviews.find(review => review.id === req.params.itemId)
    res.render('edit', {
          item,
          category: req.params.category,
          id:req.params.id,
          review,
    })
  })
}
if(req.params.category === 'baby-must-haves') {
  BabyMustHave.findById(req.params.id, function(err, item) {
    const review = item.reviews.find(review => review.id === req.params.itemId)
    res.render('edit', {
          item,
          category: req.params.category,
          id:req.params.id,
          review,
    })
  })
}
if(req.params.category === 'toiletry') {
  Toiletry.findById(req.params.id, function(err, item) {
    const review = item.reviews.find(review => review.id === req.params.itemId)
    res.render('edit', {
          item,
          category: req.params.category,
          id:req.params.id,
          review,
    })
  })
  }
}

function update(req, res) {
  if(req.params.category === 'clothing') {
    Clothing.findById(req.params.id, function(err, item) {  
      const updatedReview = item.reviews.find(review => review.id === req.params.itemId)
      updatedReview.content = JSON.stringify(req.body);
      let data = JSON.parse(updatedReview.content);
      updatedReview.content = data.reviews;
      updatedReview.markModified('updatedReview.content')
      item.save(function(err){
        if(err) return err;
        res.redirect(`/${req.params.category}`)
      })
    })
  }
  if(req.params.category === 'diapers') {
    Diaper.findById(req.params.id, function(err, item) {  
      const updatedReview = item.reviews.find(review => review.id === req.params.itemId)
      updatedReview.content = JSON.stringify(req.body);
      let data = JSON.parse(updatedReview.content);
      updatedReview.content = data.reviews;
      updatedReview.markModified('updatedReview.content')
      item.save(function(err){
        if(err) return err;
        res.redirect(`/${req.params.category}`)
      })
    })
  }

  if(req.params.category === 'babygear') {
    BabyGear.findById(req.params.id, function(err, item) {  
      const updatedReview = item.reviews.find(review => review.id === req.params.itemId)
      updatedReview.content = JSON.stringify(req.body);
      let data = JSON.parse(updatedReview.content);
      updatedReview.content = data.reviews;
      updatedReview.markModified('updatedReview.content')
      item.save(function(err){
        if(err) return err;
        res.redirect(`/${req.params.category}`)
      })
    })
  }
  if(req.params.category === 'baby-must-haves') {
    BabyMustHave.findById(req.params.id, function(err, item) {  
      const updatedReview = item.reviews.find(review => review.id === req.params.itemId)
      updatedReview.content = JSON.stringify(req.body);
      let data = JSON.parse(updatedReview.content);
      updatedReview.content = data.reviews;
      updatedReview.markModified('updatedReview.content')
      item.save(function(err){
        if(err) return err;
        res.redirect(`/${req.params.category}`)
      })
    })
  }
  if(req.params.category === 'toiletry') {
    Toiletry.findById(req.params.id, function(err, item) {  
      const updatedReview = item.reviews.find(review => review.id === req.params.itemId)
      updatedReview.content = JSON.stringify(req.body);
      let data = JSON.parse(updatedReview.content);
      updatedReview.content = data.reviews;
      updatedReview.markModified('updatedReview.content')
      item.save(function(err){
        if(err) return err;
        res.redirect(`/${req.params.category}`)
      })
    })
  }
}
