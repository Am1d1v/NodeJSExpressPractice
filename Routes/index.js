const commentsRouter = require('./comments');
const usersRouter = require('./users');
const {getRootHandler} = require('../Controllers/root');
const express = require('express');
const router = express.Router();


router.get('/', getRootHandler);
router.use('/comments', commentsRouter);
router.use('/users', usersRouter);

module.exports = router;