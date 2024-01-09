const express = require('express');
const router = express.Router();


// Comment Routes
// Get All Users Comments
router.get('/comments', getCommentsHandler);

// Post comments
router.post('/comments', postCommentsHandler);

// Get the certain Comment
router.get('/comments/:commentID', getSingleCommentHandler);

// Delete the certain Comment
router.delete('/comments/:commentID', deleteSingleCommentHandler);


// Export Router
module.exports = router;