const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const port = 3000;
require('./config/database');

const indexRouter = require('./routes/index');
const clothingsRouter = require('./routes/clothings');
const diapersRouter = require('./routes/diapers');
const toiletriesRouter = require('./routes/toiletries');
const babyGearsRouter = require('./routes/baby-gears');
const babyMustHavesRouter = require('./routes/baby-must-haves')
const showRouter = require('./routes/show')
const reviewsRouter = require('./routes/reviews')

// initialize the express app
const app = express();

// configure application settings
app.set('view engine', 'ejs');

// mount our middleware
app.use(morgan('dev')); 
app.use(express.static('public')); 
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// mount our routes
app.use('/', indexRouter);
app.use('/clothing', clothingsRouter);
app.use('/diapers', diapersRouter);
app.use('/toiletry', toiletriesRouter);
app.use('/babygear', babyGearsRouter);
app.use('/baby-must-haves', babyMustHavesRouter);
app.use('/show', showRouter);
app.use('/', reviewsRouter);

  
// tell the app to listen on a port for requests
app.listen(port, function() {
  console.log(`Express is listening on port:${port}`)
});