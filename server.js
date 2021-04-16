const express = require('express');
const morgan = require('morgan');
const port = 3000;
require('./config/database');

const indexRouter = require('./routes/index');
const clothingRouter = require('./routes/clothing');
const diapersRouter = require('./routes/diapers');
const toiletryRouter = require('./routes/toiletry');
const babyGearRouter = require('./routes/baby-gear');
const babyMustHavesRouter = require('./routes/baby-must-haves')

// initialize the express app
const app = express();

// configure application settings
app.set('view engine', 'ejs');

// mount our middleware
app.use(morgan('dev')); 
app.use(express.static('public')); 
app.use(express.urlencoded({extended: false}));

// mount our routes
app.use('/', indexRouter);
app.use('/clothing', clothingRouter);
app.use('/diapers', diapersRouter);
app.use('/toiletry', toiletryRouter);
app.use('/babygear', babyGearRouter);
app.use('/baby-must-haves', babyMustHavesRouter);
  
// tell the app to listen on a port for requests
app.listen(port, function() {
  console.log(`Express is listening on port:${port}`)
});