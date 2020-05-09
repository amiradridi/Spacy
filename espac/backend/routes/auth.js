const express = require('express');
const {check} = require('express-validator');
const User = require('../controllers/user');
const validate = require('../middlewares/validate');
const Password = require('../controllers/password');
const authenticate = require('../middlewares/authenticate');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', [
  check('email').isEmail().withMessage('Enter a valid email address'),
  check('password').not().isEmpty().isLength({min: 6}).withMessage('Must be at least 6 chars long'),
  check('username').not().isEmpty().withMessage('You username is required'),
  check('firstname').not().isEmpty().withMessage('You first name is required'),
  check('lastname').not().isEmpty().withMessage('You last name is required')
], validate, User.register);

router.get('/verify/:token',User.verify)

router.post('/login',[
  check('email').isEmail().withMessage('Enter a valid email address'),
  check('password').not().isEmpty()
],validate,User.login)

router.post('/recover',check('email').isEmail().withMessage('Enter a valid email address'),Password.recover);

router.get('/reset/:token',Password.reset);

router.post('/resetPassword/:token',Password.resetPassword);

router.get('/test',authenticate.verifyUser,(req, res, next) => {
  res.status(200).json(req.user);
})




module.exports = router;
