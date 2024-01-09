
// Users Controller
// Get All Users
const getUsersHandler = (req, res) => {
    res.send('Get users route');
}

// Post new User
const postUsersHandler = (req, res) => {
    res.send('Post users route');
}

// Get Single User
const getSingleUserHandler = (req, res) => {
    res.send(`Get single user. UserID ${req.params.userID}`);
}

module.exports = {
    getUsersHandler,
    postUsersHandler,
    getSingleUserHandler
};