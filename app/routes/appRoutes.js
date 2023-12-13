const { Router } = require('express')

const appController = require('../controllers/appController')

const appRouter = Router()

appRouter.get('/', appController.index)
appRouter.get('/:id', appController.show)
appRouter.post('/', appController.create)
appRouter.patch('/:id', appController.update)
appRouter.delete('/:id', appController.destroy)

module.exports = appRouter