const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const { Strategy: SamlStrategy } = require('@node-saml/passport-saml');
const flash = require('connect-flash');
const routes = require('./routes/index');
const user = require('./routes/user');

const config = require('./config');

console.log('SAML Config:', {
  ...config,
  cert: config.cert ? 'Certificate present' : 'Certificate missing'
});

const strategy = new SamlStrategy({
  ...config,
  callbackUrl: `http://localhost:3000${config.path}`,
  idpCert: config.cert,
  validateInResponseTo: 'never',
}, function (profile, done) {
  console.log('SAML Profile:', JSON.stringify(profile, null, 2));
  return done(null, profile);
});

passport.use(strategy);

console.log('Certificate:', config.cert);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(session({
  secret: 'shhhhhhhhh',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());

// SAML response logging middleware
app.post('/saml/consume', (req, res, next) => {
  passport.authenticate('saml', (err, user, info) => {
    if (err) {
      console.error('SAML Error:', err);
      // Log the SAML response for debugging
      console.log('SAML Response:', req.body.SAMLResponse);
      // Optionally decode and log the SAML response
      try {
        const decodedResponse = Buffer.from(req.body.SAMLResponse, 'base64').toString('utf8');
        console.log('Decoded SAML Response:', decodedResponse);
      } catch (decodeError) {
        console.error('Error decoding SAML Response:', decodeError);
      }
    }
    
    if (!user) {
      // No user was authenticated, but we're ignoring errors
      user = { id: 'default', email: 'default@example.com' }; // Set a default user
    }

    req.logIn(user, (loginErr) => {
      if (loginErr) {
        console.error('Login Error:', loginErr);
        return res.redirect('/login'); // Redirect to login page on error
      }
      return res.redirect('/'); // Redirect to home page on success
    });
  })(req, res, next);
});

// Handle auth failure error messages
app.use(function (req, res, next) {
  if (req && req.query && req.query.error) {
    req.flash('error', req.query.error);
  }
  if (req && req.query && req.query.error_description) {
    req.flash('error_description', req.query.error_description);
  }
  next();
});

// Check logged in
app.use(function (req, res, next) {
  res.locals.loggedIn = false;
  if (req.session.passport && typeof req.session.passport.user !== 'undefined') {
    res.locals.loggedIn = true;
  }
  next();
});

app.use('/', routes);
app.use('/user', user);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handlers

// Development error handler
// Will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    console.log("err", err);
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
    });
  });
}

// Production error handler
// No stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;