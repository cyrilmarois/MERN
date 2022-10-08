var express = require('express');
var router = express.Router();
const dbo = require('../db/connexion')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');

  router.get('/mongo', async function(req, res, next) {
    const dbConnect = dbo.getDb();

    dbConnect
      .collection('portfolio')
      .find({})
      .limit(50)
      .toArray(function(err, result) {
        if (err) {
          res.status(400).send('Error fetching');
        } else {
          res.send(result);
        }
      });
  });

});

module.exports = router;
