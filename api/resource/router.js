// build your `/api/resources` router here
const router = require('express').Router()

const Resources = require('./model')

router.get('/', (req, res, next) => {
  Resources.getResources()
      .then((resources) => {
        res.status(200).json(resources)
      })
      .catch(next)
})

module.exports = router
