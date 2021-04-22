const clothing = [
  {
    brand: 'Childrens-Place',
    productName:'Animal Bodysuit',
    details: 'Made of 100% rib-knit cotton. Pack of 5 bodysuits, Rib-knit crew neck and lap shoulders, ruffle sleeves, and with snap closures at bottom for easy changing.',
    price: 32.95,
    reviews: [],
  },

  {
    brand: 'HALO',
    productName:'Wearable Blanket',
    details: "Say goodbye to loose blankets and give your baby the safe, cozy comfort of a HALO SleepSack Wearable Blanket. It cannot be kicked off or cover baby's face, and keeps little legs from hitting or going through crib rails.",
    price: 21.99,
    reviews: [],
  },

  {
    brand: 'Gerber',
    productName:'3-Pack Princess Bunny Burp Cloths',
    details: 'Gerber Burp Cloths will keep you prepared for any mess. Each cute burp cloth is made of absorbent fabric that catches drips, drools, and spills. They are perfect for teething babies and messy eaters alike. Machine wash for easy care',
    price: 8.99,
    reviews: [],
  },
  {
    brand: 'Love to Dream',
    productName:'Swaddle Wrap',
    details: 'Made with soft, breathable fabric, the Love to Dream Swaddle UP Swaddle will help your little one sleep soundly. Unique wings keep your baby in their natural arms-up position to help them relax. The roomy design provides space for proper hip development.',
    price: 34.99,
    reviews: [],
  },

  {
    brand: 'Gerber',
    productName:'No-Scratch Mittens',
    details: 'Use Gerber Mittens to keep your little one safe and comfortable. Each cute mitten provides a soft layer of fabric that stops your baby from scratching at their delicate skin. The elastic wristbands will help them stay on all day long.',
    price: 6.99,
    reviews: [],
  },

  {
    brand: 'aden + anais',
    productName:'Muslin Swaddle Blankets',
    details: "introduce your baby to the wonderful world of Disney with aden + anais essentials muslin swaddle blankets. Made of soft, breathable cotton muslin, they're ideal for swaddling, burping, nursing and more. Features assorted sweet prints in cheery colors.",
    price: 39.99,
    reviews: [],
  }
]

const mongoose = require('mongoose');
// shortcut variable
const db = mongoose.connection; 

const connectionString = 'mongodb+srv://admin:abc1234@sei.ieiey.mongodb.net/Baby-Registry-app?retryWrites=true&w=majority';


mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true, 
  useFindAndModify: false,
});

// this is to check whether we've connected to MongoDB or not.
mongoose.connection.on('connected', function(){
  console.log( `Connected to MongoDB on ${db.host}:${db.port}`);
});

const Clothing = require('../models/clothing')

Clothing.insertMany(clothing, function(err, clothingDocuments) {
  console.log(clothingDocuments)
  console.log(err)
});

//run it one time.