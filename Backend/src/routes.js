const express = require('express')
const routes = express.Router();

const UsersController = require('./controllers/UsersController')
const Sessions = require('./controllers/Sessions')

routes
    .get('/users', UsersController.index)
    .post('/users', UsersController.create)

    .post('/login', Sessions.create)

module.exports = routes