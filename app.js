var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
//var mongoose = require('mongoose');
var flash = require('connect-flash');
var session = require('express-session');
var angular = require('angular');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

var port = process.env.PORT || 3000;

// view engine setup
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
//app.set('view engine', 'jade');

/* Set the port */
app.set('port', port);
console.log("Listening on port " + port);

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* Required for passport */
app.use(session({ secret: 'thisisasecret' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

/* Connect to the database initial login database */
//mongoose.connect('mongodb://localhost/test2');
//var db = mongoose.connection;
//var db = mongoose.createConnection('mongodb://localhost/test2');


app.use('/', routes);
app.use('/users', users);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
