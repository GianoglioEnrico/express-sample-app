var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Enrico\'s Express with WebHook and GitOps Pipeline' });
});

module.exports = router;
