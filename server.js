var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    passport = require('passport')
    app = express();



//controllers
var HomeCtrl = require('./api/controllers/HomeCtrl');
var ProductsCtrl = require('./api/controllers/ProductsCtrl');
var EventsCtrl = require('./api/controllers/EventsCtrl');
var UserCtrl = require('./api/controllers/UserCtrl');

//database setup
var mongoUri = 'mongodb://localhost:27017/fringe-by-sj';

var db = mongoose.connection;

mongoose.set('debug', true);
mongoose.connect(mongoUri);
db.once('open', function() {
  console.log('Connected to MongoDB at', mongoUri);
});


//middleware
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(morgan('dev'));

//endpoints
// app.get('/api/home', HomeCtrl.read);
// app.post('/api/home', HomeCtrl.create);
// app.put('/api/home/:id', HomeCtrl.update);
// app.delete('/api/home/:id', HomeCtrl.delete);

app.get('/api/products', ProductsCtrl.read);
app.get('/api/products/:id', ProductsCtrl.readOne);
app.post('/api/products', ProductsCtrl.create);
app.put('/api/products/:id', ProductsCtrl.update);
app.delete('/api/products/:id', ProductsCtrl.delete);

app.get('/api/users', UserCtrl.read);
app.get('/api/users/:id', UserCtrl.readOne);
app.post('/api/users', UserCtrl.create);
app.put('/api/users/:id', UserCtrl.update);
app.delete('/api/users/:id', UserCtrl.delete);


app.get('/api/events', EventsCtrl.read);
app.get('/api/events/:id', EventsCtrl.readOne);
app.post('/api/events', EventsCtrl.create);
app.put('/api/events/:id', EventsCtrl.update);
app.delete('/api/events/:id', EventsCtrl.delete);







app.listen(3000,function() {
  console.log('listening on port 3000');
});
