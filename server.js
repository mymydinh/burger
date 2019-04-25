var express = require('express');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;
var app = express();

// for the css to work
app.use(express.static(__dirname + '/public'));

// Config Body parser & method override
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// Config Ex Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js')
app.use('/', routes);


// Start server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });