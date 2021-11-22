// build your `Resource` model here
const db = require('../../data/dbConfig')

const getResources = () => {
  return db('resources')
}



module.exports = {
  getResources
}
