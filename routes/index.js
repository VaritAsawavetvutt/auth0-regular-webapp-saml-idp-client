var url = require('url');
const express = require('express');
const passport = require('passport');
const router = express.Router();

const config = require('../config');

router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/login', passport.authenticate('saml', { failureRedirect: '/', failureFlash: true }), function (req, res) {
  res.redirect('/');
});

router.post('/callback', (req, res, next) => {
  console.log('SAML callback route hit');
  console.log('Request body:', req.body);

  passport.authenticate('saml', (err, user, info) => {
    console.log('Inside passport.authenticate callback');
    console.log('Error:', err);

    console.error('SAML Error:', err);
    // Log the SAML response for debugging
    console.log('SAML Response:', req.body.SAMLResponse);
    // Optionally decode and log the SAML response
    try {
      const decodedSAMLResponse = Buffer.from(req.body.SAMLResponse, 'base64').toString('utf8');
      console.log('Decoded SAML Response:', decodedSAMLResponse);
      return res.render('saml-response', { decodedSAMLResponse });
    } catch (decodeError) {
      console.error('Error decoding SAML Response:', decodeError);
    }
    
    //return res.redirect('/show-saml-response');

    // req.logIn(user, (loginErr) => {
    //   if (loginErr) {
    //     console.error('Login Error:', loginErr);
    //     return res.redirect('/failure');
    //   }
    //   return res.redirect('/user');
    // });
  })(req, res, next);
});

router.get('/logout', function (req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    const returnToUrl = url.format({
      protocol: req.protocol,
      host: req.get('host'),
      pathname: req.baseUrl
    });
    res.redirect(`https://${config.auth0Domain}/v2/logout?returnTo=${returnToUrl}`);
  });
});

router.get('/failure', function (req, res) {
  var error = req.flash('error');
  var errorDescription = req.flash('error_description');
  // req.logout();
  res.render('failure', {
    error: error[0],
    error_description: errorDescription[0]
  });
});

module.exports = router;
