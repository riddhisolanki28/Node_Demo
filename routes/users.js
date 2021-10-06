var express = require('express');
var router = express.Router();
const users = require('../services/users');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', async function(req, res, next) {
  try {
    const data = await users.getMultiple();
    console.log('data-----------',data.data);
    res.render('users', {layout : 'main', data: data.data});
  } catch (err) {
    console.error(`Error while getting users `, err.message);
    next(err);
  }
});

module.exports = router;
