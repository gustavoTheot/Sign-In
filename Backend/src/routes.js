const express = require('express')
const routes = express.Router();

const authMiddlewares = require('./middlewares/auth')
const UsersController = require('./controllers/UsersController')
const Sessions = require('./controllers/Sessions')
const ProjectController = require('./controllers/ProjectController')

routes
    .get('/users', UsersController.index)
    .post('/users', UsersController.create)

    .post('/sessions', Sessions.create)
    
    .use(authMiddlewares)
    .get('/project', ProjectController.index)

module.exports = routes