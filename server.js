const express = require('express');
const morgan = require('morgan');
const port = 3000;
require('./config/database');

const indexRouter = require('./routes/index');
const ClothingRouter = require('./routes/clothing');

// initialize the express app
const app = express();

// configure application settings
app.set('view engine', 'ejs');

// mount our middleware
app.use(morgan('dev')); 
app.use(express.static('public')); 
app.use(express.urlencoded({extended: false}));

// mount our routes
app.get('/', indexRouter);
app.get('/clothing', ClothingRouter);
  
// tell the app to listen on a port for requests
app.listen(port, function() {
  console.log(`Express is listening on port:${port}`)
});