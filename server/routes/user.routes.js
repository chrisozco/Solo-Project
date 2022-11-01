const UserController = require('../controller/user.controller')
const {registerUser, loginUser, logOutUser} = UserController

module.exports = (app) => {
    app.post('/api/register', registerUser)
    app.post('/api/login', loginUser)
    app.get('/api/logout', logOutUser)
}