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


