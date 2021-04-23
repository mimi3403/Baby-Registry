const clothing = [
  {
    imageURL:'https://assets.theplace.com/image/upload/l_ecom:assets:static:badge:pack5,g_west,w_0.22,fl_relative/t_pdp_img_d,f_auto,q_auto,dpr_1.0/v1/ecom/assets/products/tcp/3021426/3021426_01.jpg',
    brand: 'Childrens-Place',
    productName:'Animal Bodysuit',
    details: 'Made of 100% rib-knit cotton. Pack of 5 bodysuits, Rib-knit crew neck and lap shoulders, ruffle sleeves, and with snap closures at bottom for easy changing.',
    price: 32.95,
    reviews: [],
  },

  {
    imageURL:'https://b3h2.scene7.com/is/image/BedBathandBeyond/31672975410503m?$690$&wid=690&hei=690',
    brand: 'HALO',
    productName:'Wearable Blanket',
    details: "Say goodbye to loose blankets and give your baby the safe, cozy comfort of a HALO SleepSack Wearable Blanket. It cannot be kicked off or cover baby's face, and keeps little legs from hitting or going through crib rails.",
    price: 21.99,
    reviews: [],
  },

  {
    imageURL: 'https://b3h2.scene7.com/is/image/BedBathandBeyond/375560469512155p?$690$&wid=690&hei=690',
    brand: 'Gerber',
    productName:'3-Pack Princess Bunny Burp Cloths',
    details: 'Gerber Burp Cloths will keep you prepared for any mess. Each cute burp cloth is made of absorbent fabric that catches drips, drools, and spills. They are perfect for teething babies and messy eaters alike. Machine wash for easy care',
    price: 8.99,
    reviews: [],
  },
  {
    imageURL: 'https://b3h2.scene7.com/is/image/BedBathandBeyond/34044465442926m?$690$&wid=690&hei=690',
    brand: 'Love to Dream',
    productName:'Celestrial Nights Mediuam Swaddle Up',
    details: 'Made with soft, breathable fabric, the Love to Dream Swaddle UP Swaddle will help your little one sleep soundly. Unique wings keep your baby in their natural arms-up position to help them relax. The roomy design provides space for proper hip development.',
    price: 34.99,
    reviews: [],
  },

  {
    imageURL: 'https://b3h2.scene7.com/is/image/BedBathandBeyond/363947669516842p?$690$&wid=690&hei=690',
    brand: 'Gerber',
    productName:'No-Scratch Mittens',
    details: 'Use Gerber Mittens to keep your little one safe and comfortable. Each cute mitten provides a soft layer of fabric that stops your baby from scratching at their delicate skin. The elastic wristbands will help them stay on all day long.',
    price: 6.99,
    reviews: [],
  },

  {
    imageURL: 'https://b3h2.scene7.com/is/image/BedBathandBeyond/2020-11-10-16-50_beswc40013_0-swadle-farmtotable-4pk_imageset?$690$&wid=690&hei=690',
    brand: 'aden + anais',
    productName:'Muslin Swaddle Blankets',
    details: "Provide the balance of comfort and style with the aden + anais essentials Market Swaddle Blankets. Pack of blankets features a soft grey finish with contrasting patterns and designs that match perfectly with baby's crib, nursery, or car seat.",
    price: 34.99,
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
  // console.log(clothingDocuments)
  // console.log(err)
});

//run it one time.