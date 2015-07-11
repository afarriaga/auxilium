// NOT FORM THE GENERATOR -------------------------
var express = require('express');
var router = express.Router();

/* GET foo page. */
// this is the root of the foo location
// this serves the /views/foo.jade file
// "title" is data passed into the template file
router.get('/', function(req, res, next) {
  res.render('foo', { title: 'Foo Page' });
});

module.exports = router;
