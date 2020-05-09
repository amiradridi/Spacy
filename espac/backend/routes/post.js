const express = require('express');
const authenticate = require('../middlewares/authenticate');
const ExtractFile = require('../middlewares/file');
const PostController = require('../controllers/PostController')


var router = express.Router();

router.post('/register',authenticate.verifyUser,ExtractFile, PostController.register);
router.post('/update/:id',authenticate.verifyUser,ExtractFile,PostController.update);
router.get('/show',authenticate.verifyUser,PostController.getPosts);
router.get('/show/:id',authenticate.verifyUser,PostController.getById);
    

module.exports = router;
