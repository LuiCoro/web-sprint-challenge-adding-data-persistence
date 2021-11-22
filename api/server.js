// build your server here and require it from index.js
const express = require('express');

const server = express()

const projectsRouter = require('./project/router')
const resourcesRouter = require('./resource/router')
const taskRouter = require('./task/router')

server.use(express.json())

server.use('/api/projects', projectsRouter)
server.use('/api/resources', resourcesRouter)
server.use('/api/tasks', taskRouter)



module.exports = server
