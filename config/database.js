const mongoose = require('mongoose');

const db = mongoose.connection;


const connectionString = process.env.DATABASE_URI;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});


// database connection event
db.on('connected', function () {
  console.log(`Mongoose connected to:${db.host}:${db.port}`);
});



