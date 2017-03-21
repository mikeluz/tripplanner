const path = require('path');
const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Promise = require('bluebird');
// const db = require('./models');
const Place = require('./models/place');
const Hotel = require('./models/hotel');
const Activity = require('./models/activity');
const Restaurant = require('./models/restaurant');

app.set('view engine', 'html');
app.engine( 'html' , nunjucks.render );
var env = nunjucks.configure('views', {noCache: true});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan('dev'));
express.static(path.join(__dirname, './public'));

app.use(function(err,req,res,next){
  console.error(err.stack);
  res.status(500).send(err.message);
});

Promise.all([
  Place.sync({}), 
  Hotel.sync({}), 
  Activity.sync({}), 
  Restaurant.sync({})
]).then(function(){
  app.listen(3000, function(){
    console.log('listening on 3000');
  });
})
.catch(console.error);