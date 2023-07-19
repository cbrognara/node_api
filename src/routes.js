const UserController = require("./controllers/UserController");

module.exports = [
    {
        endpoint: '/users',
        method: 'GET',
        handler: UserController.listUsers,
    },
    {
        endpoint: '/products',
        method: 'GET',
        handler: UserController.listUsers,
    },
    {
        endpoint: '/users/:id',
        method: 'GET',
        handler: UserController.getUserById,
    }
]