const {getCommentsHandler, postCommentsHandler, getSingleCommentHandler, deleteSingleCommentHandler} = require('../Controllers/comments');

const express = require('express');
const router = express.Router();


// Comment Routes
// Get All Users Comments
router.get('/', getCommentsHandler);

// Post comments
router.post('/', postCommentsHandler);

// Get the certain Comment
router.get('/:commentID', getSingleCommentHandler);

// Delete the certain Comment
router.delete('/:commentID', deleteSingleCommentHandler);


// Export Router
module.exports = router;